import nodemailer from 'nodemailer';
import { logger } from './logger';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export interface ClaimEmailData {
  firstName: string;
  email: string;
  phone: string;
  postalCode: string;
  faultParty: string;
  description: string;
  accidentDate?: string | null;
  accidentLocation?: string | null;
  opponentInfo?: string | null;
  preferredDate?: string | null;
  preferredTimeSlot?: string | null;
  photoPaths: string[];
}

export async function sendClaimNotification(claim: ClaimEmailData): Promise<void> {
  const to = process.env.SMTP_TO;
  const from = process.env.SMTP_FROM;

  if (!to || !from || !process.env.SMTP_HOST || !process.env.SMTP_PASSWORD) {
    logger.warn('SMTP not fully configured – skipping email notification');
    return;
  }

  const faultLabel = claim.faultParty === 'other' ? 'Unfallgegner' : 'Selbst';
  const timeSlotLabels: Record<string, string> = {
    morning: 'Vormittags',
    afternoon: 'Nachmittags',
    allday: 'Ganztags',
  };

  const html = `
<h2>Neue Schadenmeldung – Schaden-Service24</h2>
<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Name</td><td>${claim.firstName}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">E-Mail</td><td><a href="mailto:${claim.email}">${claim.email}</a></td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Telefon</td><td>${claim.phone}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">PLZ</td><td>${claim.postalCode}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Schuld</td><td>${faultLabel}</td></tr>
  ${claim.accidentDate ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Unfalldatum</td><td>${claim.accidentDate}</td></tr>` : ''}
  ${claim.accidentLocation ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Unfallort</td><td>${claim.accidentLocation}</td></tr>` : ''}
  ${claim.opponentInfo ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Unfallgegner</td><td>${claim.opponentInfo}</td></tr>` : ''}
  ${claim.preferredDate ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Wunschtermin</td><td>${claim.preferredDate}${claim.preferredTimeSlot ? ` – ${timeSlotLabels[claim.preferredTimeSlot] ?? claim.preferredTimeSlot}` : ''}</td></tr>` : ''}
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Fotos</td><td>${claim.photoPaths.length} Datei(en)</td></tr>
</table>
<h3 style="margin-top:16px">Schadensbeschreibung</h3>
<p style="white-space:pre-wrap">${claim.description}</p>
`;

  await transporter.sendMail({
    from: `Schaden-Service24 <${from}>`,
    to,
    subject: `Neue Schadenmeldung von ${claim.firstName}`,
    html,
  });

  logger.info({ to }, 'Claim notification email sent');
}

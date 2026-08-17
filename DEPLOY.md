# Deployment auf Render – Schritt-für-Schritt

## Voraussetzungen
- GitHub-Account (Repo muss **public** oder mit Render verbunden sein)
- Render-Account (kostenlos: https://render.com)

---

## 1. Projekt zu GitHub pushen

```bash
# Einmalig, im Projektordner:
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/DEIN-USERNAME/schaden-service24.git
git push -u origin main
```

---

## 2. Blueprint in Render einrichten

1. In Render einloggen → **"New +"** → **"Blueprint"**
2. GitHub-Repo auswählen → Render liest `render.yaml` automatisch ein
3. Render erstellt dann automatisch:
   - `schaden-service24-db` (PostgreSQL)
   - `schaden-service24-api` (Node.js Web Service)
   - `schaden-service24-web` (Static Site)

---

## 3. Nach dem ersten Deploy: URLs austauschen

Nach dem ersten erfolgreichen Deploy erhalten Sie zwei Render-URLs:

| Dienst | Beispiel-URL |
|--------|-------------|
| API    | `https://schaden-service24-api.onrender.com` |
| Website | `https://schaden-service24-web.onrender.com` |

Tragen Sie diese URLs in den jeweiligen Umgebungsvariablen ein:

**API Service → Environment → `CORS_ORIGIN`**
```
https://schaden-service24-web.onrender.com
```
*(oder Ihre eigene Domain, sobald verbunden)*

**Static Site → Environment → `VITE_API_URL`**
```
https://schaden-service24-api.onrender.com
```
Danach: **Manual Deploy → Deploy latest commit** für die Static Site auslösen,
damit die neue API-URL in den Build eingebacken wird.

> **Wichtig:** `VITE_API_URL` wird zur Build-Zeit in das JavaScript eingebaut.
> Jede Änderung erfordert einen neuen Build (= neues Deploy der Static Site).

---

## 4. Health-Check-Route hinzufügen (empfohlen)

Die `render.yaml` konfiguriert einen Health-Check auf `/api/health`.
Fügen Sie diese Route in `artifacts/api-server/src/routes/index.ts` ein:

```typescript
router.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});
```

Ohne diese Route zeigt Render einen Health-Check-Fehler – der Dienst läuft trotzdem,
aber die Warnung erscheint im Dashboard.

---

## 5. Datenbank-Migrations

Die `preDeployCommand` in `render.yaml` führt `drizzle-kit push` automatisch
vor jedem Deploy aus. Die `claims`-Tabelle wird also beim ersten Start angelegt.

---

## 6. ⚠ Foto-Upload (Schaden-Melden)

Der Foto-Upload nutzt **Replit Object Storage**, das außerhalb von Replit
nicht verfügbar ist. Auf Render muss dieses durch einen S3-kompatiblen
Dienst ersetzt werden (z. B. **AWS S3**, **Cloudflare R2**, **Backblaze B2**).

**Betroffene Datei:** `artifacts/api-server/src/lib/objectStorage.ts`

Bis zum Austausch schlägt das Hochladen von Fotos im Schadenmelde-Formular fehl.
Die komplette Landing Page (alle anderen Seiten) funktioniert uneingeschränkt.

---

## 7. Eigene Domain verbinden

In Render → Dienst auswählen → **"Custom Domains"** → Domain eintragen.
Render stellt automatisch ein kostenloses TLS-Zertifikat (Let's Encrypt) aus.

Anschließend `CORS_ORIGIN` und `VITE_API_URL` auf die echten Domains aktualisieren
und einen neuen Deploy auslösen.

---

## Kostenübersicht (Stand 2026)

| Plan | API Service | Static Site | Datenbank |
|------|-------------|-------------|-----------|
| Free | ✅ (schläft nach 15 min Inaktivität) | ✅ | ✅ (90 Tage TTL) |
| Starter (~7 $/Monat pro Dienst) | Kein Sleep, SLA | — | Persistent |

Für Produktionsbetrieb wird mindestens **Starter** für den API Service und
die Datenbank empfohlen.

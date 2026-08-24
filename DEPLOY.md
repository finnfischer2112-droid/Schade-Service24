# Deployment auf Render

## Zielarchitektur

Render betreibt nur noch zwei Dienste:

1. `schaden-service24-web` – ein Node-Web-Service, der die React-Landingpage ausliefert und alle `/api`-Routen verarbeitet
2. `schaden-service24-db` – die bestehende PostgreSQL-Datenbank

Der frühere separate Service `schaden-service24-api` wird nach erfolgreicher Prüfung des kombinierten Web-Service entfernt.

## Blueprint aktualisieren

1. Änderungen in den verbundenen GitHub-Branch pushen.
2. In Render den Blueprint öffnen und die aktuelle `render.yaml` synchronisieren.
3. Prüfen, dass `schaden-service24-web` auf dem Starter-Plan läuft.
4. Die Domain `saarpfalzreifen24.de` muss mit `schaden-service24-web` verbunden sein.
5. Die bestehende PostgreSQL-Datenbank nicht löschen oder neu anlegen.

## Umgebungsvariablen

Der kombinierte Web-Service benötigt:

- `DATABASE_URL` aus `schaden-service24-db`
- `SESSION_SECRET`
- `SMTP_HOST=smtp.hostinger.com`
- `SMTP_PORT=465`
- `SMTP_USER=info@my-almaron.de`
- `SMTP_FROM=info@my-almaron.de`
- `SMTP_TO=finnfischer2112@gmail.com`
- `SMTP_PASSWORD` als manuell gesetztes Render-Secret

Das SMTP-Passwort darf niemals in GitHub, Logs oder Dokumentation eingetragen werden.

Die Replit-spezifischen Object-Storage-Variablen werden auf Render nicht konfiguriert. Die Platzhalterwerte dürfen nicht verwendet werden. Foto-Uploads benötigen später einen kompatiblen Object-Storage; eine Schadenmeldung wird auch ohne erfolgreiche Fotos gespeichert.

## Build und Start

Der kombinierte Service:

1. installiert die Workspace-Abhängigkeiten
2. synchronisiert das Datenbankschema
3. baut die React-Landingpage
4. baut den Express-Server
5. startet Express auf dem von Render gesetzten `PORT`

Express liefert sowohl die Webseite als auch die API aus. Das Frontend verwendet relative `/api`-URLs; `VITE_API_URL` wird nicht mehr benötigt.

## Prüfung vor Abschalten der alten API

Vor dem Entfernen von `schaden-service24-api` müssen folgende Prüfungen erfolgreich sein:

- `GET /api/health` antwortet mit Status 200
- Startseite und direkte Aufrufe von `/schaden-melden`, `/impressum` und `/datenschutz` funktionieren
- eine neue Schadenmeldung wird mit Status 201 gespeichert
- die Benachrichtigungs-E-Mail wird erfolgreich versendet
- Render-Logs enthalten keine Build-, Datenbank- oder SMTP-Fehler

Erst danach kann der alte API-Service in Render gelöscht werden. Die Datenbank bleibt bestehen.

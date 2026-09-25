# YTTP Barcelona Live

Wegwerfbares Live Tool für den AI Workshop am 02.10.2026 in Barcelona.
Eine Seite, Teilnehmer und Moderator, Realtime über Supabase. Kein Login für Teilnehmer.

## Teile
- `index.html` App (Auftaktumfrage, Ideenwand, Publikumsvoting, Quiz)
- `server.js` minimaler Node Server, spritzt ENV in die Seite
- Backend: Supabase Projekt `feedback loop studios`, Tabellen mit Präfix `bcn_`

## ENV (in Railway setzen)
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY` (publishable key)
- `MOD_SECRET` frei wählbar, öffnet die Moderatoransicht über `?mod=<secret>`

## Nutzung
- Teilnehmer: Basis URL (QR Code auf der Startbühne)
- Moderator: `?mod=<MOD_SECRET>` an die URL, steuert die Bühne

## Aufräumen nach Barcelona
1. Railway Service löschen
2. GitHub Repo löschen
3. Supabase: `drop table bcn_state, bcn_poll_responses, bcn_ideas, bcn_votes, bcn_quiz_answers cascade;`

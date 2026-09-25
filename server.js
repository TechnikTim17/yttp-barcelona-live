// Minimaler statischer Server, spritzt die Supabase Zugaenge aus ENV in die Seite.
// Keine Abhaengigkeiten. Wegwerfbar nach Barcelona.
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || "";
const MOD_SECRET = process.env.MOD_SECRET || "";

const template = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

function page() {
  return template
    .split("%%SUPABASE_URL%%").join(SUPABASE_URL)
    .split("%%SUPABASE_KEY%%").join(SUPABASE_KEY)
    .split("%%MOD_SECRET%%").join(MOD_SECRET);
}

const server = http.createServer((req, res) => {
  const url = (req.url || "/").split("?")[0];
  if (url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("ok");
  }
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(page());
});

server.listen(PORT, () => console.log("YTTP Barcelona Live auf Port " + PORT));

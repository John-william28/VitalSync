const express = require("express");
const app = express();
app.get("/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date() });
});
app.get("/api/activities", (req, res) => {
res.json([]);
});
app.listen(3000, () => console.log("VitalSync API on :3000"));
app.get(" /api/new-feature\, (req, res) => res.json({ message: \feature endpoint\ }));

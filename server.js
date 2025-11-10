const express = require("express");
const multer = require("multer");
const app = express();
const port = process.env.PORT || 4000;

const upload = multer({ storage: multer.memoryStorage() }).fields([
  { name: "file0" },
  { name: "file1" },
  { name: "file2" },
  { name: "file3" },
  { name: "file4" },
]);

app.use(express.json());

app.post("/api/audit", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: "File upload error." });
    }

    const appId = req.body.appId;
    const prompt = req.body.prompt;
    const files = Object.values(req.files);

    if (!appId || !prompt || files.length === 0) {
      return res.status(400).json({ error: "Missing required fields or files." });
    }

    const auditReport = {
      appId,
      prompt,
      transcriptSummary: "Mock transcription of provided audio files.",
      auditFindings: files.map((file, i) => `Finding note for file${i}`),
      fileCount: files.length,
      timestamp: new Date().toISOString(),
    };

    res.json(auditReport);
  });
});

app.listen(port, () => {
  console.log(`Audit backend API listening at http://localhost:${port}`);
});

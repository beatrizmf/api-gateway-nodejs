const express = require("express");

const app = express();

app.use(express.json());

app.get("/status", (req, res) => {
  return res.send({ subtract_status: "ok" });
});

app.post("/", (req, res) => {
  const { num1, num2 } = req.body;

  if (!num2 || !num2) {
    return res.status(400).send({ error: "invalid values" });
  }

  return res.json({ subtract: num1 - num2 });
});

app.listen(3332, () => console.log("subtract listening on port 3332 🚀"));

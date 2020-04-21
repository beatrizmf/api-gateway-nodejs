const express = require("express");

const app = express();

app.use(express.json());

app.get("/status", (req, res) => {
  return res.send({ divide_status: "ok" });
});

app.post("/", (req, res) => {
  const { num1, num2 } = req.body;

  if (!num2 || !num2) {
    return res.status(400).send({ error: "invalid values" });
  }

  return res.json({ divide: num1 / num2 });
});

app.listen(3330, () => console.log("divide listening on port 3330 🚀"));

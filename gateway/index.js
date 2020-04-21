const express = require("express");

const proxy = require("express-http-proxy");

const app = express();
app.use(express.json());

const {
  URL_DIVIDE,
  URL_MULTIPLY,
  URL_SUBTRACT,
  URL_SUM,
} = require("./services");

const divideServiceProxy = proxy(URL_DIVIDE);
const multiplyServiceProxy = proxy(URL_MULTIPLY);
const subtractServiceProxy = proxy(URL_SUBTRACT);
const sumServiceProxy = proxy(URL_SUM);

app.get("/status", (req, res) =>
  res.send({
    gateway_status: "ok",
  })
);

app.use("/divide", (req, res, next) => divideServiceProxy(req, res, next));
app.use("/multiply", (req, res, next) => multiplyServiceProxy(req, res, next));
app.use("/subtract", (req, res, next) => subtractServiceProxy(req, res, next));
app.use("/sum", (req, res, next) => sumServiceProxy(req, res, next));

app.listen(3000, () => console.log("gateway listening on port 3000 🚀"));

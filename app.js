require("dotenv").config();
require("./app/config/database");

const cors = require("cors")
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const BASE_API_URL = "/v1/api";
const BASE_AUTH_URL = "/v1/auth";

const errorHandler = require("./app/middlewares/error-handler");
const notFoundRoute = require("./app/middlewares/not-found");
const authRouter = require("./app/api/v1/auth/router");
const productRouter = require("./app/api/v1/product/router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => res.status(200).send("Welcome to Portal Auth"));
app.use(BASE_AUTH_URL, authRouter);
app.use(BASE_API_URL, productRouter);
app.use(errorHandler);
app.use(notFoundRoute);

const runningMessage = `server running at port : ${PORT}`;
app.listen(PORT, () => console.log(runningMessage));
console.log("Database connection success");

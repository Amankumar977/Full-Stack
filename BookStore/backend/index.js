import express from "express";
import "dotenv/config";
import appConfig from "./config/config.js";
import mongoose from "mongoose";
import bookRouter from "./router/bookRouter.js";
import cors from "cors";
const PORT = appConfig.PORT;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
  res.status(201).send("<h1> Hello </h1>");
});
app.get("/health", (req, res) => {
  return res.status(201).send("<h1> Budha hoga tera baap !!!! </h1>");
});
app.use("/books", bookRouter);
app.get("*", (req, res) => {
  return res.send("<h1> 404 Page not found </h1>");
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(PORT, () => {
      console.log(`The server has started ${PORT} `);
    });
  })
  .catch((error) => {
    console.log("There is a error in connection", error.message);
  });

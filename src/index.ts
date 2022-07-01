import express from "express";
import userRoute from "./routes/user";
import dbConnection from "./utils/db";

const app = express();

const PORT = process.env.PORT || 4000;

// starting DB
dbConnection();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/user/", userRoute);

app.listen(PORT, () => {
  console.log("server on port ", PORT);
});

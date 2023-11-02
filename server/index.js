import express, { Router } from "express";
import AuthRoutes from "./routes/AuthRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started At Port ${process.env.PORT}`);
});

/// server part
import express from "express";
import cors from "cors";
import { sendMessage } from "./discord";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send("discord notification server");
});

app.get("/api", (_, res) => {
  sendMessage({ title: "webhook title", message: "webhook message" });
  res.json({
    message: "discord notification server",
  });
});

app.listen(PORT, () =>
  console.log(`server is readey http://localhost:${PORT}`)
);

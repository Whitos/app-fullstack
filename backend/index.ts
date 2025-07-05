import dotenv from "dotenv";
import app from "./src/app";
import './src/database/db'

dotenv.config();

const { APPPORT } = process.env;

app
  .listen(APPPORT, () => {
    console.log(`SERVER IS LISTENING SLP ${APPPORT}`);
  })
  .on("error", (error: Error) => {
    console.error(error);
  });

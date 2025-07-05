import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { DBHOST, DBUSER, DBPASSWORD, DBNAME, DBPORT } = process.env;

const client = new Client({
  user: DBUSER,
  host: DBHOST,
  database: DBNAME,
  password: DBPASSWORD,
  port: Number(DBPORT),
});

client
  .connect()
  .then(async () => {
    console.info("SERVER IL EST LA BTRD");
  })
  .catch((error: Error) => {
    console.error(error);
  });

  export default client;

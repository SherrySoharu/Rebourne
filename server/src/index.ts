import express, { Express } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(8080, () => console.log("Server running on port 8080!"));

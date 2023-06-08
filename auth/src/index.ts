import express  from "express";
import { json } from "body-parser";

import { currentuserRouter } from "./routes/current-user";

const app = express();
app.use(json());

app.use(currentuserRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
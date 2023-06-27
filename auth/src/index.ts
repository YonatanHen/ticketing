import express  from "express";
import 'express-async-errors';
import { json } from "body-parser";

import { currentuserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signUpRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

app.use(currentuserRouter);
app.use(signInRouter);
app.use(signoutRouter);
app.use(signUpRouter);

app.get('*', async (req,res) => {
    throw new NotFoundError();
})

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
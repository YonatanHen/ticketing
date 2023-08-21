import express  from "express";
import 'express-async-errors';
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { currentuserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signUpRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.set('trust proxy', true); //express should be aware that he is behind the nginx-ingress proxy
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
);

app.use(currentuserRouter);
app.use(signInRouter);
app.use(signoutRouter);
app.use(signUpRouter);

app.get('*', async (req,res) => {
    throw new NotFoundError();
})

app.use(errorHandler);

export { app };
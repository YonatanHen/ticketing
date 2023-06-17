import express  from "express";
import { json } from "body-parser";

import { currentuserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signUpRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(json());

app.use(currentuserRouter);
app.use(signInRouter);
app.use(signoutRouter);
app.use(signUpRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
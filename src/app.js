import express from "express";
import morgan from "morgan";
import routerProducts from "./routes/products.routes.js";
import routerAuth from './routes/auth.routes.js'
import routerUser from './routes/users.routes.js'
import { createRole } from "./libs/initialSetup.js";

const app = express();
createRole();
app.use(morgan('dev'));
app.use(express.json())

app.use('/products',routerProducts)
app.use('/auth', routerAuth)
app.use('/users', routerUser)

export default app;


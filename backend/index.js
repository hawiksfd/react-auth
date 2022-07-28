import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
// import db from './config/Database.js';
import UsersRoute from "./routes/UsersRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AuthRoute from "./routes/AuthRoute.js";


dotenv.config();

//##########################################   deklarasi express js
const app = express();

//##########################################   sinkronasi database otomatis
// (async () => {
//     await db.sync();
// })();


//##########################################   deklarasi session
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));

//##########################################   deklarasi middleware
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

//##########################################  routing page
app.use(express.json());
app.use(UsersRoute)
app.use(ProductRoute);
app.use(AuthRoute);

//##########################################  menjalankan server dengan port dotenv
app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running!");
});
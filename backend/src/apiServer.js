import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import apiRouter from "./routers/noteController.js";
import userApi from "./routers/userController.js";
import { SECURE_INFO } from "../config/env.js";

const apiApp = express();
const corsOptions = {
    origin: [/localhost:3500/, /localhost:3000/]
};

const appSetting = (app) => {
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use("/node_modules", express.static("node_modules"));
};

appSetting(apiApp);

apiApp.use("/api/notepad", cors(corsOptions), apiRouter);
apiApp.use("/api/users", cors(corsOptions), userApi);

const handleHttpListen = () => console.log(`Api Listening: http://localhost:${SECURE_INFO.HTTPPORT}`);

apiApp.listen(SECURE_INFO.HTTPPORT, handleHttpListen);
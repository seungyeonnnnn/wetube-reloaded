import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import apiRouter from "./routers/apiRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug"); // >npm i pug 설치 후 추가
app.set("views", process.cwd() + "/src/views"); // views directories 위치 이동
app.use(logger);
app.use(express.urlencoded({ extended: true })); //express app이 form의 value들을 이해할 수 있도록 함 & JS 형식으로 변형
// app.use(express.text()); //Front_JS의 fetch text를 Back에서 이해할 수 있도록 but 하나만 주고 받을 떄
app.use(express.json()); //Front_JS의 fetch text를 Back에서 이해할 수 있도록 but 하나만 주고 받을 떄

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false, // Login한 브라우저에만 Cookie를 전달하고 Session을 저장.
    // postLogin에서 Session을 수정하기 때문에 Login할 경우에만 저장하게됨
    // // 해당 시간동안 cookie가 유지되고 지나면 만료되어 Logout됨
    // cookie: {
    //   maxAge: 20000,
    // },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(flash());
app.use(localsMiddleware);
app.use((req, res, next) => {
  res.header("Cross-Origin-Embedder-Policy", "credentialless");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
});
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/api", apiRouter);

export default app;

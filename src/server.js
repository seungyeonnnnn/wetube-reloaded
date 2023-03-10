import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug"); // >npm i pug 설치 후 추가
app.set("views", process.cwd() + "/src/views"); // views directories 위치 이동
app.use(logger);
app.use(express.urlencoded({ extended: true })); //express app이 form의 value들을 이해할 수 있도록 함 & JS 형식으로 변형
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);

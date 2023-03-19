import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`🟢 Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);

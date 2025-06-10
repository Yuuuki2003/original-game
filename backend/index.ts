import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import battleRoutes from "./routes/battle";

const app = express();
const PORT = 3001;

// ミドルウェア設定
app.use(cors());
app.use(bodyParser.json());

// APIルーティング
app.use("/api", battleRoutes);

// サーバー起動
app.listen(PORT, () => {
  console.log(`🚀 API server running at http://localhost:${PORT}`);
});

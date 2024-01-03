const express = require('express');
const app = express();
const PORT = 3333; // ポート番号
const mongoose = require('mongoose');
require("dotenv").config();

// データベース接続
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB接続成功")
    }).catch((err) => {
        console.log("DB接続失敗")
    });

// ミドルウェアによるルーティング設定
app.use(express.json()); // JSON形式で扱う設定だよ
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const authRoute = require('./routes/auth');
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

// サーバ起動
app.listen(PORT, () => console.log(`サーバが起動しました（PORT：${PORT}）`));


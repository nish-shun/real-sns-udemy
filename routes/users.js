// 設定したルーティングを実際に処理するファイル
const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("User Router!");
});

// このファイルをモジュールとして扱うために必要
module.exports = router;
// 設定したルーティングを実際に処理するファイル
const router = require('express').Router();
const User = require('../models/User');

// ユーザ登録
// https://mongoosejs.com/docs/models.html
router.post('/register', async (req, res) => {
    try {
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        const user = await newUser.save();
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// このファイルをモジュールとして扱うために必要
module.exports = router;
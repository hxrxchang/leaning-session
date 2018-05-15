const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // セッションの破棄
  req.session.destroy();

  // cookieに保存されるセッションIDの破棄
  res.clearCookie('connect.sid', { path: '/'});

  // ログインページに進む
  res.redirect('/');
});

module.exports = router;
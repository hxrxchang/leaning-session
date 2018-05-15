var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const userName = req.session.userName;
  if (userName) {
    res.redirect('/myPage');
  }
  else {
    res.render('index', { title: 'Express' });
  }
});

router.post('/', (req, res) => {
  const id = req.body.userName;
  const password = req.body.password;

  if (id === password) {
    // ログイン成功
    // セッションにデータを保持
    req.session.userName = id;
    req.session.isLogin = true;
    req.session.save(() => {
      res.redirect('/myPage');
    });
  } else {
    // ログイン失敗
    res.render('index', { isError: true });
  }
});

module.exports = router;

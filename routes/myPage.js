const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const userName = req.session.userName;

  if (userName) {
    res.render('myPage', { userName });
  }
  else {
    res.redirect('/');
  }
});

module.exports = router;
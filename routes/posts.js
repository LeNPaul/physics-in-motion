const express = require('express');
const router = express.Router();

router.get('/page', (req, res) => {
    res.render('posts/posts', {
      user : req.user,
      title : 'News & Updates | Physics in Motion'
     });
});

module.exports = router;

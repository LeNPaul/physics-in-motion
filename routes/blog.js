const express = require('express');
const router = express.Router();

router.get('/blog', (req, res) => {
    res.render('blog/blog', {
      user : req.user,
      title : 'Physics in Motion | How physics should be taught'
     });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/read', function(req, res) {
  read('http://www.nytimes.com/2015/10/26/technology/facebook-meets-skepticism-in-bid-to-expand-internet-in-india.html', function (err, article, meta) {
    console.log(article); 
    
  });
});

module.exports = router;

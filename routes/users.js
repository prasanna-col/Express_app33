var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var details= {
    result:"successful",
    msg:true
  }
  res.send(details);
});

module.exports = router;

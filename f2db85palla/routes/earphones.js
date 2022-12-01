var express = require('express');
const earphone_controlers= require('../controllers/earphone');
var router = express.Router();
/* GET earphones */
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
router.get('/', earphone_controlers.earphone_view_all_Page );
/* GET detail earphone page */
router.get('/detail',secured, earphone_controlers.earphone_view_one_Page);
router.get('/create',secured, earphone_controlers.earphone_create_Page);
router.get('/update',secured, earphone_controlers.earphone_update_Page);
router.get('/delete',secured, earphone_controlers.earphone_delete_Page);
module.exports = router;
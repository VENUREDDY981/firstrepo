var express = require('express');
const earphone_controlers= require('../controllers/earphone');
var router = express.Router();
/* GET earphones */
router.get('/', earphone_controlers.earphone_view_all_Page );
/* GET detail earphone page */
router.get('/detail', earphone_controlers.earphone_view_one_Page);
router.get('/create', earphone_controlers.earphone_create_Page);
router.get('/update', earphone_controlers.earphone_update_Page);
router.get('/delete', earphone_controlers.earphone_delete_Page);
module.exports = router;
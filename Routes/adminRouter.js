const express=require('express');
const Admincontroller = require('../Controller/Admincontroller');
const router = express.Router();


router.get('/',Admincontroller.renderDashboard);

module.exports=router
const express=require('express');
const Admincontroller = require('../Controller/Admincontroller');
const UserController = require('../Controller/UserController');
const router = express.Router();


router.get('/',UserController.renderHome);
router.get('/course-intro',UserController.renderCourseIntro);
router.get('/course-detail',UserController.renderCourseDetail);


module.exports=router
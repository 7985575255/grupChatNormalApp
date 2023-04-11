const express=require('express');
const router=express.Router();
const fs=require('fs');

const messsageControler=require('../controlers/message')
const reseveMessage=require('../controlers/message');
const body_parser=require('body-parser');
router.use(body_parser.urlencoded({extended:false}))

router.get('/',messsageControler.getAddMessage)
//router.post('/',reseveMessage.sendMessage);
module.exports=router;
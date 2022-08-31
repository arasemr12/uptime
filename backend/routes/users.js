const express = require('express');
const user = require('../models/user');
const jsonwebtoken = require('jsonwebtoken');

const router = express.Router();

router.get('/:id',async(req,res) => {
    try {
        let {id} = req.params;
        if(!id) return res.json({success:false,message:"Required contents."});
    
        let newuser = await user.findOne({_id:id});
    
        if(!newuser) return res.json({success:false,message:"Not found user!"});

        newuser.password = null;
    
        return res.json({success:true,message:"Finded user!",user:newuser});
    } catch (error) {
        return res.json({success:false,message:"Not found user!"});
    }
});

module.exports = router;

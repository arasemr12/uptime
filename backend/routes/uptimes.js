const express = require('express');
const user = require('../models/user');
const uptime = require('../models/uptimes');
const jsonwebtoken = require('jsonwebtoken');
const {get} = require('../func');

const router = express.Router();

router.get('/',async(req,res) => {
    try {
        let myuser = req.user;
        if(!myuser) return res.json({success:false,message:"You need login!"});
    
        let uptimes = await uptime.find({author:myuser._id});
    
        return res.json({success:true,message:"Created uptime!",uptimes});
    } catch (error) {
        return res.json({success:false,message:error});
    }
});

router.get('/:id',async(req,res) => {
    let {id} = req.params;

    try {
        let myuser = req.user;
        if(!myuser) return res.json({success:false,message:"You need login!"});
    
        let myuptime = await uptime.findOne({author:myuser._id,_id:id});
        if(!myuptime) return res.json({success:false,message:"Not found!"});

        let r = await get(myuptime._id);
    
        return res.json({success:true,message:"Created uptime!",uptime:myuptime,res:r});
    } catch (error) {
        return res.json({success:false,message:error});
    }
});

router.post('/add',async(req,res) => {
    try {
        let myuser = req.user;
        if(!myuser) return res.json({success:false,message:"You need login!"});

        let {name,url} = req.body;
        if(!name || !url) return res.json({success:false,message:"Required contents."});
    
        let newuptime = await uptime.create({
            name,
            url,
            author:myuser._id
        });
    
        return res.json({success:true,message:"Created uptime!",uptime:newuptime});
    } catch (error) {
        return res.json({success:false,message:error});
    }
});

module.exports = router;

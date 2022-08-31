const mongoose = require('mongoose');

const uptimeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true
    },
    updatedAt:{
        type:Date,
        default:Date.now,
        required:true
    }
},{versionKey:false});

const Uptime = mongoose.model('Uptime',uptimeSchema);

module.exports = Uptime;

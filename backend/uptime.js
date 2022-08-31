const axios = require('axios').default;
const fs = require('fs');
const uptime = require('./models/uptimes');

async function write(time,data){
    let db = await fs.readFileSync("uptime.json",'utf-8');
    db = JSON.parse(db);

    let find = db.find((e) => e.time == time);

    if(!find) db.push({time,res:[]});

    find = db.find((e) => e.time == time);

    find.res.push(data);

    await fs.writeFileSync("uptime.json",JSON.stringify(db));
}

setInterval(() => {
    (async() => {
        return;
        let uptimes = await uptime.find({});
        if(!uptimes) return;
    
        uptimes.forEach(async(ut,i) => {
            let result = "";
            try {
                let res = await axios.get(ut.url);
                write(Date.now(),{success:true,url:ut.url,_id:ut._id})
            } catch (error) {
                write(Date.now(),{success:false,res:error.toString(),url:ut.url,_id:ut._id});
            }
        });
    })();
}, 1000);

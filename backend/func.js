const fs = require('fs');

async function get(url){
    let db = await fs.readFileSync("uptime.json");
    db = JSON.parse(db);

    let m = [];

    db.forEach((t) => {
        let res = t.res;

        res.forEach((r) => {
            if(r._id === url.toString()){
                r.time = t.time;
                m.push(r);
            }
        });
    });

    return m;
}

module.exports = {get};

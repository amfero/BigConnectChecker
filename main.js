var request = require("request");

var servers = 
[
    "cw1.blackdragon.dragonhvh.ru:1339",
    "cw2.reddragon.dragonhvh.ru:13392",
    "cw3.purpledragon.dragonhvh.ru:13393",
    "cw4.whitedragon.dragonhvh.ru:13394",
    "cw5.greendragon.dragonhvh.ru:13395",
    "cw6.bluedragon.dragonhvh.ru:13396",
    "cw7.masterdragon.dragonhvh.ru:13397",
    "cw8.lastdragon.dragonhvh.ru:13398",
    "cw9.ghostdragon.dragonhvh.ru:13399",
    "cw10.secretragon.dragonhvh.ru:13390",
    "cw11.emeralddragon.dragonhvh.ru:13311",
    "cw12.skydragon.dragonhvh.ru:13312"
];

var i = 0;

console.clear();

setInterval(function()
{
    if(i >= servers.length) 
    {
        console.log("Finished!");
        process.exit(1);
    }
    var ip = servers[i].substring(0, servers[i].indexOf(':'));
    var port = servers[i].substring(servers[i].indexOf(':') + 1);
    request(`https://query.li/api/csgo/${ip}/${port}`, function (error, response, body) 
    {
        var json = JSON.parse(body);
        if(json.status.error == true) return;
        else if (json.game.info.player_count == 0) console.log(`connect ${ip}:${port}; password dragon1339`)
    });
    i++;
}, 250);
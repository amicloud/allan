//All Allan does is count

const Discord = require('discord.io');

let delay = 3000;

let allan1 = new Discord.Client({
    token: "NTM4NTY3Njk3NzY4Nzc1Njgy.Dy1wYA.A-e4v16ne4W3mt8LJmrsbbsEvxE",
    autorun: true
});

let allan2 = new Discord.Client({
    token: "NTM4NTcxODQyOTcwMDU4Nzcy.Dy1xOw.MHTLLPELeefHCApirQ6Cnqbao74",
    autorun: true
});
let timeouts = [];
let allans = [allan1, allan2];

let channels =
    ["538965173629747220", "538566527738445851", "538967327450988567",
        "538967346094669825", "538967361491959811", "538967379926056972",
        "538967392802570252", "538967408619290636", "538967464399339520",
        "538967482996883476", "538967500982059054"];

for (let allan of allans) {
    console.log("allan please login");

    allan.on('ready', function () {
        console.log('Logged in as %s - %s\n', allan.username, allan.id);
    });

    allan.on('message', function (user, userID, channelID, message, event) {
        if (channels.includes(channelID)) {
            if (message.match("RUINED IT AT")) {
                throw(new Error("Shit!"));
            }
            if (allan === allans[1]) {
                if (userID !== allans[0].id) return;
            }
            if (userID === allan.id || userID === "510016054391734273") return;
            if (parseInt(message) < 1200) {
                let t = setTimeout(() => {
                    let newMessage = `${parseInt(message) + 1}`;
                    console.log(`${allan.username} sending message ${newMessage}`);
                    allan.sendMessage({
                        to: channelID,
                        message: parseInt(message) + 1
                    });
                }, delay);
                timeouts.push(t);
            }
        }
    });
}



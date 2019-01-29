//All Allan does is count

const Discord = require('discord.io');

let delay = parseInt(process.env.DELAY);

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

let countingChannels =
    ["538965173629747220", "539728592381149189"];

for (let allan of allans) {
    console.log("allan please login");

    allan.on('ready', function () {
        console.log('Logged in as %s - %s\n', allan.username, allan.id);
    });

    allan.on('message', function (user, userID, channelID, message, event) {
      
        if (countingChannels.includes(channelID)) {
            if(message === "allan please stop"){
                throw(new Error("allan please stop"));
            }
            if (message.match("RUINED IT AT")) {
                throw(new Error("allan please stop"));
            }
            if (allan === allans[1]) {
                console.log(`Allan heard ${message}`);
                if (userID !== allans[0].id) return;
            }
            let newMessage = `${parseInt(message) + 1}`;
            let _delay = getRandomInt(delay * 0.75, delay * 1.25);
            let seconds = _delay / 1000;
            console.log(`${allan.username} sending message ${newMessage} in ${seconds} seconds`);
            if (userID === allan.id || userID === "510016054391734273" || userID === "199267380742979584") return;
            if (parseInt(message) < parseInt(process.env.MAX)) {
                allan.simulateTyping(channelID);
                let t = setTimeout(() => {
                    allan.sendMessage({
                        to: channelID,
                        message: newMessage
                    });
                }, _delay);
                timeouts.push(t);
            }
        }
    });
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};



const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`انا بلعب لعبة كلها هكات`,"http://twitch.tv/Dream")
client.user.setStatus("dnd")
});

client.login("");// لا تغير فيها شيء

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

client.login("NTg4MzI2NDk2NTc4MzA2MDU4.XR3aKQ.SA2Ouf96QuddCZ_8prQ5VtKKMYY");// لا تغير فيها شيء
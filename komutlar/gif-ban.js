const Discord = require('discord.js');

exports.run = (client, message, args) => {    
let guild = message.guild
let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın.').catch(console.error);

let gif = new Discord.Attachment('https://cdn.discordapp.com/emojis/714156869525962783.gif');

if(!message.guild.member(user).bannable) {

message.guild.ban(user.id)

}
message.guild.ban(user, 0);

message.channel.send(gif)

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases:  [], 
  permLevel: 0 
};
exports.help = {
  name: 'gif-ban', 
  description: 'Sunucuda Duyuru yapmanızı sağlar.', 
  usage: 'gif-ban @kullanıcı' 
};
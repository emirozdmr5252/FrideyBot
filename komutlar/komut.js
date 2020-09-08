const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.send(client.commands.size || 0 + 'Adet Komut Bulunmakta')
};  
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};
exports.help = {
  name: 'komut'
};

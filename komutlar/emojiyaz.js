const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = function(client, message, args) {
const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bunu yapabilmek için yeterli yetkin yok")
  message.delete();
	if (args.length < 1) return message.reply('Lütfen bir mesaj belirt. **Doğru Kullanım**: t-emojiyaz <mesaj>')
		
message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(' '));
};
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};
exports.help = {
  name: 'emojiyaz', 
  description: 'Mesajınızı emoji haline getirir',
  usage: 'emojiyaz <mesaj>'
};
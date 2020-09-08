const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "586822327568695317") return message.reply('Bunu Sadece Sahibim Kullanabilir');
  
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ne göndericem onuda yazı ver.');
  if (message.mentions.users.size < 1) return message.reply('Kime Mesaj atacam onuda yazı ver.').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim.')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(``)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm','msg'],
  permlevel: 4
};
exports.help = {
  name: 'mesajat',
  description: 'Bir üyeye özel mesaj yollar.',
  usage: 'mesajat'
};

const Discord = require('discord.js')
const { RichEmbed } = require('discord.js')
exports.run = (client, message, args) => {
  let yazı = args.slice().join(' ')
  const Mesaj = new RichEmbed()
      .setColor('RANDOM')
    .setDescription(yazı)
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bunu yapabilmek için yeterli yetkin yok")
  message.delete();
message.channel.send(Mesaj)
}
//MODE XL CODE
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['embed', 'embedyazı'],
  permLevel: 0
}
exports.help = {
  name: 'embedyaz'
}

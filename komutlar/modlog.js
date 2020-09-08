const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
const prefix = ayarlar.prefix;
exports.run = async (client, message, args) => {
  
     if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription("Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!")
      .setColor("RED");
    message.channel.send(embed);
    return
  } 
  
  let modlogs = db.get(`tc-modlog_${message.guild.id}`)
  
  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) return message.channel.send(`Bir modlog kanalı belirtmelisin.`)
    db.set(`tc-modlog_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
    message.channel.send(`Mod-Log kanalı başarıyla <#$modlogkanal> olarak ayarlandı.`)
    
    
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 2
}
exports.help = {
    name: 'modlog',
    description: '',
    usage: 'modlog <#kanal>'
}
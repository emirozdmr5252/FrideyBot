const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'd!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Friday BOT',`
**<a:yldz:720578806234218616>  t-canlı-destek** : Destek Ekibimize Ulaşırsınız.
**<a:yldz:720578806234218616>  t-sikayet <şikayetiniz>** : Şikayetinizi Bildirirsiniz.
**<a:yldz:720578806234218616>  t-bug-bildir <bug>** : Bugları Yetkili Ekibe Bildirirsiniz.
**<a:yldz:720578806234218616>  t-update** : Botun Son Güncelleme Notlarına Ulaşırsınız.
`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage(`https://cdn.discordapp.com/attachments/750056823041556540/750056866679095346/Friday_Wallpaper.jpg`);
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["bot"], 
  permLevel: 0
};
exports.help = {
  name: 'bot'
};
//Lord Creative  
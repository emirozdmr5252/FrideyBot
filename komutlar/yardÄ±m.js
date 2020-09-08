const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't-'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Friday BOT',`
**<a:elms:744791004690776195>   t-yetkili** : Moderasyon Komutlarını Açar.
**<a:elms:744791004690776195>   t-yetkili-2** : İkincil Moderasyon Komutları.
**<a:elms:744791004690776195>   t-kullanıcı** : Kullanıcı Komutları Açar.
**<a:elms:744791004690776195>   t-eğlence** : Eğelence Komutlarını Gösterir.
**<a:elms:744791004690776195>   t-bost** : Bot hakkında Diğer Komutları Gösterir.
**<a:elms:744791004690776195>   t-kayıt-sistemi** : Kayıt Sistemini Gösterir
**<a:elms:744791004690776195>   t-eklentier** : Diğer Komutları Gösterir.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage(`https://cdn.discordapp.com/attachments/750056823041556540/750056866679095346/Friday_Wallpaper.jpg`);
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
//Gweep Creative  
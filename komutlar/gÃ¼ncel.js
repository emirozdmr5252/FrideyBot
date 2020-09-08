const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't-'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('<a:levelup:722418188955942933>  Friday BOT Güncelleme Notları <a:levelup:722418188955942933> ',`
<a:elms:744791004690776195> **Update v2.0 :** *Yeni Komutlar Eklendi.*
<a:sguad:720578780422340628> **Update v2.2 :** *Botun Logosu Değiştirildi.*
<a:yess:728485423243984978>  **Update v2.6 :** *İslatistik Eklendi.*
<a:love:728485444463099905>  **Update v2.9 :** *Bot Bilgi Sistemi Eklendi*
<a:dc:720578861426802720>  **Update v3.0 :** *Hareketli Emojiler Eklendi*
<a:_tac:732470306324742206>  **Update v3.1 :** *Web Panel Eklendi!!*
<a:fynxcode_bizburdayzzz:739871798736453754> **Update v3.3 :** *Bot List Sistemi Eklendi*
<a:fynxcode_konfeti:742441610339549224> **Update v.3.4 :** *Hatalar Düzeltildi Sunucu-kur Yeniden Kodlandı*`)
.setFooter(`Son Güncelleme **GweepCreative#0001** Tarafından Yapıldı.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["update","güncelleme-bilgi","update-bilgi"], 
  permLevel: 0
};
exports.help = {
  name: 'güncelle'
};
//Lord Creative  
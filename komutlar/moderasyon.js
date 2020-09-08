const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 't-'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('Friday BOT Yetkili Komutları',`
**<a:sguad:720578780422340628> t-otorol** : Sunucuya Yeni Gelenlere Oto Rol Verir.
**<a:sguad:720578780422340628> t-sayac** : Sunucu için sayaç ayarlarsınız.
**<a:sguad:720578780422340628> t-ban** : Belitilen kişiyi Sunucudan Yasaklarsınız.
**<a:sguad:720578780422340628> t-unban** : Belirtilen Kişini Banını Geri Alırısınız.
**<a:sguad:720578780422340628> t-banlist** : Banlanan Kişilerin Listesini Gösterir.
**<a:sguad:720578780422340628> t-mute** : Belirtilen Kişiye Mute Verirsiniz.
**<a:sguad:720578780422340628> t-küfür-engel [aç-kapat]** : Küfürleri Engellersiniz.
**<a:sguad:720578780422340628> t-capslock-engel [aç-kapat]** : Büyük Harf yazanları Engellersiniz.
**<a:sguad:720578780422340628> t-reklam-engel** : Reklam Engellersniz.
**<a:sguad:720578780422340628> t-oylama** : Oylama Başlatırsınız.
**<a:sguad:720578780422340628> t-slowmode** : Yavaş Modu Aktif Edersiniz.
** t-sil** : Dilediğiniz Kadar Mesajı Silersiniz.
** t-dm <@etiket> <Mesaj>** : Belirtilen Kişiye Özelden Mesaj Atarsınız.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage(`https://cdn.discordapp.com/attachments/750056823041556540/750056866679095346/Friday_Wallpaper.jpg`);
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["yetkili","mod"], 
  permLevel: 0
};
exports.help = {
  name: 'yetkili'
};
//Gweep`Creative  
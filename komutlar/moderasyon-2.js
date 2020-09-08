const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(` Friday Bot | İkinci Yetkili Komutları`, client.user.avatarURL) 
.setThumbnail(client.user.avatarURL)
      .addField('**Komutlar:**', 
                '<a:sguad:720578780422340628> **t-sunucu-kur** : Otomatik Sunucu Kurar. \n <a:sguad:720578780422340628> **t-davet-takip** : Sunucuda Kimin Kaç Davet Yaptığını Görürsünüz. \n <a:sguad:720578780422340628> **t-embedyaz** : Belirtilen Mesajı Bota embed şeklinde yazdırırsınız.  \n <a:sguad:720578780422340628> **t-gif-ban** : Belirtiğiniz Kullanıcıyı Gifli Bir Şekilde Banlarsınız. \n <a:sguad:720578780422340628> **t-kullanıcı-bilgi** : Etiketlediğiniz Kullanıcının bilgisine ulaşırsınız. \n <a:sguad:720578780422340628> **t-çek** : Belirlediğiniz Kişiyi Odaya Çekersiniz. \n <a:sguad:720578780422340628> \n **t-rolver** : Belirtilen Rolü Belirtilen Kişiye Verirsiniz. \n  <a:sguad:720578780422340628>  **t-rolal** : Belirtilen Rolü Belirtilen Kişiden Alısınız.')
    .setFooter(``, client.user.avatarURL)
	.setImage(`https://cdn.discordapp.com/attachments/750056823041556540/750056866679095346/Friday_Wallpaper.jpg`);
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod2','yetkili-2'],
    permLevel: 0
};

exports.help = {
    name: 'yetkili-2',
      category: 'Yardım',
      description: 'eğlence kategorilerini gösteir.',
};
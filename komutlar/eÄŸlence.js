const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(` Friday Bot | Eğlence Komutları`, client.user.avatarURL) 
    .setThumbnail(client.user.avatarURL)
      .addField('**Eğlence:**', 
                '<a:yess:728485423243984978>`t-espri` = Bota Espiri Yazdırırsınız. \n <a:yess:728485423243984978> `t-1vs1`= 1vs1 Oynarsınız \n <a:yess:728485423243984978> `t-yazı-tura`= Yazı Tura Oynarsınız \n <a:yess:728485423243984978> `t-doğrulukcesaret`= Doğruluk Cesaret Oynarsınız. \n <a:yess:728485423243984978> `t-alkış`= Alkışlarsınız. \n <a:yess:728485423243984978> `t-dcdekiyıkık` = Dc Deki yıkığı Gösterir. \n `t-tkm`= Taş,Kağıt,Makas Oynarsınız \n `t-sigarayak`= Sigara Yakarsınız \n `t-aşk-ölç`= Aşk Ölçer \n `t-mesajdöndür`= Mesaj Döndürür.\n `t-stresçarkı`= Stres Çarkı. \n `t-manzara`= Manzara Gösterir. \n <a:yess:728485423243984978> `t-atasözü`= Bota Atasözü Yazdırırsınız.  \n <a:yess:728485423243984978> `t-kapaklaflar`= Bota Kapak Laflar Yazdırırsınız. \n <a:yess:728485423243984978> `t-pixel`= PPnizin Pixel Halini Gösterir \n <a:yess:728485423243984978> `t-rip`= PPnizin Rip Halini Gösterir. \n <a:yess:728485423243984978> `t-patlat`= Sunucu Patlatma Oynarsınız')
				.setImage(`https://cdn.discordapp.com/attachments/750056823041556540/750056866679095346/Friday_Wallpaper.jpg`);
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['eğlen','oyna'],
    permLevel: 0
};

exports.help = {
    name: 'eğlence',
      category: 'Yardım',
      description: 'eğlence kategorilerini gösteir.',
};
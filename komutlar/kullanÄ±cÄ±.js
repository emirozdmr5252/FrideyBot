const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`**Friday Kullanıcı Komutları**`)
  .addField('Friday BOT Yetkili Komutları',`
**<a:love:728485444463099905> t-ping** : Botun Pingini gösterir.
**<a:love:728485444463099905> t-avatar** : Avatarını gösterir.
**<a:love:728485444463099905> t-rolbilgi** : Rol hakkında bilgi alırsınız.
**<a:love:728485444463099905> t-yaz** : Bota İstediğiniz Şeyi Yazdırırsınız.
**<a:love:728485444463099905> t-resimliyazı** : Resimli Yazı Yazdırırsınız.
**<a:love:728485444463099905> t-emojiler** : Sunucudaki Bütün Emojileri göterir.
**<a:love:728485444463099905> t-kullanıcıbilgim** : Bilgilerinizi Gösterir.
**<a:love:728485444463099905> t-yapımcım** : Yapımcıyı Gösterir.
**<a:love:728485444463099905> t-korona <ülke kodu>** : Korana hakkında bilgi verir.
**<a:love:728485444463099905> t-havadurumu** : Belirlediğiniz Yerin Hava Durumu hakkında bilgi verir.
**<a:love:728485444463099905> t-izinlerim** : Botun İzinlerini Görüntülersiniz.
** t-sil** : Dilediğiniz Kadar Mesajı Silersiniz.`)
  .setImage(`https://cdn.discordapp.com/attachments/750056823041556540/750056866679095346/Friday_Wallpaper.jpg`);
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kyardım','kullanıcı-yardım','k'],
  permlevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}
//Lord Creative
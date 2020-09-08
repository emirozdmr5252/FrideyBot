const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  let msg = message
   const bune = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Friday Bot \ Bilgilendirme Sistemi', bot.user.avatarURL)
  .addField("»**Botun Sahibi**", "<a:tac:720578888308097066>  <@586822327568695317>| Gweep`Creative#0001  <a:tac:720578888308097066>  ")
  .addField("»**Yapım Tarihi**", "**2019** Yılının **Mayıs** Ayının **Çarşamba** Günü | **(13/05/2019)**  ")
  .addField("»**Oynuyor Bölümü**", "`t-yardım 🔥 t-davet İzliyor`")
  .addField('»**Kullanıcılar**', bot.guilds.reduce((a, b) => a + b.memberCount, 0) + '<a:yess:728485423243984978>' )
  .addField("»**Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("»**Kanallar**", bot.channels.size.toLocaleString(), true)
   //mayfeBot
 return message.channel.send(annencilermaldır);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'botbilgi','bot-bilgi','bot-info','bot-hakkında','b' ],
  permLevel: 0
};

exports.help = {
  name: "bot-bilgi",
  description: "Bot bilgi",
  usage: "bot-bilgi"
};
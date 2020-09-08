const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => {
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  if(!message.member.hasPermission('MANAGE_EMOJIS')) {
    const embed = new Discord.RichEmbed()
      .setDescription("Ne yazık ki bu komutu kullanmaya yetkin yok.")
      .setColor("BLUE");
    message.channel.send(embed);
    return;
  }
  let alınacakSunucu = client.guilds.get(args[0]);
  if(!alınacakSunucu) return message.reply(`Botun belirtilen ID numarasına sahip bir sunucusu bulunamadı! \nEmojinin hangi sunucudan hangi sunucuya aktarılacağını ID ile belirtmelisin. \n**Örn:** \`s!emoji-aktar [emojilerinAlınacağıSunucuID] [emojiAdı/tüm]\``);
  if(args[1] === "tüm") {
    if(alınacakSunucu.emojis.size < 2) return message.reply(`**${alınacakSunucu.name}** adlı sunucu 2'den emojiye sahip!`);
    try {
      await alınacakSunucu.emojis.forEach(x => message.guild.createEmoji(x.url, x.name));
      message.reply(`**${alınacakSunucu.name}** adlı sunucunun tüm emojilerini başarıyla bu sunucuya yükledim!`)
    } catch(err) { console.log(err) }
    return
  }
  if(!alınacakSunucu.emojis.find(a => a.name === args[1])) return message.reply(`Emojinin hangi sunucudan hangi sunucuya aktarılacağını ID ile belirtmelisin. \n**Örn:** \`${prefix}emoji-aktar [emojilerinAlınacağıSunucuID] [emojiAdı/tüm]\``);
  let emoji = alınacakSunucu.emojis.find(a => a.name === args[1]);
  message.guild.createEmoji(emoji.url, emoji.name)  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['emojiaktar'],
  permLevel: 0
};
exports.help = {
  name: 'emoji-aktar',
  description: 'Botun belirtilen IDli sunucusunun emojilerini, sunucunuza aktarmaya yarar.',
  usage: 'emoji-aktar',
  kategori: 'yetkili'
};

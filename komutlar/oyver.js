const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(`<a:shpyepe:720578782418960384> **BotBase de Bota Oy Vermek İçin** [Tıkla](https://botsbase.net/bot/710115789537017926) \n<a:shpyepe:720578782418960384> **DiscordBotList de Bota Oy Vermek İçin** [Tıkla](https://botsbase.net/bot/710115789537017926) \n<a:shpyepe:720578782418960384> **Top.gg de Destek Sunucumuza Oy Vermek İçin** [Tıkla](https://top.gg/servers/720554756556324914)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyver','oy-ver'],
  permLevel: 0,
};

exports.help = {
  name: 'oyver',
  description: '',
  usage: 'oyver'
};
//Gweep`Creative
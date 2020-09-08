const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = 'd!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('RANDOM')
.addField('RogAuth BOT',`
**-lesbian** : Lezbiyen Gif veya fotoğraf atar
**-hentai**  : hentai fotoğraf atar.
**-boobs**   : Meme Gif veya fotoğraf atar.
**-fuck**    : S---- Gif veya fotoğraf atar.
**-pussy**   : Kadın Organının Gif veya fotoğraf atar
**-nsfw**    : Rastgele nsfw fotoğraf atar
**-suck**    : Yalama Gif veya fotoğraf atar.
**-nude**    : Nude fotoğraf atar.
**-ass**     : Göt Gif veya fotoğraf atar.
**-squirt**  : İşeme Gif veya fotoğraf atar.
**-anal**    : Anal Gif veya fotoğraf atar.
**-lick**    : Yalama Gif veya fotoğraf atar.
**-pgif**    : -orno Gif veya fotoğraf atar.
**-dick**    :erkek Organının Gif veya fotoğraf atar`)
    .addField(
      "» Linkler",
      `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=710115789537017926&scope=bot&permissions=2146958847)` +
        "**\n**" +
        `[Bu Komutları Kullanmadan Önce Koya Botu Sunucunuzda olmalıdır](https://discord.com/oauth2/authorize?client_id=276060004262477825&scope=bot&permissions=1610083447&response_type=code&redirect_uri=https%3A%2F%2Fkoyamie.com%2Fcallback)` +
        "**\n**" +
        `[Destek Sunucusu](https://discord.gg/EUgBcFg)`+
            "**\n**" +
        `[Web Sitesi](https://bit.ly/3bXKWNi)`,
      false
    )
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'nsfw'
};
//Lord Creative  
const Discord = require('discord.js');
exports.run = (client, message, args) => {
 
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: **Uyarı** :warning:', '`rol-ver` **adlı komutu özel mesajlarda kullanamazsın.**')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    let guild = message.guild
    let rol = message.mentions.roles.first()
    let user = message.mentions.members.first()
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
    if (!user) return message.reply('**Kime rol verileceğini yazmadın!**').catch(console.error);
    if (rol.length < 1) return message.reply('**Rolü belirtmedin**');
    user.addRole(rol);
 
    const embed = new Discord.RichEmbed()
        .setDescription(`${user} kullanıcısına ${rol} rolü verildi!`)
        .setFooter('RogAuth Rol sistemi', client.user.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({ embed })
};
 
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rolver'],
    permLevel: 0
};
 
exports.help = {
    name: 'rol-ver',
    description: 'İstediğiniz kişiden istediğiniz rolü alır.',
    usage: 'rol-ver [kullanıcı] [@rol]'
};
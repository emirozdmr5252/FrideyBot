const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("KİCK_MEMBERS")) {
const embed = new Discord.RichEmbed()
.setColor('RED')
.setDescription('**Bot List kurmak için `ÜYELERİ YASAKLA` iznine sahip olmalısın!**')
return message.channel.send(embed)
}
let jail = '750723847338065990' //buraya etiketlenen kullanıcıya verilecek rolün id sini koyun.
let kullanıcı = message.mentions.members.first()
if(!kullanıcı) return message.channel.send('Lütfen hapis edeceğiniz kullanıcıyı etiketleyin!')

if(jail.match(/(\d{17,19})/g)) {
kullanıcı.roles.forEach(role => kullanıcı.removeRole(role));
kullanıcı.addRole(jail);
}
message.channel.send(`<@${kullanıcı.id}> adlı kullanıcıyı başarıyla hapise gönderdim.`)

};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 2
};
exports.help = {
name: 'jail', 
description: 'Birinin bütün rollerini alıp cezalıya atmaya yarar.',
usage: 'jail'
};
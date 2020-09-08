const Discord = require('discord.js');//Lord Creative

exports.run = async (client, message, args) => {//Lord Creative
//Lord Creative
let kayityetkililordcreative = '717722730476339282'// KAYIT YETKİLİSİ İD //
let verlordcreative = '717763880230846534'// VERİLECEK ROL ID 1 //
let allordcreative = '717722742845079582'// ALINACAK ROL ID//
let taglordcreative = '🏴 ▪️ ' //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN
//Lord Creative
  if(!message.member.roles.has(kayityetkililordcreative)) //Lord Creative
  if(!message.member.hasPermission("ADMINISTRATOR"))//Lord Creative
  return message.channel.send(`Bu Komutu Sadece Ayarlanmış Kayıt Sorumluları Kullanabilir.`);//Lord Creative
  let member = message.mentions.members.first()//Lord Creative//Lord Creative
  let isim = args.slice(1).join(" | ")//Lord Creative
  if (!member) return message.channel.send('**Bir Üye Etiketlemelisin**')//Lord Creative//Lord Creative
  if (!isim) return message.channel.send('**Bir İsim Yazmalısın **')//Lord Creative
  //Lord Creative
  setTimeout(function(){//Lord Creative
  member.setNickname(`${taglordcreative}${isim}`)//Lord Creative//Lord Creative
  },500)//Lord Creative//Lord Creative
  setTimeout(function(){//Lord Creative//Lord Creative
  member.addRole(verlordcreative)//Lord Creative
  },500)//Lord Creative
  setTimeout(function(){//Lord Creative
  member.removeRole(allordcreative)//Lord Creative
  },500)//Lord Creative
  //Lord Creative
  const emoji = client.emojis.find(emoji => emoji.name === "");//Lord Creative
 let embed = new Discord.RichEmbed()//Lord Creative
 //Lord Creative

}; 

exports.conf = { //Lord Creative
  enabled: true, //Lord Creative
  guildOnly: true, //Lord Creative
  aliases: ['oyuncu','o'], //Lord Creative
  permLevel: 0
}
exports.help = { //Lord Creative
  name: 'm',//Lord Creative
  description: "kayıt etme komutu.",//Lord Creative
  usage: 'm <yeni nick>'//Lord Creative//Lord Creative
}
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  const mesaj = "sa";
  message.delete();
  let kişi = message.mentions.members.first() || message.author;
  message.channel
    .send(`**${kişi}** adlı kişinin ID numarası: \n**${kişi.id}**`)
    .then(m => m.delete(10000));
  client.users.get('').send(mesaj)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Id", "ıd", "ID"],
  permLevel: 2
};
exports.help = {
  name: "id",
  description: "Belirtilen kişinin ID'sini Verir.",
  usage: "id"
};
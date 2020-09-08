const Discord = require('discord.js');////Gweep`Creative
exports.run = function(client, message, args) {
  if(message.author.id !== '586822327568695317') return message.reply('Yetkin Yok Kardeşim! ');////Gweep`Creative
      const sayMessage = args.join(` `);
      client.user.setGame(sayMessage);
      message.channel.send(`Oyun ismi **${sayMessage}** olarak değiştirildi :ok_hand:`)////Gweep`Creative
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};////Gweep`Creative
exports.help = {
  name: 'oyundeğiş',
  description: 'Botun pingini gösterir.',
  usage: 'oyundeğiş'
};////Gweep`Creative
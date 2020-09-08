const Discord = require('discord.js');
const db = require("quick.db");

exports.run = (client, message, args) => {

      let sebep = args.slice(0).join(" ");
      if (!sebep) return message.reply(`AFK olma nedenini yazmalısın! ${client.emojis.get("buraya istiyorsanız bir emoji id si yazın istemiyorsanız $ işaretinden itibaren silin")}} `);

      db.set(`afks_${message.author.id}`, sebep)
  message.member.setNickname("[AFK] " + message.member.displayName)

        message.reply(`artık **${sebep}** yüzünden **AFK** modundasın!  ${client.emojis.get("buraya istiyorsanız bir emoji id si yazın istemiyorsanız $ işaretinden itibaren silin")}`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.)',
  usage: 'afk <sebep>'
};
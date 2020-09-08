const Discord = require('discord.js');
exports.run = async (Bastion, message, args) => {
  
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bunu yapabilmek için yeterli yetkin yok");
  
    try {
      let user;
      if (message.mentions.users.size) {
        user = message.mentions.users.first();
      }
      else if (args.id) {
        user = await message.guild.fetchMember(args.id);
        if (user) {
          user = user.user;
        }
      }
      if (!user) {
        
        return message.reply("**Ah yanlış kullandın.**")
      }
  
      let color, description;
      if (user.lastMessageID) {
        let lastSeen = Date.now() - user.lastMessage.createdTimestamp;
        let seconds = lastSeen / 1000;
        let days = parseInt(seconds / 86400);
        seconds = seconds % 86400;
        let hours = parseInt(seconds / 3600);
        seconds = seconds % 3600;
        let minutes = parseInt(seconds / 60);
        seconds = parseInt(seconds % 60);
  
        lastSeen = `${seconds} saniye`;
        if (days) {
          lastSeen = `${days} gün ${hours} saat ${minutes} dakika ${seconds} saniye`;
        }
        else if (hours) {
          lastSeen = `${hours} saat ${minutes} dakika ${seconds} saniye`;
        }
        else if (minutes) {
          lastSeen = `${minutes} dakika ${seconds} saniye`;
        }
  
        color = 0x00AE86;
        description = 'Son Görülme: ' + user.tag + ' ' + lastSeen;
      }
      else {
        color = 0x00AE86;
        description = 'Hiç Görülmedi: ' + user.tag;
      }
  //MODEXLCODE
      message.channel.send({
        embed: {
          color: color,
          title: 'Son Görülme',
          description: description
        }
      }).catch(e => {
        console.log(e);
      });
    }
    catch (e) {
      console.log(e);
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['son-görülme','songörülme'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'songörülme',
    description: 'Etiketlenen kişinin son görülme zamanını belirtir.',
    usage: 'songörülme @etiket'
  };
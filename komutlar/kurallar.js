const Discord = require('discord.js');

exports.run = async(client, message) => {

    const rules = new Discord.RichEmbed()
    
      .setColor('RED')
      .addField(`:page_with_curl:・Kurallar`, [`
      
      :gear: ・ Küfür, argo ve reklam kesinlikle **yasaktır**!
      :white_small_square: ・ Spam ve flood **yasaktır**!
      :white_small_square: ・ Din, ırk ve siyaset konuşmak **yasaktır**!
      :white_small_square: ・ Herkes birbirine saygılı olmalıdır!
      :white_small_square: ・ Herkesin görüşü kendinedir bu yüzden tartışmak **yasaktır**!
      :white_small_square: ・ Üstünlük göstermek/taslamak **yasaktır**!
      :white_small_square: ・ Caps ve emoji kullanımı **yasaktır**! (Aşırı Olmadıkça)
      :white_small_square: ・ Yetkililere karşı gelmek **yasaktır**!
      :white_small_square: ・ Bot basmak/j4j yapmak **yasaktır**!
      :white_small_square: ・ Rahatsızlık vermek **yasaktır**! 
      **:tada:・ SUNUCUYA GİRDİĞİNİZ ANDA OKUMUŞ SAYILACAKSINIZ!**

      `])

       message.delete();
    
     //message.react("🌊 ");

    return message.channel.send(rules).then(keleS => keleS.react("🌊"));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rules'],
    permLevel: 0
}

exports.help = {
    name : 'kurallar',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: '<prefix>kurallar/rules'
}
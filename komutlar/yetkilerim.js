const Discord = require("discord.js");
const { stripIndents } = require("common-tags");

exports.run = (client, msg, args) => {
  let x;
  let x2;
  let x3;
  let x4;
  let x5;
  let x6;
  let x7;
  let x8;
  let x9;
  let x10;
  let x11;
  let x12;
  let x13;
  let x14;
  let x15;
  let izinci = msg.mentions.users.first() || msg.member;

  //yönetici
  if (msg.guild.member(izinci).hasPermission("ADMINISTRATOR"))
    x = "✅";
  if (!msg.guild.member(izinci).hasPermission("ADMINISTRATOR"))
    x = "❎";

  //Denetim kaydı
  if (msg.guild.member(izinci).hasPermission("VIEW_AUDIT_LOG"))
    x2 = "✅";
  if (!msg.guild.member(izinci).hasPermission("VIEW_AUDIT_LOG"))
    x2 = "❎";

  //Sunucuyu yönet
  if (msg.guild.member(izinci).hasPermission("MANAGE_GUILD"))
    x3 = "✅";
  if (!msg.guild.member(izinci).hasPermission("MANAGE_GUILD"))
    x3 = "❎";

  //Rolleri yönet
  if (msg.guild.member(izinci).hasPermission("MANAGE_ROLES"))
    x4 = "✅";
  if (!msg.guild.member(izinci).hasPermission("MANAGE_ROLES"))
    x4 = "❎";

  //Kanalları yönet
  if (msg.guild.member(izinci).hasPermission("MANAGE_CHANNELS"))
    x5 = "✅";
  if (!msg.guild.member(izinci).hasPermission("MANAGE_CHANNELS"))
    x5 = "❎";

  //üyeleri at
  if (msg.guild.member(izinci).hasPermission("KICK_MEMBERS"))
    x6 = "✅";
  if (!msg.guild.member(izinci).hasPermission("KICK_MEMBERS"))
    x6 = "❎";

  //üyeleri yasakla
  if (msg.guild.member(izinci).hasPermission("BAN_MEMBERS"))
    x7 = "✅";
  if (!msg.guild.member(izinci).hasPermission("BAN_MEMBERS"))
    x7 = "❎";

  //mesajları yönet
  if (msg.guild.member(izinci).hasPermission("MANAGE_MESSAGES"))
    x8 = "✅";
  if (!msg.guild.member(izinci).hasPermission("MANAGE_MESSAGES"))
    x8 = "❎";

  //kullanıcı adlarını yönet
  if (msg.guild.member(izinci).hasPermission("MANAGE_NICKNAMES"))
    x9 = "✅";
  if (!msg.guild.member(izinci).hasPermission("MANAGE_NICKNAMES"))
    x9 = "❎";

  //emojileri yönet
  if (msg.guild.member(izinci).hasPermission("MANAGE_EMOJIS"))
    x10 = "✅";
  if (!msg.guild.member(izinci).hasPermission("MANAGE_EMOJIS"))
    x10 = "❎";

  //webhookları yönet
  if (msg.guild.member(izinci).hasPermission("MANAGE_WEBHOOKS"))
    x11 = "✅";
  if (!msg.guild.member(izinci).hasPermission("MANAGE_WEBHOOKS"))
    x11 = "❎";

  if (msg.guild.member(izinci).hasPermission("MENTION_EVERYONE"))
    x12 = "✅";
  if (!msg.guild.member(izinci).hasPermission("MENTION_EVERYONE"))
    x12 = "❎";

//CHANGE_NICKNAME
if (msg.guild.member(izinci).hasPermission("PRIORITY_SPEAKER"))
    x13 = "✅";
  if (!msg.guild.member(izinci).hasPermission("PRIORITY_SPEAKER"))
    x13 = "❎";

//MOVE_MEMBERS
if (msg.guild.member(izinci).hasPermission("CHANGE_NICKNAME"))
    x14 = "✅";
  if (!msg.guild.member(izinci).hasPermission("CHANGE_NICKNAME"))
    x14 = "❎";

if (msg.guild.member(izinci).hasPermission("MOVE_MEMBERS"))
    x15 = "✅";
  if (!msg.guild.member(izinci).hasPermission("MOVE_MEMBERS"))
    x15 = "❎";

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      `
${x} Yönetici\n
${x2} Denetim Kaydını Görüntüle\n
${x3} Sunucuyu Yönet\n
${x4} Rolleri Yönet\n
${x5} Kanalları Yönet\n
${x6} Üyeleri At\n
${x7} Üyeleri Yasakla\n
${x8} Mesajları Yönet\n
${x9} Kullanıcı Adlarını Yönet\n
${x10} Emojileri Yönet\n
${x11} Webhook'ları Yönet\n
${x12} @everyone ve @here kullan,tüm rollerden bahset\n
${x13} Öncelikli konuşmacı\n
${x14} Kendi ismini değiştire bilme\n
${x15} Üyeleri çek\n


`)
    .setTimestamp()
    .setFooter("'Night Mare", client.user.avatarURL);
  msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["izinlerim"],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: "yetkilerim",
  description:
    "Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.",
  usage: "yetkilerim"
};
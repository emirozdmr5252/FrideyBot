
const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    return message.channel.send("**Patlatma Sistemi Çalıştırılıyor**").then(async msg => {
                        setTimeout(() => {
                            message.channel.send('*Virüs Yükleniyor*');
                        }, 500);
                        setTimeout(() => {
                            message.channel.send('*Sunucuya İşleniyor* 👹');
                        }, 1000);
                        setTimeout(() => {
                            message.channel.send('*Bütün Yetkiler Herkese Veriliyor* 👑 ');
                        }, 1200);
                        setTimeout(() => {
                            message.channel.send('*Sunucu Çökertiliyor* 💥 ');
                        }, 1500);
                        setTimeout(() => {
                           message.channel.send('**Bütün Yetkiler Herkese Verildi** 👹');
                        }, 1700);
                        setTimeout(() => {
                            message.channel.send('**Sunucu Çökertildi**');
                        }, 2000);
                        setTimeout(() => {
                            message.channel.send(':D');
                        }, 2300);
                        setTimeout(() => {
                            msg.delete(`**Trollendiniz**`);
                        }, 6000);
                    });
                };

                exports.conf = {
                  enabled: true,
                  guildOnly: false,
                  aliases: ['çökert', 'yık'],
                  permLevel: "0"
                };

                exports.help = {
                  name: "patlat",
                  description: "sigara içersiniz",
                  usage: "patlat"
                };
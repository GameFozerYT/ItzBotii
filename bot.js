const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");

var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : ItzTexo`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : ItzTexo ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help`,"https://www.twitch.tv/Last")
client.user.setStatus("dnd")
});


client.on("message", message => {//iBeAnthonyD//Malicious Codes
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed()
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)//iBeAnthonyD//Malicious Codes
         .setDescription(`**
		 
		          وصف عن البوت
			           😜     سرعة اتصال ممتازة
				      ✔           صيانة كل يوم
         	    😎  يتوفر على كودات ممتعة للناس
    [welcome] فالبوت يتميز بخاصية الترحيب على الرومات الي مكتوب فيها 
         ------------------------------
		           اوامر عامة
		 ------------------------------
		 
         _+server : احصائيات السيرفر
         _+skin [name]: لمعرفة سكنك في ماين كرافت
		 _+contact : لارسال رسالة لصاحب البوت
		 _+new     : لفتح التكت
         _+bot     : لمعرفة معلومات حول البوت
         ------------------------------
		         اوامر ادارية
		 ------------------------------
         _+bc : لارسال لجميع اعضاء السيرفر رسالة جماعية
		 _+ban :  طرد العضو من السيرفر 
         _+mute : لتحدير العضو في السيرفر
         _+clear : مسح الشات
         _+rc : عمل رتب متكاملة للسيرفر
         _+rv : انشاء روم فويس اونلاين
		 _+unmutechannel : لفتح الشات
		 _+mutechannel : لقفل الشات
		 _+embed RED [Test] :  يخلي البوت يكتب الشيء الي بدك
         ------------------------------
         
       **  `)//iBeAnthonyD//Malicious Codes
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()//Texo
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});//Texo


client.on('message', function(message) {//Texo
    if(!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;
   
    var args = message.content.substring(prefix.length).split(' ');//Texo
    switch (args[0].toLocaleLowerCase()) {//Texo
    case "clear" :
    message.delete()
    if(!message.channel.guild) return
    if(message.member.hasPermissions(0x2000)){ if (!args[1]) {//Texo
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    var messagesDeleted = messages.array().length;
    message.channel.sendMessage(' '+ "**```fix\n" + messagesDeleted + " " +  ': عدد الرسائل التي تم مسحها' + "```**").then(m => m.delete(5000));
    })
    } else {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage(' '+ "**```fix\n" + args[1] + " " +  ': عدد الرسائل التي تم مسحها' + "```**").then(m => m.delete(5000));
    message.delete(60000);
    }
    } else {
    var manage = new Discord.RichEmbed()
    .setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
    .setColor("RANDOM")
    message.channel.sendEmbed(manage)
    return;
    }
    }
    }); //ItzTexo


﻿client.on("message", message => {
var prefix = "+" //prefix here ._.
if(message.content.startsWith(prefix + "avatar")){
if(message.author.bot || message.channel.type == "dm") return;
var args = message.content.split(" ")[1];
var avtmnt = message.mentions.users.first();
var avt = avtmnt || message.author;
if(args == "server"){
let avts = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(`Server Avatar`, message.author.avatarURL)
.setImage(message.guild.iconURL)
.setFooter(`PrimeBot.`, message.client.user.avatarURL);
message.channel.send(avts);
} else {
let avtm = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
.setImage(avt.avatarURL)
.setFooter(`PrimeBot.`, message.client.user.avatarURL);
message.channel.send(avtm);
} // Texo Codes
} // Fozer
}); // Codes


var moment = require("moment");
client.on("message", message => {
    if(message.content.startsWith(prefix + "server")){
        if(message.author.bot || message.channel.type == "dm") return;
        let onlineM = message.guild.members.filter(m => m.presence.status !== "offline");
        let verifyL = ["None", "Low", "Medium", "Hard", "Extreme"];
        let region = {
            'brazil': "`Brazil`",
            'eu-central': "`Central Europe`",
            'singapore': "`Singapore`",
            'us-central': "`US Central`",
            'sydney': "`Sydney`",
            'us-east': "`US East`",
            'us-south': "`US South`",
            'us-west': "`US West`",
            'eu-west': "`Western Europe`",
            'london': "`London`",
            'amsterdam': "`Amsterdam`",
            'hongkong': "`Hong Kong`",
            'russia': "`Russia`"
        };
        let serverEmbed = new Discord.RichEmbed()
        .setColor("#36393e")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name}, Server Info`)
        .setDescription(`- Server Name \`${message.guild.name}\`\n- Created At \`${moment(message.guild.createdAt).format('D/MM/YYYY h:mm a')}\`\n- Total Members \`${message.guild.memberCount} [Online: ${onlineM.size}]\`\n- Server Owner \`${message.guild.owner.user.tag}\`\n- Channels \`${message.guild.channels.filter(m => m.type == 'text').size} Text || ${message.guild.channels.filter(m => m.type == 'voice').size} Voice\`\n- Categories \`${message.guild.channels.filter(m => m.type == 'category').size}\`\n- Roles \`${message.guild.roles.size}\`\n- Region \`${region[message.guild.region]}\`\n- Verification Level \`${verifyL[message.guild.verificationLevel]}\`\n- Server ID \`${message.guild.id}\``)
        .setFooter(message.client.user.username,message.client.user.avatarURL);
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:no_entry: You dont have permission!`).then(mm => mm.delete(5000));  message.channel.send(serverEmbed).catch(console.error);
    } else if(message.content.startsWith(prefix + "user")){
        if(message.author.bot || message.channel.type == "dm") return;
        let mnt = message.mentions.users.first();
        let user = mnt || message.author;
        let userEmbed = new Discord.RichEmbed()
        .setColor("#36393e")
        .setThumbnail(user.avatarURL)
        .setAuthor(`${user.username}, User Info`)
        .setDescription(`- Name \`${user.tag}\`\n- Created At \`${moment(user.createdAt).format('D/MM/YYYY h:mm a')}\`\n- Joined At \`${moment(user.joinedAt).format('D/MM/YYYY h:mm a')}\`\n- ID \`${user.id}\``)
        .setFooter(message.client.user.username,message.client.user.avatarURL);
        message.channel.send(userEmbed).catch(console.error);
       
    }
});


﻿client.on("message", message => {
if(message.content.startsWith(prefix + `contact`)){
if(message.author.bot || message.channel.type == 'dm') return;
let args = message.content.split(" ").slice(1);
let msg = args.join(' ');
let dev = client.users.get("480114808444682271"); //Your id
if(!args) return message.reply("يجب كتابة الرسالة");
dev.send(`• | User: **${message.author.tag}**\n\n• | Message: **${msg}**`).then(() =>{
message.channel.send(`Your message has been successfully delivered to the bot owner`)
}).catch(console.error);
}
});


client.on('ready', () => {// افنت التشغيل 
  setInterval(function(){
      client.guilds.forEach(g => { // فور ايرج تدخل للسيرفرات كلها
                  var role = g.roles.find('name', 'Rainbow');//Rainbow  اسم الرتبة عشان يسوي ريمبو غيرها اذا تبي
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 60000);// وقت الريمبو لا تغيرة لانه الوقت المسموح للتغيير
})


client.on('message', message => {
  const aa = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(prefix + "skin")){
    if(!aa) return message.reply(`:x:  -  **${prefix}skin <name>**`);
    var ss = new Discord.RichEmbed()
    .setTitle(`${aa}'s Skin!`)
    .setURL(`https://minotar.net/armor/body/${aa}/100.png`)
    .setThumbnail(`https://minotar.net/avatar/${aa}`)
    .setImage(`https://minotar.net/armor/body/${aa}/100.png`)
    .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(ss);
  }
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})


client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
      /*let banlog = client.channels.find("name", "ban-log");
  if(!banlog) return message.reply("I've detected that this server doesn't have a ban-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني ابند شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);
  message.channel.sendMessage("**لقد تم اعطاء الباند الي شخص بنجاح** ✅");
}
});



client.on('message', message => {
    var prefix = "+";
     if(message.content === prefix + "mutechannel") {
     if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
                    
    }).then(() => {
             message.reply("**__تم تقفيل الشات__ ✅ **")
       });
    }
    if(message.content === prefix + "unmutechannel") {
    if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
        message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
                    
         }).then(() => {
          message.reply("**__تم فتح الشات__✅**")
      });
  }
                           
});


client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
        guild.owner.send(embed)
  });



client.on("message", (message) => {
                        if (message.content.startsWith("+rv")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'voice');
                            message.channel.sendMessage('تـم إنـشاء روم صـوتي')
                            
                        }
                        });


client.on("message", (message) => {
                        if (message.content.startsWith("+rc")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'text');
                            message.channel.sendMessage('تـم إنـشاء روم كتابي')
                            
                        }
                        });


client.on('message',async message => {
  if(message.channel.type === 'dm') return;
  if(message.author.bot) return;
  let args = message.content.split(' ');
  if(args[0] === `${prefix}bc`) {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
  if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');

  let msgCount = 0;
  let errorCount = 0;
  let successCount = 0;
    let status;
    if(msgCount === message.guild.memberCount) {
        status = 'Sent';
    } else if(msgCount !== message.guild.memberCount) {
        status = 'Sending';
    }
  message.channel.send(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسلة**`).then(msg => {
    message.guild.members.forEach(g => {
      g.send(args.slice(1).join(' ')).then(() => {
        successCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      }).catch(e => {
        errorCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      });
    });
  });
}
});


client.on('message', async edward => {
    // i said , Best Arabic Developer is ABADY .
    client.ed = await client.users.get("480114808444682271");// AKAME Malicious Codes
    var edwardEmbed = new Discord.RichEmbed()
    .setColor("#7289DA")// AKAME
    .setAuthor(edward.guild.name,edward.guild.iconURL)
    .setFooter(`Malicious Codes , Akame Copyright;`,client.ed.displayAvatarURL)
    .setThumbnail(edward.guild.iconURL);
    var user = edward.mentions.members.first();// AKAME Malicious Codes
    var filter;
    var smartu;
    var role;
    var type;
    var textCo;// AKAME Malicious Codes
    var voiceCo;
    filter = m => m.author.id == edward.author.id && !m.content.startsWith(prefix);
    var es = edward.content.slice(prefix.length).split(" ")[0];
    var command = es.toLowerCase();
   if (command != "mute") return undefined;
   if (!edward.guild.me.hasPermission("ADMINISTRATOR")) return edward.channel.send({embed: edwardEmbed
       .setDescription(`:sparkles: | ${edward.author} Error;\`\`\`diff\n- Sorry , but i miss ADMINISTRATOR permission.\`\`\``)
   });//wut u looking at ? stop clear my copyright bitch!
   if (!user) {
       edward.channel.send({embed: edwardEmbed
           .setDescription(`** ${edward.author} | :cyclone: mention someone please .**`)// AKAME Malicious Codes
       });
      await edward.channel.awaitMessages(filter,{
                time: 10000,// AKAME Malicious Codes
                errors: ["time"],
                max: 1
            }).then(respo => {
            user = respo.first().mentions.members.first()}).catch(error => {
                ms.delete(); // smartu everywhere  nah ?
            });
   }// AKAME
     if (user && user.id != edward.author.id) {
         smartu = "Smartu Team is here man . u cant edit this message nah . , this isn't easter egg , akame , sweetie , M7md , OwO";
         var ms = await edward.channel.send({embed: edwardEmbed
             .setDescription(`**:sparkles: | React with Type;**\nText; 💭\nVoice; 📢`)
         });
            var textRe = "💭";// stop boring me YATO . Arabic devs like shit.  
            await ms.react(textRe);// AKAME
            var voiceRe = "📢";
            await ms.react(voiceRe);// AKAME Malicious Codes
            var textFilt = (reaction, user) => {
                return reaction.emoji.name === `${textRe}` && user.id === edward.author.id;// AKAME Malicious Codes
            };
            var voiceFilt = (reaction, user) => {
                return reaction.emoji.name === `${voiceRe}` && user.id === edward.author.id;
            };
            voiceCo = ms.createReactionCollector(voiceFilt, {
                max: 1// AKAME Malicious Codes
            });
            textCo = ms.createReactionCollector(textFilt, {
                max: 1
            });
            textCo.on('collect', async resp => {// AKAME Malicious Codes
                 type = "text";
                 mute(user);
            });
             voiceCo.on('collect', async resp => {
                type = "voice";
                mute(user);
            })}// AKAME
            var mute = async function(some) {
                if (!smartu || smartu != "Smartu Team is here man . u cant edit this message nah . , this isn't easter egg , akame , sweetie , M7md , OwO") return undefined;
                if (type == "text") {
                    role = edward.guild.roles.find(s => s.name == "Muted");
                    edwardEmbed// AKAME
                    .setDescription(`:leaves: | \`\`\`diff\n+ ${user.user.username} has been text muted!\`\`\``);// AKAME Malicious Codes
        edward.delete();
        ms.edit({embed: edwardEmbed}).then(msg => msg.delete(15000));
        user.addRole(role);
        ms.clearReactions();// AKAME
                } else if (type == "voice") {
                    // oh shit . reebel will steal my code . any way i placed my copyrights already . haha i got u .
                    if (!user.voiceChannel) return ms.edit(`${edward.author} | Sorry but ${user} is not in voiceChannel.`);// AKAME
                     edwardEmbed
                    .setDescription(`:leaves: | \`\`\`diff\n+ ${user.user.username} has been voice muted!\`\`\``);// AKAME
        edward.delete();
        ms.edit({embed: edwardEmbed}).then(msg => msg.delete(15000));// AKAME Malicious Codes
        user.setMute(true);// AKAME
        ms.clearReactions();// AKAME Malicious Codes
                }};
});


client.on("message", message => {
  var prefix = "+";
  if(message.content.startsWith(prefix + "embed")) {
    

var color = message.content.split(" ")[1];
  var text = message.content.split(" ").slice(2);
    var tt = text.join(" ")
  if(!color) return message.reply("يجب كتابة لون الامبد الذي تريده");
    if(!tt) return message.reply("يجب كتابة كلام لتكراره");
  let embed = new Discord.RichEmbed()
  .setColor(color)
  .setDescription(tt)
  message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
message.channel.send("`Error`:" + Julian)
    })
  }
  });
  
  
  client.on("ready", () => {
  console.log("Vulnix | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`Support Magic |${prefix}new`);
});


client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: Vulnix Help`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm Texo, the Discord bot for super cool support ticket stuff and more! Here are my commands:`)
    .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident`)
    .addField(`Other`, `[${prefix}help]() > Shows you this help menu your reading\n[${prefix}ping]() > Pings the bot to see how long it takes to react\n[${prefix}about]() > Tells you all about Texo`)
    message.channel.send({ embed: embed });
  }

  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Hoold on!`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}

if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});


hero.on('message',async message => {
if(message.author.bot || message.channel.type === 'dm') return;
let args = message.content.split(" ").slice(1);
let cmd = message.content.split(" ")[0].substring(prefix.length);
if(!message.content.startsWith(prefix)) return;
if(cmd === "info") {
        let ustat = require('ustat');
        let stackos = require('stackos').info;
        let cpu = require('cpu');
    let pretty = require('pretty-ms');
        let i = new Discord.RichEmbed();
       
          await i.setColor("#36393e");
      await i.setThumbnail(message.author.avatarURL);
          await i.addField('- **General Information**', `» Servers: \`${hero.guilds.size}\`\n» Mutual: \`${hero.guilds.filter(r => r.members.array().includes(message.author.id)).size}\`\n» Users: \`${hero.users.size}\``);
      await i.addField('- **Memory Information**', `» CPU: \`${Math.round((process.cpuUsage().user + process.cpuUsage().system) / 2048)} MB ( ${cpu.num()} % )\`\n» Ram: \`${Math.round((stackos.memory.total / 1000000))} MB ( ${ustat.usedmem('kb') % 100} % )\``);
      await i.addField('- **System Information**', `» Platform: \`${stackos.os} ( ${stackos.arch} Bit )\`\n» Processor: \`${(stackos.cpus.model).split("(R)")[1]} ( ${stackos.cpus.cores} Cores )\``);
      await i.addField('- **Additional Information**', `» Latency: \`${Math.round(hero.ping)} ms\`\n» Node.js: \`${process.version.replace('v', '') + ' v'}\`\n» Discord.js: \`${require('./package.json').dependencies["discord.js"].replace('^', '') + ' v'}\`\n» Uptime: \`${pretty(hero.uptime, { verbose: true })}\``);
      await i.setFooter('- ItzTexo.', 'https://cdn.discordapp.com/avatars/475396751549792277/67c29dd84da4abe7144af04e11c8120b.png?size=2048');
      await message.channel.send(i);
  }
});


const Discord = require("discord.js");
const client = new Discord.Client();





client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | اطلق من دخل شخص جديد' , `اهلاً بك في السيرفر, ${member}`)
        .addField(':		id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`لقد خرج صديق :( :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامة يحبي :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`====شكرا للاستمتاع====`, ' https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })
	

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء

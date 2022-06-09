const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] })

client.login(process.env.token)



//AZIONE//
client.on("messageCreate", message => {
    if (message.content.startsWith("!me")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("<:Azione:969898345093029938>__AZIONE RP__<:Azione:969898345093029938>")
                .setDescription(`${message.author.toString()} <a:FrecciaDestra:969898345466318878> ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//AZIONE SEX//
client.on("messageCreate", message => {
    if (message.content.startsWith("!sex")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle(":underage:__AZIONE SEX RP__:underage: ")
                .setDescription(`${message.author.toString()} <a:FrecciaDestra:969898345466318878> ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//COMANDO TWITTER//
client.on("messageCreate", message => {
    if (message.content.startsWith("!tweet")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle("<:Twitter:969898346246455386>__TWITTER__<:Twitter:969898346246455386>")
                .setDescription(`${message.author.toString()} <a:FrecciaDestra:969898345466318878> ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//COMANDO POST INSTAGRAM//
client.on("messageCreate", message => {
    if (message.content.startsWith("!ig")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .setTitle("<:Instagram3:969898346263232562>__INSTAGRAM__<:Instagram3:969898346263232562>")
                .setDescription(`${message.author.toString()} <a:FrecciaDestra:969898345466318878> ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//COMANDO ANONIMO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!anon")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("BLACK")
                .setTitle("<:anonimo:969898344921047100>__MESSAGGIO ANONIMO__<:anonimo:969898344921047100>")
                .setDescription(`*${testo}*`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


//BENVENUTO
client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setColor("#09fc00")
        .setTitle("🇮🇹 • 𝐈𝐓𝐀𝐋𝐈𝐀𝐍 𝐅𝐔𝐋𝐋 𝐑𝐏 [𝐗𝐁𝐎𝐗] • 🇮🇹")
        .setDescription(`${member.toString()} Ti diamo il benvenuto su 🇮🇹 • 𝐈𝐓𝐀𝐋𝐈𝐀𝐍 𝐅𝐔𝐋𝐋 𝐑𝐏 [𝐗𝐁𝐎𝐗] • 🇮🇹 \n \n Prima di iniziare a fare RP con noi leggi il <#979343946545246258> \n \n Compila il modulo <#979346505234251836>  \n \n Entra nel canale <#979348314178875443> e aspetta un <@&978415338486124574> \n \n Cosa aspetti vieni a giocare e divertiti con noi`)
        .setThumbnail("https://cdn.discordapp.com/attachments/956549530541764628/979750660381765632/AB5F2015-0F31-4FA8-A86D-A5E0E2E19ED2.jpg")
        .setTimestamp()
        .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});

    client.channels.cache.get("979081171910668288").send({embeds: [embed]}); 
})


//ADDIO
client.on("guildMemberRemove", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("GOODBEY")
        .setDescription(`Ciao ${member.toString()}, ci rivediamo presto qua in ${member.guild.name}`)
        .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
    client.channels.cache.get("idCanale").send({embeds: [embed]}); 
})


//--------BOTTONI--------//

//Schermata principale//
client.on("messageCreate", message => {
    if (message.content == "i!help") {
        let embed = new Discord.MessageEmbed()
        .setTitle("📋__LISTA COMANDI__📋")
        .setDescription(" **__Per qualsiasi comando hai bisogno lo troverai qui sotto cliccando i seguenti bottoni__** ")
        .setColor("#0006ff")
        .setTimestamp()
        .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});

        const button1 = new Discord.MessageButton() 
            .setLabel("LISTA COMANDI STAFF")
            .setLabel("C. STAFF")
            .setStyle("SECONDARY")
            .setCustomId("clickButton1")
            .setEmoji('983455025609187379');

            const buttons3 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. RP STARTED")
            .setStyle("DANGER") 
            .setCustomId("clickButton3")
            .setEmoji("969898347014017105")


        const button2 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. ROLEPLAY 1")
            .setStyle("PRIMARY")
            .setCustomId("clickButton2")
            .setEmoji("969898345093029938")


        const button4 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. ROLEPLAY 2")
            .setStyle("PRIMARY")
            .setCustomId("clickButton4")
            .setEmoji("969898345093029938")


            let row = new Discord.MessageActionRow()
            .addComponents(button1)
.addComponents(buttons3)
.addComponents(button2)
.addComponents(button4)

            message.delete()
            message.channel.send({embeds: [embed], components: [row] })

    }
})

//BOOTONE1//
client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId == "clickButton1") {
        interaction.deferUpdate()
        const embed = new Discord.MessageEmbed()
        .setTitle("<a:Attenzione:969898344530997260>__STAFF COMMANDS__<a:Attenzione:969898344530997260>")
        .setDescription("\n 「**!embed + [messaggio]** \<a:FrecciaDestra:969898345466318878> *__Mandare un messaggio in embed__* 」 \n \n 「**!clear + n°** \<a:FrecciaDestra:969898345466318878> *__Cancellare un determinato numero di messaggi__* 」 \n \n 「**!ban + @** \<a:FrecciaDestra:969898345466318878> *__Bannare permanentemente un utente dal server__*」 \n \n  「**!unban + @** \<a:FrecciaDestra:969898345466318878> *__Sbannare un utente dal server__* 」\n \n 「**!sondaggio + [messaggio]**  \<a:FrecciaDestra:969898345466318878> *__Fare un sondaggio all'interno del server__* 」\n \n 「**!annuncio + [messaggio]** \<a:FrecciaDestra:969898345466318878> *__Fare un annuncio all'interno del server__* 」")
        .setColor("#0006ff")
        .setTimestamp()
        .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});


            const button1 = new Discord.MessageButton() 
            .setLabel("LISTA COMANDI UTENTI")
            .setLabel("C. STAFF")
            .setStyle("SECONDARY")
            .setCustomId("clickButton1")
            .setEmoji('983455025609187379');


            const buttons3 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. RP STARTED")
            .setStyle("DANGER")
            .setCustomId("clickButton3")
            .setEmoji("969898347014017105")


        const button2 = new Discord.MessageButton() 
            .setLabel("Comandi Roleplay")
            .setLabel("C. ROLEPLAY 1")
            .setStyle("PRIMARY")
            .setCustomId("clickButton2")
            .setEmoji("969898345093029938")

        const button4 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. ROLEPLAY 2")
            .setStyle("PRIMARY")
            .setCustomId("clickButton4")
            .setEmoji("969898345093029938")


            let row = new Discord.MessageActionRow()
            .addComponents(button1)
.addComponents(buttons3)
.addComponents(button2)
.addComponents(button4)

        interaction.message.edit({ embeds: [embed], components: [row] })
    }
})


//BTTONE2//
client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId == "clickButton3") {
        interaction.deferUpdate()
        const embed = new Discord.MessageEmbed()
        .setTitle("<a:alert:972249894620377118>**__RP STARTED COMMANDS__**<a:alert:972249894620377118>")
        .setDescription("`「!rpon` \<a:FrecciaDestra:969898345466318878> **__Mandare il server online__** 」\n \n `「!rpoff` \<a:FrecciaDestra:969898345466318878> **__Mandare il server offline__** 」\n \n `「!wl-superata + @` \<a:FrecciaDestra:969898345466318878> **__Accettare le whitelist vocali ad un player__** 」\n \n `「!wl-rimandata + @` \<a:FrecciaDestra:969898345466318878> **__Rimandare la whitelist vocale ad un player__** 」 \n \n `「!wlon` \<a:FrecciaDestra:969898345466318878> **__Mandare le whitelist vocali on__** 」 \n \n `「!wloff` \<a:FrecciaDestra:969898345466318878> **__Mandare le whitelist vocali offline__** 」\n \n `「!bon` \<a:FrecciaDestra:969898345466318878> **__Aprire i bandi lavori__** 」\n \n `「!boff` \<a:FrecciaDestra:969898345466318878> **__Chiudere i bandi lavori__** 」")
        .setColor("#0006ff")
        .setTimestamp()
        .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});


            const button1 = new Discord.MessageButton() 
            .setLabel("LISTA COMANDI STAFF")
            .setLabel("C. STAFF")
            .setStyle("SECONDARY")
            .setCustomId("clickButton1")
            .setEmoji('983455025609187379');


            const buttons3 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. RP STARTED")
            .setStyle("DANGER")
            .setCustomId("clickButton3")
            .setEmoji("969898347014017105")


        const button2 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. ROLEPLAY 1")
            .setStyle("PRIMARY")
            .setCustomId("clickButton2")
            .setEmoji("969898345093029938")


        const button4 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. ROLEPLAY 2")
            .setStyle("PRIMARY")
            .setCustomId("clickButton4")
            .setEmoji("969898345093029938")


            let row = new Discord.MessageActionRow()
            .addComponents(button1)
.addComponents(buttons3)
.addComponents(button2)
.addComponents(button4)

        interaction.message.edit({ embeds: [embed], components: [row] })
    }
})

//BTTONE3//
client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId == "clickButton2") {
        interaction.deferUpdate()
        const embed = new Discord.MessageEmbed()
        .setTitle("<a:SirenaRossa:969898347504734208>__ROLEPLAY COMMANDS__<a:SirenaBlu:969898347014017105>")
        .setDescription("`「!me + [messaggio]` \<a:FrecciaDestra:969898345466318878> **__Fare un azione roleplay__** 」\n \n `「!sex + [messaggio]` \<a:FrecciaDestra:969898345466318878> **__Fare un azione sex rp__** 」\n \n `「!ig + [messaggio]`  \<a:FrecciaDestra:969898345466318878> **__Postare contenuti su instagram__** 」\n \n `「!tweet + [messaggio]`  \<a:FrecciaDestra:969898345466318878> **__Postare contenuti su twitter__** 」\n \n `「!anon + [messaggio]` \<a:FrecciaDestra:969898345466318878> **__Mandare messaggi in anonimo sul dark web__** 」\n \n  `「!lego + @` \<a:FrecciaDestra:969898345466318878> **__Legare una persona__** 」\n \n `「!slego + @` \<a:FrecciaDestra:969898345466318878> **__Slegare una persona__** 」\n \n `「!assistenza`  \<a:FrecciaDestra:969898345466318878> **__Ricevere assistenza immediata__** 」\n \n `「!b-accettato + @` \<a:FrecciaDestra:969898345466318878> **__Accettare un bando ad un utente__** 」 \n \n `「!b-rifiutato + @` \<a:FrecciaDestra:969898345466318878>  **__Rifiutare il bando ad un utente__** 」")
        .setColor("#0006ff")
        .setTimestamp()
        .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});


            const button1 = new Discord.MessageButton() 
            .setLabel("LISTA COMANDI STAFF")
            .setLabel("C. STAFF")
            .setStyle("SECONDARY")
            .setCustomId("clickButton1")
            .setEmoji('983455025609187379');


            const buttons3 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. RP STARTED")
            .setStyle("DANGER")
            .setCustomId("clickButton3")
            .setEmoji("969898347014017105")


        const button2 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. ROLEPLAY 1")
            .setStyle("PRIMARY")
            .setCustomId("clickButton2")
            .setEmoji("969898345093029938")
            

        const button4 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. ROLEPLAY 2")
            .setStyle("PRIMARY")
            .setCustomId("clickButton4")
            .setEmoji("969898345093029938")


            let row = new Discord.MessageActionRow()
            .addComponents(button1)
.addComponents(buttons3)
.addComponents(button2)
.addComponents(button4)

        interaction.message.edit({ embeds: [embed], components: [row] })
    }
})



//BTTONE4//
client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId == "clickButton4") {
        interaction.deferUpdate()
        const embed = new Discord.MessageEmbed()
        .setTitle("<a:SirenaRossa:969898347504734208>__ROLEPLAY COMMANDS __<a:SirenaBlu:969898347014017105>")
        .setDescription("`「!benzina`  \<a:FrecciaDestra:969898345466318878>  **__Fare benzina nel proprio veicolo__** 」\n \n `「!curo + @` \<a:FrecciaDestra:969898345466318878> **__Curare una persona__** 」 \n \n  `「!furto-auto + nome veicolo` \<a:FrecciaDestra:969898345466318878> **__Rubare un veicolo di una persona__** 」 \n \n  `「!furto-soldi` \<a:FrecciaDestra:969898345466318878> **__Rubare dei soldi ad una persona__** 」 \n \n `「!perquisisco + @` \<a:FrecciaDestra:969898345466318878> **__Perquisire una persona__** 」 \n \n `「!posizione + @` \<a:FrecciaDestra:969898345466318878> **__Inviare la propria posizione ad una persona__** 」 \n \n `「!lego + @` \<a:FrecciaDestra:969898345466318878> **__Legare una persona__** 」\n \n `「!slego + @` \<a:FrecciaDestra:969898345466318878> **__Slegare una persona__** 」")
        .setColor("#0006ff")
        .setTimestamp()
        .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});


            const button1 = new Discord.MessageButton() 
            .setLabel("LISTA COMANDI STAFF")
            .setLabel("C. STAFF")
            .setStyle("SECONDARY")
            .setCustomId("clickButton1")
            .setEmoji('983455025609187379');


            const buttons3 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. RP STARTED")
            .setStyle("DANGER")
            .setCustomId("clickButton3")
            .setEmoji("969898347014017105")


        const button2 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. ROLEPLAY 1")
            .setStyle("PRIMARY")
            .setCustomId("clickButton2")
            .setEmoji("969898345093029938")


        const button4 = new Discord.MessageButton() 
            .setLabel("PROVA 2")
            .setLabel("C. ROLEPLAY 2")
            .setStyle("PRIMARY")
            .setCustomId("clickButton4")
            .setEmoji("969898345093029938")


            let row = new Discord.MessageActionRow()
            .addComponents(button1)
.addComponents(buttons3)
.addComponents(button2)
.addComponents(button4)

        interaction.message.edit({ embeds: [embed], components: [row] })
    }
})


//--------------------------------------------------------------------------------//



//MESSAGGIO IN EMBED//
client.on("messageCreate", message => {
    if (message.content.startsWith("!embed")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ed00ff")
                .setDescription(` ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//!clear 50
client.on("messageCreate", message => {
    if (message.content.startsWith("!clear")) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non hai il permesso');
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non ho il permesso');
        }
        var count = parseInt(message.content.split(/\s+/)[1]);
        if (!count) {
            return message.channel.send("Inserisci un numero valido")
        }
        if (count > 100) {
            return message.channel.send("Non puoi cancellare più di 100 messaggi")
        }
        message.channel.bulkDelete(count, true)
        message.channel.send(count + " messaggi eliminati").then(msg => {
            setTimeout(() => msg.delete(), 5000)
        })
    }
})

//COMANDO DI BAN//
client.on("messageCreate", message => {
    if (message.content.startsWith("!ban")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.bannable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.ban()
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} bannato`)
                    .setDescription(`Utente bannato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }
})

//COMANDO UNBAN//
client.on("messageCreate", async message => {
    if (message.content.startsWith("!unban")) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }

        var args = message.content.split(/\s+/);
        var idUtente = args[1]

        if (!idUtente) {
            return message.channel.send("Non hai scritto l'id di nessun utente");
        }

        message.guild.members.unban(idUtente)
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setTitle("Utente sbannato")
                    .setDescription("Questo utente è stato sbannato")

                message.channel.send({ embeds: [embed] })
            })
            .catch(() => { message.channel.send("Utente non valido o non bannato") })
    }
})


//ANNUNCIO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!annuncio")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("<a:annuncio3:972113993818861618>__ANNUNCIO DALLO STAFF__<a:annuncio3:972113993818861618>")
                .setDescription(`${testo} \n \n **BY** ${message.author.toString()}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


//RP ON//
client.on("messageCreate", message => {
    if (message.content.startsWith("!rpon")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#3aff00")
                .setTitle("<:cerchioverde:972057769198891038>__SERVER ON__<:cerchioverde:972057769198891038>")
                .setDescription(`**VI COMUNICHIAMO CHE IL SERVER É UFFICIALMENTE ON, COSA ASPETTI, ENTRA ANCHE TU IN SESSIONE CON NOI E DIVERTIAMOCI INSIEME**`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//RP ON//
client.on("messageCreate", (message) => {
    if (message.content == "!rpon") {
        message.channel.send("<@&979021198254035055>")
    }
})


//RP OFF//
client.on("messageCreate", message => {
    if (message.content.startsWith("!rpoff")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("<:cerchiorosso:972057788576575508>__SERVER OFF__<:cerchiorosso:972057788576575508>")
                .setDescription(`**VI COMUNICHIAMO CHE IL SERVER È OFF, TORNA PIÚ TARDI PER CONTINUARE IL TUO FANTASTICO ROLEPLAY**`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//RP OFF//
client.on("messageCreate", (message) => {
    if (message.content == "!rpoff") {
        message.channel.send("<@&979021198254035055>")
    }
})


//SONDAGGIO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!sondaggio")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var sondaggio = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("<a:Attenzione:969898344530997260>__SONDAGGIO__<a:Attenzione:969898344530997260>")
                .setDescription(`${message.author.toString()} <a:FrecciaDestra:969898345466318878> ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [sondaggio]})
            .then(msg => {
                msg.react("<a:Si:969898348100321390>")
                msg.react("<a:No:969898348368781362>")
            })

    }
})


//WL SUPERATA//
client.on("messageCreate", message => {
    if (message.content.startsWith("!wl-superata")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#3aff00")
                .setTitle("<a:Si:969898348100321390>__WHITELIST SUPERATA__<a:Si:969898348100321390>")
                .setDescription(`**COMPLIMENTI ${testo} LEI È RIUSCITO A PASSARE IL PROVINO PER ENTRARE A FAR PARTE DI QUESTA BELLISSIMA CITTÀ**`) 
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


//WL NON SUPERATA//
client.on("messageCreate", message => {
    if (message.content.startsWith("!wl-rimandata")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("<a:No:969898348368781362>__WHITELIST NON SUPERATA__<a:No:969898348368781362>")
                .setDescription(`**CI DISPIACE ${testo} SEI STATO RIMANDATO PER RITENTARE LA WL, LA PROSSIMA COLTA NON CI DELUDERAINON**`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


//WL ON//
client.on("messageCreate", message => {
    if (message.content.startsWith("!wlon")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#3aff00")
                .setTitle("<:cerchioverde:972057769198891038>__WHITELIST ONLINE__<:cerchioverde:972057769198891038>")
                .setDescription(`**LO STAFF VI COMUNICA CHE LE WHITELIST VOCALI SONO UFFICIALMENTE APERTE, AFFRETTATEVI AD ANDARE NELLA CHAT ATTESA WHITELIST**`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//WL ON//
client.on("messageCreate", (message) => {
    if (message.content == "!wlon") {
        message.channel.send("<@&978418252243955752>")
    }
})


//WL OFF//
client.on("messageCreate", message => {
    if (message.content.startsWith("!wloff")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("<:cerchiorosso:972057788576575508>__WHITELIST OFFLINE__<:cerchiorosso:972057788576575508>")
                .setDescription(`**LO STAFF VI COMUNICA CHE LE WHITELIST VOCALI SONO CHIUSE, RITORNATE QUANDO RIAPRIRANNO**`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//WL OFF//
client.on("messageCreate", (message) => {
    if (message.content == "!wloff") {
        message.channel.send("<@&978418252243955752>")
    }
})

//BANDI LAVORI APERTI//
client.on("messageCreate", message => {
    if (message.content.startsWith("!bon")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#3aff00")
                .setTitle("<:cerchioverde:972057769198891038>__BANDI APERTI__<:cerchioverde:972057769198891038>")
                .setDescription(`**VI COMUNICHIAMO CHE I BANDI SONO UFFICIALMENTE APERTI**`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//BANDI LAVORI APERTI//
client.on("messageCreate", (message) => {
    if (message.content == "!bon") {
        message.channel.send("<@&979021198254035055>")
    }
})


//BANDI LAVORI CHIUSI//
client.on("messageCreate", message => {
    if (message.content.startsWith("!boff")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("<:cerchiorosso:972057788576575508>__BANDI CHIUSI__<:cerchiorosso:972057788576575508>")
                .setDescription(`**VI COMUNICHIAMO CHE I BANDI SONO CHIUSI**`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//BANDI LAVORI CHIUSI//
client.on("messageCreate", (message) => {
    if (message.content == "!boff") {
        message.channel.send("<@&979021198254035055>")
    }
})


//ASSISTENZA//
client.on("messageCreate", message => {
    if (message.content.startsWith("!assistenza")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("<a:Attenzione:969898344530997260>__RICHIESTA ASSISTENZA__<a:Attenzione:969898344530997260>")
                .setDescription(`**${message.author.toString()} La informiamo che la sua richiesta di assistenza è stata ricevuta dallo staff, adesso la preghiamo di recarsi in <#979349692238413884> e attendere uno staff**`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})



//ASSISTENZA//
client.on("messageCreate", (message) => {
    if (message.content == "!assistenza") {
        message.channel.send("<@&978415461966413856>")
    }
})



//Comandi Staff//
client.on("messageCreate", message => {
    if (message.content.startsWith("!staff commands")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#3aff00")
                .setTitle("<a:Attenzione:969898344530997260>__STAFF COMMANDS__<a:Attenzione:969898344530997260>")
                .setDescription("\n 「**!embed + [messaggio]** \<a:FrecciaDestra:969898345466318878> *__Mandare un messaggio in embed__* 」 \n \n 「**!clear + n°** \<a:FrecciaDestra:969898345466318878> *__Cancellare un determinato numero di messaggi__* 」 \n \n 「**!ban + @** \<a:FrecciaDestra:969898345466318878> *__Bannare permanentemente un utente dal server__*」 \n \n  「**!unban + @** \<a:FrecciaDestra:969898345466318878> *__Sbannare un utente dal server__* 」\n \n 「**!sondaggio + [messaggio]**  \<a:FrecciaDestra:969898345466318878> *__Fare un sondaggio all'interno del server__* 」\n \n 「**!annuncio + [messaggio]** \<a:FrecciaDestra:969898345466318878> *__Fare un annuncio all'interno del server__* 」") 
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


//COMANDI RP STARTED//
client.on("messageCreate", message => {
    if (message.content.startsWith("!rp started commands")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#3aff00")
                .setTitle("<a:alert:980019489515130960>__RP STARTED COMMANDS__<a:alert:980019489515130960>")
                .setDescription("「**!rpon** \<a:FrecciaDestra:969898345466318878> *__Mandare il server online__* 」\n \n 「**!rpoff** \<a:FrecciaDestra:969898345466318878> *__Mandare il server offline__* 」\n \n 「**!wl-superata + @** \<a:FrecciaDestra:969898345466318878> *__Accettare le whitelist vocali ad un player__* 」\n \n 「**!wl-rimandata + @** \<a:FrecciaDestra:969898345466318878> *__Rimandare la whitelist vocale ad un player__* 」 \n \n 「**!wlon** \<a:FrecciaDestra:969898345466318878> *__Mandare le whitelist vocali on__* 」 \n \n 「 **!wloff** \<a:FrecciaDestra:969898345466318878> *__Mandare le whitelist vocali offline__* 」\n \n 「 **!bon** \<a:FrecciaDestra:969898345466318878> *__Aprire i bandi lavori__* 」\n \n 「**!boff** \<a:FrecciaDestra:969898345466318878> *__Chiudere i bandi lavori__* 」") 
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


//COMANDI ROLEPLAY//
client.on("messageCreate", message => {
    if (message.content.startsWith("!rp commands")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#3aff00")
                .setTitle("<a:SirenaRossa:980019621824462858>__ROLEPLAY COMMANDS__<a:SirenaBlu:980019630011727953>")
                .setDescription("\n 「**!me + [messaggio]** \<a:FrecciaDestra:969898345466318878> *__Fare un azione roleplay__* 」\n \n 「**!sex + [messaggio]** \<a:FrecciaDestra:969898345466318878> *__Fare un azione sex rp__* 」\n \n 「**!ig + [messaggio]**  \<a:FrecciaDestra:969898345466318878> *__Postare contenuti su instagram__* 」\n \n 「**!tweet + [messaggio]**  \<a:FrecciaDestra:969898345466318878> *__Postare contenuti su twitter__* 」\n \n 「**!anon + [messaggio]** \<a:FrecciaDestra:969898345466318878> *__Mandare messaggi in anonimo sul dark web__* 」\n \n  「**!lego + @** \<a:FrecciaDestra:969898345466318878> *__Legare una persona__* 」\n \n 「**!slego + @** \<a:FrecciaDestra:969898345466318878> *__Slegare una persona__* 」\n \n  「**!assistenza**  \<a:FrecciaDestra:969898345466318878> *__Ricevere assistenza immediata__* 」 \n \n ") 
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


//BOTTONI 911//
client.on("messageCreate", message => {
    if (message.content == "!comando") {
        let embed = new Discord.MessageEmbed()
        .setTitle("**📞__CHIAMATA AL 911__📞**")
        .setDescription(`${message.author.toString()} Lei ha chiamato il 911, qui sotto trovaerà di sicuro quello che le serve, le basterà cliccare il bottone e così verrà inviata una chiamata al servizio d'emergenza che lei ha richiesto `)
        .setColor("#ff0000")
        .setTimestamp()
        .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});

        let button1 = new Discord.MessageButton()
        .setLabel("113")
        .setStyle("DANGER")
        .setCustomId("clickButton6")

        let button2 = new Discord.MessageButton()
        .setLabel("117")
        .setStyle("DANGER")
        .setCustomId("clickButton7")

        let button3 = new Discord.MessageButton()
        .setLabel("118")
        .setStyle("DANGER")
        .setCustomId("clickButton8")

        let button4 = new Discord.MessageButton()
        .setLabel("ACI GLOBAL")
        .setStyle("DANGER")
        .setCustomId("clickButton9")

        let row = new Discord.MessageActionRow()
        .addComponents(button1)
        .addComponents(button2)
        .addComponents(button3)
        .addComponents(button4)

        message.channel.send({ embeds: [embed], components: [row] })
    }
})

//bottone 113//
client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId == "clickButton6") {
        interaction.deferUpdate()

        client.channels.cache.get ("979658736736034826").send(" <@&979338415222960158> Un cittadino è in pericolo correte a salvarlo ")
    }
})

//bottone 117//
client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId == "clickButton7") {
        interaction.deferUpdate()

        client.channels.cache.get ("980240234501529640").send(" <@&979338974566965329> C'è stata una segnalazione, andiamo a controllare ")
    }
})

//bottone 118//
client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId == "clickButton8") {
        interaction.deferUpdate()

        client.channels.cache.get ("980061852979580968").send(" <@&979340149341184061> Un cittadino non si sente molto bene corriamo a salvarlo ")
    }
})

//bottone aci global//
client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId == "clickButton9") {
        interaction.deferUpdate()

        client.channels.cache.get ("981213804752928798").send(" <@&979344026136358952> A qualcuno non funziona più la macchina, un carroatrezzi è già stato inviato verso la sua posizione ")
    }
})


//RP1//
client.on("messageCreate", (message) => {
    if (message.content == "!rp") {
        message.channel.send("**Chi per RP alle 14:30?** \n||<@&979021198254035055>|| ")
        .then(msg => {
            msg.react("<a:Si:969898348100321390>")
            msg.react("<a:No:969898348368781362>")
            msg.react("🤷")
        })
    }
})


//RP2//
client.on("messageCreate", (message) => {
    if (message.content == "!rp") {
        message.channel.send("**Chi per RP alle 16:30?** \n||<@&979021198254035055>|| ")
        .then(msg => {
            msg.react("<a:Si:969898348100321390>")
            msg.react("<a:No:969898348368781362>")
            msg.react("🤷")
        })
    }
})


//RP3//
client.on("messageCreate", (message) => {
    if (message.content == "!rp") {
        message.channel.send("**Chi per RP alle 18:30?** \n||<@&979021198254035055>|| ")
        .then(msg => {
            msg.react("<a:Si:969898348100321390>")
            msg.react("<a:No:969898348368781362>")
            msg.react("🤷")
        })
    }
})


//RP4//
client.on("messageCreate", (message) => {
    if (message.content == "!rp") {
        message.channel.send("**Chi per RP alle 20:30?** \n||<@&979021198254035055>|| ")
        .then(msg => {
            msg.react("<a:Si:969898348100321390>")
            msg.react("<a:No:969898348368781362>")
            msg.react("🤷")
        })
    }
})



//BANDO-ACCETTATO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!b-accettato")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#3aff00")
                .setTitle("<a:Si:969898348100321390>__BANDO LAVORO ACCETTATO__<a:Si:969898348100321390>")
                .setDescription(`${testo} **Il suo bando è stato accettato da** ${message.author.toString()} `) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})



//BANDO-RIFIUTATO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!b-rifiutato")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("<a:No:969898348368781362>__BANDO RIFIUTATO__<a:No:969898348368781362>")
                .setDescription(`${testo} **Il suo bando è stato rifiutato da** ${message.author.toString()} `) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


//BENZINA//
client.on("messageCreate", message => {
    if (message.content.startsWith("!benzina")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ff9900")
                .setTitle("⛽__BENZINA__⛽")
                .setDescription(`${message.author.toString()} Ha appena fatto benzina nel suo veicolo`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


//CURO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!curo")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("<:BorsaMedica:969898346347102208>__STAI CURANDO__<:BorsaMedica:969898346347102208>")
                .setDescription(`${message.author.toString()} <a:FrecciaDestra:969898345466318878> ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})



//FURTO AUTO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!furto-auto")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("<:CHIAVIAUTO:983491186390085662>__FURTO AUTO__<:CHIAVIAUTO:983491186390085662>")
                .setDescription(`${message.author.toString()} Sta rubando il veicolo ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})



//FURTO SOLDI//
client.on("messageCreate", message => {
    if (message.content.startsWith("!furto-soldi")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("<a:dollar:983491839128666172>__FURTO SOLDI__<a:dollar:983491839128666172>")
                .setDescription(`${message.author.toString()} Sta rubando dei soldi`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})


//LEGO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!lego")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#000000")
                .setTitle("<:CORDA:972407490878795796>__STAI LEGANDO__<:CORDA:972407490878795796>")
                .setDescription(`${message.author.toString()} Ha legato <a:FrecciaDestra:969898345466318878> ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})



//SLEGO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!slego")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#000000")
                .setTitle("<:CORDA:972407490878795796>__STAI SLEGANDO__<:CORDA:972407490878795796>")
                .setDescription(`${message.author.toString()} Ha slegato <a:FrecciaDestra:969898345466318878> ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})



//POSIZIONE//
client.on("messageCreate", message => {
    if (message.content.startsWith("!posizione")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#09ff00")
                .setTitle("<a:Pushpin:969898346254852096>__POSIZIONE__<a:Pushpin:969898346254852096>")
                .setDescription(`${message.author.toString()} Ha inviato la propria posizione a <a:FrecciaDestra:969898345466318878> ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})



//PERQUISISCO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!perquisisco")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#000000")
                .setTitle("<a:Esclamazione:969898345306918922>__PERQUISIZIONE__<a:Esclamazione:969898345306918922>")
                .setDescription(`${message.author.toString()} Ha perquisito <a:FrecciaDestra:969898345466318878> ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})

//TICKET//
//Prima di tutto mandare il messaggio del ticket
client.on("messageCreate", message => {
    if (message.content == "!ticket") {
        let embed = new Discord.MessageEmbed()
        .setTitle("<a:makeaticket:983869232154558464>__TICKET__<a:makeaticket:983869232154558464>")
        .setDescription("***__Per qualsiasi esigenza apra un ticket supporto__***")
        .setColor("#0006ff")
        .setTimestamp()
        .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});

        var button1 = new Discord.MessageButton()
            .setLabel("📩 Crea Ticket")
            .setCustomId("apriTicket")
            .setStyle("SUCCESS")

        var row = new Discord.MessageActionRow()
            .addComponents(button1)

            message.delete()        
            message.channel.send({embeds: [embed], components: [row] })
    }
})

client.on("interactionCreate", interaction => {
    if (interaction.customId == "apriTicket") {
        interaction.deferUpdate()
        if (interaction.guild.channels.cache.find(canale => canale.topic == `User ID: ${interaction.user.id}`)) {
            interaction.user.send("**__Hai un ticket supporto aperto, assicurati che non hai nessun ticket aperto per crearne un altro__**").catch(() => { })
            return
        }
        interaction.guild.channels.create(interaction.user.username, {
            type: "text",
            topic: `User ID: ${interaction.user.id}`,
            parent: "967184933846126642", //Settare la categoria,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                { //Aggiungere l'id del ruolo che può visualizzare il ticket aperto
                    id: "967393075204870236", 
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then(canale => {
            var embed = new Discord.MessageEmbed()
            .setTitle("<a:makeaticket:983869232154558464> __TICKET SUPPORTO__ <a:makeaticket:983869232154558464>")
            .setDescription("**__Benvenuto nell'assistenza di questo server, mentre attende uno staff inizii a esporre le sue problematiche__**")
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter ({ text: "⭐ Powered by RolePlay Bot ⭐"});

            var button2 = new Discord.MessageButton()
            .setLabel("Chiudi Ticket")
            .setCustomId("chiudiTicket")
            .setStyle("DANGER")
            .setEmoji("984118425263681546")
    
            var row = new Discord.MessageActionRow()
            .addComponents(button2)

            canale.send({embeds: [embed], components: [row] })
        }
)}})

client.on("interactionCreate", interaction => {
                if (interaction.customId == "chiudiTicket") {
                    interaction.deferUpdate()
                    interaction.channel.delete();
                
            }
})

//--------------------------------------------------------------------------------------//
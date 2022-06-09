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
            .setLabel("Crea Ticket")
            .setCustomId("apriTicket")
            .setStyle("SUCCESS")
            .setEmoji("969898347014017105")

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
            .setStyle("SUCCESS")
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
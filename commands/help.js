module.exports ={
    //basic name and description
    name: 'help',
    description: 'Show all the possible commands of the bot in an embed',
    execute(message, args, Discord){
        const ruleschannelId = '795054254045134869'; //rules channel id
        const helpList = new Discord.MessageEmbed()//embed time
        .setColor('#b44d2b')
        .setTitle('List of Commands')
        .setDescription('-------------------------')
        .setThumbnail('https://agilevelocity.com/wp-content/uploads/2019/09/shutterstock_1254279517.jpg')
        .addFields(
            {name: '!help', value: 'Shows all the possible commands'},
            {name: '!rules', value: `Shows the rules of the server --- ${message.guild.channels.cache.get(ruleschannelId).toString()}` },
            {name:'!games', value: 'Shows the list of games that the server hosts'},
            {name: '!reactionroles', value: 'Creates a reaction roles embed'},
            {name: '!play [url]', value: 'Adds and plays the first song in the queue'},
            {name: '!queue [url]', value: 'Adds the song in the back of the queue (Under works)'},
            {name: '!leave', value: 'Stops and clears the queue'},
            {name: '!clear', value: 'Clear the queue (Under works)'}
        )
        .setFooter('Made by Aditya :)');

        message.channel.send(helpList);
    }
}

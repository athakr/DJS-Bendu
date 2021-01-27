module.exports = {
    //basic name and description
    name: 'rules',
    description: 'displays server rules',
    execute(message, args, Discord){
        const rulesList = new Discord.MessageEmbed()//embed initialization
        .setColor('#113355')
        .setTitle("Rules of Bendu Gaming")
        .setDescription('----------------')
        .setThumbnail('https://static.wikia.nocookie.net/starwars/images/8/84/RepublicBenduSymbol-AoI.png/revision/latest/scale-to-width-down/340?cb=20091008184448')
        .addFields(
            {name: 'Rule 1', value:'No Toxicity of any kind -- Racism => Insta Ban'},
            {name: 'Rule 2', value:'Communicate with others. Let an exec know if something/someone is bothering you'},
            {name: 'Rule 3', value:'Have a growth mindset'},
            {name: 'Rule 4', value:`**R6 only!** Change your nickname to ==> (YourName or CasualName)[UplayName]`}
        );
        message.channel.send(rulesList);
    }
}
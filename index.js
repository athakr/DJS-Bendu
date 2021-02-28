//initializing and setting variables
const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGES", "CHANNEL", "REACTION"]});
const prefix = '!';

const fs  = require('fs');
const welcome = require('./commands/welcome');
client.commands = new Discord.Collection(); //new discord collection command

//taking files from command folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
//output when bot is ready
client.once('ready', () => {
    console.log("Bendu is online!");
});

client.on('message', message =>{
    //welcome(client); uncomment to start welcome message func

    //check if message is command or a random statement
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/); //split spaces
    const command = args.shift().toLowerCase();

    //bunch of viable commands
    if(command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    }else if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }else if(command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }else if(command === 'play'){
        client.commands.get('play').execute(message, args);
    }else if(command === 'leave'){
        client.commands.get('leave').execute(message, args);
    }else if(command === 'games'){
        client.commands.get('games').execute(message, args, Discord);
    }
    else{
        message.channel.send('That command does not exist');
    }
});
//token login
client.login(process.env.DJS_TOKEN);

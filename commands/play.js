const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
 //This is not my work and I credit it to CodeLyon on Youtube along with the leave.js code!
module.exports = {
    name: 'play',
    description: 'Play a video from youtube',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel; //gets voice channel that user is currently in
        //check if invoker is in a voice channel
        if(!voiceChannel) return message.channel.send('You need to be in a voice channel (vc) to execute this command');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send("You don't have right permissions");
        if(!permissions.has('SPEAK')) return message.channel.send("You don't have right permissions");
        if(!args.length) return message.channel.send('You need to add an URL or keywords');


        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('leaving channel');
            });
 
            await message.reply(`:thumbsup: Now Playing ***${message.author}'s Song!***`)
 
            return
        }

        const connection = await voiceChannel.join();

        const findVid = async (query) =>{
            const vidResult = await ytSearch(query);
            return (vidResult.videos.length > 1) ? vidResult.videos[0] : null;
        }

        const video = await findVid(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });

            await message.reply(`Now Playing ***${video.title}***`)
        }
        else {
            message.channel.send('No video result found');
        }
    }
}
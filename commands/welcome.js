module.exports = client =>{
    const welcomeChannel = '760536032197214279'; //id of welcome channel
    const rulesPage = '795054254045134869'; //rules page
    client.on('guildMemberAdd', (member) =>{
        console.log(member);

        const message = `Welcome <@${member.id}> to **Bendu Gaming**! Please check out the ${member.guild.channels.cache.get(rulesPage).toString()} `
        const channel = member.guild.channels.cache.get(welcomeChannel)
        channel.send(message)
    })
}
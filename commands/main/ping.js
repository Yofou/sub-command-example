module.exports = {

    name: 'ping',
    usage: 'ping',
    desc: 'checks if the bot is responding to commands',
    run (client, message, args) {

        message.reply( 'Pong!' )

    }

}
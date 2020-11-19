module.exports = ( client ) => {

    return ( message ) => {

        if ( message.author.bot || !message.content.startsWith( client.config.prefix ) ) return

        const args = message.content.split(' ')
        let request = args.shift()
            .slice( client.config.prefix.length );
    
        let parent;
        if ( client.commands.has( request ) && client.commands.get( request ).has('default') ) {
            parent = request
            request = args.shift() || 'default'
        } else {
            parent = 'main'
        }
        
        const command = client.commands.get( parent ).get( request )
        if ( !command ) return
    
        command.run( client, message, args ) 
           
    }

}
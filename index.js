const { Client, Collection } = require('discord.js')
const glob = require( 'glob' )
const { parse } = require( 'path' )

const client = new Client()
client.config = require('./config.json')

client.commands = new Collection()
glob( './commands/**/*.js', (_, files) => {

    files.forEach( file => {
        
        const { dir } = parse( file )
        const folder = dir.split('/').pop()

        if ( !client.commands.has( folder ) ) client.commands.set( folder, new Collection() )

        const command = require( file )
        client.commands.get( folder ).set( command.name, command )

    } )

    console.log( client.commands );

} )

client.events = new Collection()
glob( './events/*.js', (_, files) => {

    files.forEach( file => {

        const event = require( file )
        const { name } = parse( file)
        
        client.on( name, event( client ) )

    } )

} )


client.login(  client.config.token )

module.exports = {

    name: 'add',
    usage: 'add [num] [num]',
    desc: 'adds two number together',
    run( client, message, args ) {

        if ( args.length != 2 ) return
        const [num1, num2] = args
        const result = parseInt( num1 ) + parseInt( num2 )
        
        message.reply( result )

    }

}
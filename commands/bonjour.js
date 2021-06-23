const { guildOnly } = require("./unwarn");

module.exports = {
    run: message => message.channel.send('bonjour à toi'),
    name: 'bjr',
    guildOnly: true,
    help:{
        description: 'Salue le membre qui l\' a utilisé'
    }
}
const newRegisters = require('../database/newRegisters')
const crypto = require('crypto');


module.exports = {

    async index (request, response) {
        const users = await newRegisters('users').select('*')
    
        return response.json(users)
    },


    async create(request, response){
        const {email, name, birthday, genre} = request.body;

        const id = crypto.randomBytes(4).toString('HEX') 
        const password = crypto.randomBytes(4).toString('HEX') 
    
        await newRegisters('users').insert({
            id,
            email,
            name,
            password,
            birthday,
            genre,
        })
    
        return response.json({id})
    }
}
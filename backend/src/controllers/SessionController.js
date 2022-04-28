const newRegisters = require('../database/newRegisters')

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const user_id = await newRegisters('users')
            .where('id', id)
            .select('name')
            .first();

        if (!user_id) {
            return response.status(400).json({error: 'E-mail ou senha não identificado.'})
        }

        return response.json(user_id)
    }
}
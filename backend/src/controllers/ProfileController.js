const newRegisters = require("../database/newRegisters");

module.exports = {
    async index(request, response){
        const user_id = request.headers.authorization;

        const posts = await newRegisters('posts')
            .where('user_id', user_id)
            .select('*');

        return response.json(posts);
    }
}
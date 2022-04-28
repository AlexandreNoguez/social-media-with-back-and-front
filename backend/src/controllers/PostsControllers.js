const newRegisters = require('../database/newRegisters')
module.exports = {
    async index(request, response){
        const { page = 1} = request.query;

        const [count] =  await newRegisters('posts').count();

        const posts = await newRegisters('posts')
            .join('users', 'users.id', 'posts.user_id')
            .limit(10)
            .offset((page - 1) * 10)
            .select(['posts.*', 'users.name']);
        
        response.header('X-Total-Count', count['count(*)'])
        
        return response.json(posts)
    },


    async create(request, response){
        const { name, description } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await newRegisters('posts').insert({
            name,
            description,
            user_id,
        })
        return response.json({ id })
    },

    async delete(request, response){
        const {id} = request.params;
        const user_id = request.headers.authorization;

        const post = await newRegisters('posts')
            .where('id', id)
            .select('user_id')
            .first();

            if(post.user_id !== user_id){
                return response.status(401).json({error: 'Operação não autorizada.'})
            }

            await newRegisters('posts').where('id', id).delete();

            return response.status(204).send();
    }
}
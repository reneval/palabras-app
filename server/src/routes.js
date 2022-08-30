import WordController from "./WordController.js";

const opts = {
    schema: {
        body: {
            type: 'object',
            properties: {
                origin: {type: 'string'},
                translate: {type: 'string'}
            }
        }
    }
}

async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
        reply.send("return request.body")
    })

    fastify.post('/', opts, async (request, reply) => {
        return request.body
    })

    fastify.post('/word', WordController.add);
}


export default routes
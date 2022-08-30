import 'dotenv/config'
import Fastify from 'fastify'

import FastifyCors from 'fastify-cors'
import routes from './routes.js'

const fastify = Fastify({
    logger: true
})


fastify.register(FastifyCors, {
    origin: (origin, cb) => {
        const hostname = new URL(origin).hostname
        if(hostname === "localhost"){
            cb(null, true)
            return
        }
        // Generate an error on other origins, disabling access
        cb(new Error("Not allowed"))
    }
})

fastify.register(routes)

async function start()  {
    try{
        await fastify.listen(3001)
    } catch(err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
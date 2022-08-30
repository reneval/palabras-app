import WordService from "./WordService.js";

class WordController {
    async add(request, reply) {
        const {origin, translation} = request.body;
        const data = await WordService.add(origin, translation);

        reply
            .code(200)
            .header(`Content-Type`, `application/json; charset=utf-8`)
            .send({
                meta: {
                    code: 200,
                    message: `Ok`,
                },
                data
            });
    }
}

export default new WordController()
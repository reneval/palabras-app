import db from "./database.js";

class WordRepository {
    async add(data){
        const {origin, translation} = data
        console.log({origin, translation})
        return db.insert({
            origin, translation
        }).into('words');
    }
}

export default new WordRepository()
import WordRepository from './WordRepository.js'
import WordDto from "./word.dto.js";

class WordService {
    async add(origin, translation){
        const wordDto = new WordDto(origin, translation)
        return await WordRepository.add(wordDto);
    }
}

export default new WordService()
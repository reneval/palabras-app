import axios from "axios";

const URL = 'https://translation.googleapis.com/language/translate/v2'
const API_KEY = process.env.REACT_APP_GOOGLE_API

async function translate(text) {
    let res = await axios.post(
        `${URL}?key=${API_KEY}`,
        {
            q: text,
            source: 'es',
            target: 'uk',
        }
    );
    let translation = res.data.data.translations[0].translatedText;
    return translation;
}

export default translate
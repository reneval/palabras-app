import axios from "axios";

const URL = 'http://localhost:3001'

async function persist(origin, translation) {
    let res = await axios.post(
        `${URL}/word`,
        {origin, translation}
    );
    return res.data.data;
}

export default persist
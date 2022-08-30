import styles from './Words.module.scss'
import React from "react";
import {useState} from "react";
import translate from "../api/translate";
import persist from "../api/persist";
import capitalize from "../utils/capitalize";
import { toast } from 'react-toastify';
import decodeHTMLText from "../utils/decodeHTMLText";

function Words() {
    const [origin, setOrigin] = useState("")
    const [translation, setTranslation] = useState("")

    const handleTest = async () => {
        toast("hello",
            {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
    }

    const handleSave = async () => {
        persist(origin, translation)
    }

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            setOrigin(capitalize(origin))
            const val = await translate(origin)
            setTranslation(capitalize(decodeHTMLText(val)))
        }
    }

    return (
        <div className={styles.inputGroup}>
            <input
                className={styles.input}
                onChange={e => setOrigin(e.target.value)} value={origin}
                onKeyPress={handleKeyPress}
                placeholder="Origin >"
                type="text"
            />
            <input
                className={styles.input}
                onChange={e => setTranslation(e.target.value)} value={translation}
                placeholder="Translation >"
                type="text"
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleTest}>handleTest</button>
        </div>
    );
}

export default Words;

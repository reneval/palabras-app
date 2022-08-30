function decodeHTMLText(strToDecode) {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(`<!doctype html><body>${strToDecode}`, 'text/html').body.textContent;
    return decodedString
}

export default decodeHTMLText
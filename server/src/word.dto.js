class WordDto {
    constructor(origin, translation) {
        this._origin = origin;
        this._translation = translation;
    }

    get origin() {
        return this._origin;
    }

    set origin(newOrigin) {
        this._origin = newOrigin;
    }

    get translation() {
        return this._translation;
    }

    set translation(newTranslation) {
        this._translation = newTranslation;
    }
}

export default WordDto
export class Quote {
    constructor(text) {
        this.text = text;
        this.guessd = [];
    }

    getContent() {
        let content = "";
        for (const char of this.text) {
            if (char == " " || this.guessd.includes(char)) {
                content += char;
            } else {
                content += "_";
            }
        }
        return content;
    }

    guess(letter) {
        if (!this.text.includes(letter)) {
            return false;
        }
        this.guessd.push(letter);
        return true;
    }
}
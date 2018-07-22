class Isogram {

    constructor (s) {
        this.s = s;
    }

    isIsogram () {
        return !this.s.match(/([^-\s]).*\1/i);
    }
}

module.exports = Isogram;

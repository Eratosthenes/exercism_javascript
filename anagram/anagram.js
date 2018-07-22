class Anagram {
    constructor (word) {
        this.w = word;
    }

    // words is an array
    matches (...words) {
        if (typeof words[0] == 'object') words = words[0];

        let w2, same, matches = [];
        for (let w of words) {
            w = w.split('').map( x => x.toLowerCase() ).join('');
            w2 = this.w.split('').map( x => x.toLowerCase() ).sort();

            same = w2
                .map( x => w.split('').sort().indexOf(x) == w2.indexOf(x) )
                .reduce( (x,y) => x && y );
            debugger;
            if (same) {
                matches.push(w);
            }
        }
        return matches.filter(x => !new RegExp(this.w, 'i').test(x) );
    }
}

module.exports = Anagram;

var subject = new Anagram('ant');
var matches = subject.matches(['tan', 'stand', 'at']);
console.log(matches);

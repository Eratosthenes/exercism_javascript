const animals = ['fly',
    'spider',
    'bird',
    'cat',
    'dog',
    'goat',
    'cow',
    'horse'] 

const riffs = ['I don\'t know why she swallowed the fly. Perhaps she\'ll die.',
    'It wriggled and jiggled and tickled inside her.',
    'How absurd to swallow a bird!',
    'Imagine that, to swallow a cat!',
    'What a hog, to swallow a dog!',
    'Just opened her throat and swallowed a goat!',
    'I don\'t know how she swallowed a cow!',
    'She\'s dead, of course!']

class FoodChain {

    verse (n) {
        let line = `I know an old lady who swallowed a ${animals[n - 1]}.\n`
        line += riffs[n - 1] + '\n';
        if (n == 8) return line;
        for (let i = n; i > 1; i--) {
            line += `She swallowed the ${animals[i - 1]} to catch the ${animals[i - 2]}`
            if (animals[i - 2] == 'spider') {
                line += ' that wriggled and jiggled and tickled inside her.\n';
            } 
            else {
                line += '.\n';
            }
        }
        return (n == 1) ? line : line + riffs[0] + '\n';
    }

    verses (n, m) {
        let lines = [];
        for (let i = n; i <= m; i ++) {
            lines.push(this.verse(i));
        }
        return lines.join('\n') + '\n';
    }
}

module.exports = FoodChain;

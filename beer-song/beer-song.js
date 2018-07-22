class BeerSong {
    verse (n) {
        let [one_or_it, s] = ['one', 's'];
        let s1 = (n, s) => `${n} bottle${s} of beer on the wall, ${n} bottle${s} of beer.\n`
        let s2 = (one_or_it, n, s) => `Take ${one_or_it} down and pass it around, ${n} bottle${s} of beer on the wall.\n`
        
        if (n > 2) return s1(n, s) + s2(one_or_it, n - 1, s);
        if (n == 2) return s1(n, s) + s2(one_or_it, n - 1, '');
        if (n == 1) return s1(n, '') + s2('it', 'no more', s);
        if (n == 0) {
            s2 = 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
            s1 = s1('no more', s).split(''); 
            s1[0] = 'N';
            return s1.join('') + s2;
        }
    }

    sing (b, a=0) {
        let verses = [];
        for (let i = b; i >= a; i--) {
            verses.push(this.verse(i));
        }
        return verses.join('\n');
    }
}

module.exports = BeerSong;


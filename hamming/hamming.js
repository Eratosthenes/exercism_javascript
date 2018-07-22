class Hamming {

    compute (s1, s2) {
        if (s1.length != s2.length) throw new Error('DNA strands must be of equal length.');
        let count = 0;
        s1.split('').forEach( (c, i) => {if (c != s2[i]) count++} );
        return count;
    }
}

module.exports = Hamming;

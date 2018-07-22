class RLE {

    encode (s) {
        let idxs = [];
        s = s.split('');
        s.forEach((x,i) => {if (x != s[i-1]) idxs.push(i)});

        let r = '';
        for (let x of this.zip(idxs, idxs.slice(1))) {
            let [i, j] = [...x];
            r += String(j - i || s.length - i) + s[i];
        }
        return r.replace(/1([\D])/g, '$1');
    }
    
    zip (a, b) {
        return a.map( (x,i) => [x].concat(b[i]) );
    }

    decode (s) {
        if (s == '') return s;
        let tokens = s.match(/([\d]+)?[\D]/g);

        let ch, num, r = '';
        for (let x of tokens) {
            [num, ch] = x.match(/[\d]+|[\D]/g)
            if (!ch) [num, ch] = [ch, num];
            r += ch.repeat(num || 1);
        }
        return r;
    }
}

r = new RLE();
s = 'AABCCCCD'
e = r.encode(s);
d = r.decode(e);
console.log(s);
console.log(e);
console.log(d);
module.exports = new RLE;

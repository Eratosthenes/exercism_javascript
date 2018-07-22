class RotationalCipher {

    rotate (s, n) {
        let rot = function (c, is_cap) {
            let offset = is_cap ? 'A'.charCodeAt() : 'a'.charCodeAt();
            return String.fromCharCode(offset + (c.charCodeAt() - offset + n) % 26);
        }

        let r = '';
        for (let c of s) {
            if (/[a-z]/.test(c)) {
                r += rot(c, false);
            } 
            else if (/[A-Z]/.test(c)) {
                r += rot(c, true);
            }
            else {
                r += c;
            }
        }
        return r;
    }
}

module.exports = RotationalCipher;

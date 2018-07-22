let primeFactors = {
    isPrime: function (x) {
        for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
            if (x % i == 0) {
                return false;
            }
        }
        return true;
    },

    for: function (n) {
        if (n == 1) return [];
        if (this.isPrime(n)) return [n];
        let pfs = [];
        let rem = n;
        loop:
            for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
                if (rem == 1) break;
                if (rem % i == 0 && this.isPrime(i)) {
                    while (rem % i == 0) {
                        pfs.push(i);
                        rem /= i;
                        if (rem > 1 && this.isPrime(rem)) {
                            pfs.push(rem);
                            break loop;
                        }
                    }
                }
        }
        return pfs;
    }
}

module.exports = primeFactors;

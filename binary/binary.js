Binary = function (s) {
    this.s = s;
}

Binary.prototype.toDecimal = function () {
    if (/[^01]/.test(this.s)) return 0;
    return this.s.split('')
        .reverse()
        .map((x) => Number(x))
        .map((x,i) => x * 2**i)
        .reduce((x,y) => x + y)
}

module.exports = Binary;

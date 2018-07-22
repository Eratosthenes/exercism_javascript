SecretHandShake = function (n) {
    if (typeof n != 'number') throw new Error('Handshake must be a number');
    this.signals = ['wink', 'double blink', 'close your eyes', 'jump']
    this.binary = [];
    while (n > 0) {
        this.binary.push(n % 2);
        n = (n - (n %2)) / 2;
    }
}

SecretHandShake.prototype.commands = function () {
    let r = [];
    for (let i in this.binary) {
        if (this.binary[i] && this.signals[i]) {
            r.push(this.signals[i]);
        }
    }

    return this.binary[4] ? r.reverse() : r;
}

module.exports = SecretHandShake;

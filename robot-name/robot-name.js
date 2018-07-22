var names = new Set(); 

class Robot {

    constructor () {
        this.reset();
    }

    gen_letter () {
        return String.fromCharCode('A'.charCodeAt() + Math.floor(Math.random()*26));
    }

    gen_number () {
        return String(Math.floor(Math.random()*10));
    }

    reset () {
        let letters = Array.from(Array(2), (x) => this.gen_letter());
        let numbers = Array.from(Array(3), (x) => this.gen_number());
        let name = letters.concat(numbers).join('');    

        this.name = names.has(name) ? this.reset() : name;
        names.add(this.name);
        return this.name;            
    }
}

function *range(n) {
    for (let i=0; i<n; i++) {
        yield i;
    }
}

function gen_ids () {
    let lim = 10**2 * 26**3;
    let m = 1757617; // first prime > 10^2 * 26^3
    let x = a = 10000019;
    let r = [x];
    while (true) {
        console.log(x);
        x = (x + a) % m;
        if (x == a) break;
        if (x < 100) r.push(x);
    }
    r.sort((a,b) => a-b);
    return r;
}

module.exports = Robot;


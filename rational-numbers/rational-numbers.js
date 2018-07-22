class Rational {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }

    simplify (r) {
        if (r.a == 0) r.b = 1;

        if (r.b < 0) {
            r.b *= -1;
            r.a *= -1;
        }

        let q;
        let [a, b] = [r.a, r.b];
        while (b > 0) {
            q = Math.abs(a);
            [a, b] = [b, b % a];
        }

        if ((r.a % q == 0) && (r.b % q == 0)) {
            r.a /= q;
            r.b /= q;
        }
        return r;
    }

    add (r) {
        let a = this.a * r.b + r.a * this.b;
        let b = this.b * r.b;
        return this.simplify(new Rational(a, b));
    }

    sub (r) {
        let a = this.a * r.b - r.a * this.b;
        let b = this.b * r.b;
        return this.simplify(new Rational(a, b));
    }

    mul (r) {
        let a = this.a * r.a;
        let b = this.b * r.b;
        return this.simplify(new Rational(a, b));
    }

    div (r) {
        let a = this.a * r.b;
        let b = r.a * this.b;
        return this.simplify(new Rational(a, b));
    }

    abs () {
        let [a, b] = [this.a, this.b];
        if (a < 0) a *= -1;
        return this.simplify(new Rational(a, b));
    }

    exprational (n) {
        let [a, b] = [this.a**n, this.b**n];
        return this.simplify(new Rational(a, b));
    }

    expreal (x) {
        return Math.pow(Math.pow(x, 1/this.b), this.a);
    }

    reduce () {
        return this.simplify(new Rational(this.a, this.b));
    }
}

module.exports = Rational;

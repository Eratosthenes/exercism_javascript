class School {
    constructor () {
        this.school = {};
    }

    // add a name to the school
    add (name, grade) {
        if (this.school[grade]) {
            this.school[grade] = this.school[grade].concat([name]);
        }
        else {
            this.school[grade] = [name];
        }

        // not the greatest way to maintain a real database, but... whateva
        this.school[grade].sort();
    }

    // return students in grade n
    grade (n) {
        return this.school[n] || [];
    }

    // return the school roster        
    roster () {
        return this.school;
    }
}

module.exports = School;

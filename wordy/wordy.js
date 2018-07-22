class WordProblem {

    constructor (question) {
        this.question = question;
        this.d = {
            'plus': '+',
            'minus': '-',
            'multiplied by': '*',
            'divided by': '/'
        }
    }

    answer () {
        let ops = this.question.match(/(plus|minus|multiplied by|divided by)/g);
        let nums = this.question.match(/-?[\d]+/g);
        if (!(ops && nums)) throw new ArgumentError();

        let r = Number(nums.shift()); // first num
        for (let i in nums) {
            r = eval('r' + this.d[ops[i]] + '(' + nums[i] + ')');    
        }
        return r;
    }
}

class ArgumentError extends Error {}
module.exports = {WordProblem, ArgumentError};

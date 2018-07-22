class PhoneNumber {
    constructor (s) {
        this.s = s;
    }

    number () {
        let nums = this.s.match(/[\d]+/g).join(''); 
        if (nums.length < 10) return null;
        if (nums.length > 11) return null;

        if (nums.length == 11) {
            if (nums[0] != '1') return null;
        }
        else if (nums.length == 10) {
            if (/^[01]/.test(nums)) return null;
            if (/^\d{3}[01]/.test(nums)) return null;
        }
        return nums.slice(-10);
    }
}

module.exports = PhoneNumber;

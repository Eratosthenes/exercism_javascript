//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (year) {
    this.year = year;
};

Year.prototype.isLeap = function () {
    if (this.year % 4 != 0 || (this.year % 100 == 0 && this.year % 400 != 0)){
        return false;
    }
    else {
        return true;
    }
};

module.exports = Year;

if (require.main === module) {
    let years = [1997, 1996, 1900, 2000]; // false, true, false, true
    for (let year of years){
        y = new Year(year);
        console.log(y.isLeap());
    }
}

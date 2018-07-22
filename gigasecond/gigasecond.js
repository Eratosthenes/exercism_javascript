Gigasecond = function (dt) {
    this.dt = dt;
}

Gigasecond.prototype.date = function () {
    let expected_date = new Date();
    expected_date.setTime(this.dt.getTime() + 10**12);
    return expected_date;
}

module.exports = Gigasecond;

Matrix = function (s) {
    this.rows = s.split('\n')
        .map((x) => x.split(' ')
            .map((y) => Number(y)));

    this.columns = this.rows[0]
        .map((_, i) => this.rows
            .map(row => row[i]));
}

module.exports = Matrix;

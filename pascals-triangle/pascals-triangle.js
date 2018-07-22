Triangle = function (n) {
    this.rows = [[1]];

    let add = function(x) {
        return (!!x || 0) && x;
    }

    for (let i=1; i<n; i++) {
        this.rows[i] = [];
        for (let j=0; j<i+1; j++) {
            this.rows[i][j] = add(this.rows[i-1][j]) + add(this.rows[i-1][j-1]);
        }
    }

    this.lastRow = this.rows[n-1];
}

module.exports = Triangle;

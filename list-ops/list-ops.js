function List(arr) {
  this.values = arr || [];
}

List.prototype = {
    // return List type
    append: function (list) {
        for (let val of list.values) {
            this.values.push(val);
        }
        return this;
    },

    concat: function (list) {
        return this.append(list);
    },

    // 4/(3/(2/(1/24)))
    foldl: function (f, start) {
        let r = start;
        this.values.forEach( x => { r = f(x, r) } );
        return r;
    },

    // 1/(2/(3/(4/24)))
    foldr: function (f, start) {
        let r = start;
        this.reverse().values.forEach( x => { r = f(x, r) } );
        return r;
    },

    length: function () {
        let count = 0;
        for (let i in this.values) {
            count ++;
        }
        return count || 0;
    },

    reverse: function () {
        let values = [];
        this.values.forEach( x => values.unshift(x) );
        return new List(values);
    },

    map: function (f) {
        let values = [];
        this.values.forEach( x => values.push(f(x)) );
        return new List(values)
    },

    filter: function (f) {
        let values = [];
        this.values.forEach( x => {if (f(x)) values.push(x)} );
        return new List(values);
    }
};

module.exports = List;

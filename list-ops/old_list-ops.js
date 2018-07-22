// not finished, just want to make sure I'm on the right track 
'use strict';

function List (vals) { 
    this.values = vals || [];
};

List.prototype = {
    append: function (list) { 
        for (let val of list.values) {
            this.values.push(val);
        }
        return this;
    },

    concat: function (list) {
        return this.append(list);
    },

    reverse: function () {
        let r = [];
        for (let val of this.values) {
            r.unshift(val);
        }
        this.values = r;
        return this;
    },

    map: function (f) {
        return this;
    },

    foldl: function (f, start) {
        return this;
    },

    foldr: function (f, start) {
        return this;
    },

    filter: function (f) {
        let r = [];
        for (let val of this.values) {
            if (f(val)) r.push(val);
        }
        this.values = r;
        return this;
    },

    length: function () {
        return this.values.length;
    }
};

module.exports = List;


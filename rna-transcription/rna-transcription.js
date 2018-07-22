/**
* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U`
**/

x = function (){}
x.prototype.toRna = function (dna){
    let d = {'G':'C', 'C':'G', 'T':'A', 'A':'U'};
    if (/[^GCTA]/.test(dna)){
        throw new Error('Invalid input');
    }
    return dna.split('').map((x) => d[x]).join('');
};

module.exports = x

// test
//dna = new x();
//dna.toRna('XCTA');


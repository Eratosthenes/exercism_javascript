cipher = function(s){
    this.key = this.key(s);
};

cipher.prototype.key = function(s){
    let key;
    if (s == null){
        let rand_vals = Array.from(Array(100), (x) => Math.floor(Math.random()*26));
        key = this.i_to_s(rand_vals);
    }
    else { 
        if (s == '' || /[^a-z]/.test(s)){
            throw new Error('Bad key');      
        }
        key = s;
    }
    return key;
};

cipher.prototype.s_to_i = function(s){
    return s.split('').map((x) => x.charCodeAt() - 'a'.charCodeAt())
};

cipher.prototype.i_to_s = function(a){
    return a.map((x) => String.fromCharCode(x + 'a'.charCodeAt())).join('');
};

cipher.prototype.process = function(s, dir){
    let s_vals = this.s_to_i(s);
    let key_vals = this.s_to_i(this.key);
    for (let i in s) {
        s_vals[i] = (26 + s_vals[i] + dir * key_vals[i % this.key.length]) % 26       
    }
    return this.i_to_s(s_vals);
};

cipher.prototype.encode = function(s){
    return this.process(s, 1);
};

cipher.prototype.decode = function(s){
    return this.process(s, -1);
};

module.exports = cipher;


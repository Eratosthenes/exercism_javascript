function Bob(s){
    this.hey = function(s){
        s = s.replace(/[^a-zA-Z.!?\d]/g,'');
        console.log(s);
        if (!s){
            return 'Fine. Be that way!';
        }
        if (/[A-Z]?[a-z\d]+.*([?])(?!\w)/.test(s)) { // asking a question
            return 'Sure.';
        }
        if (/[A-Z]?[a-z\d]+(?!.*!)/.test(s)) { // making a statement
            return 'Whatever.';
        }
        if (/[A-Z]+[?]/.test(s)) { // forceful question
            return 'Calm down, I know what I\'m doing!';
        }
        if (/[A-Z]{2,}[!]?/.test(s)) { // shouting with or without exclamation
            return 'Whoa, chill out!';
        }
        if (/[A-Z]?[a-z\d]+!/.test(s)) { // talking forcefully
            return 'Whatever.';
        }
    }
}

module.exports = Bob;


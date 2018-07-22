function Pangram(s){
     this.isPangram = function (){
        if (!s) return false;                 
        return s.match(/([a-z])(?!.*\1)/ig).length == 26;
     }
}
module.exports = Pangram


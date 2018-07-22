class SpaceAge {

    constructor(seconds) {
        this.seconds = seconds;
        this.earthYear = 31557600; // earth year in seconds
        this.periods = {
          Earth : 1,
          Mercury : 0.2408467,
          Venus : 0.61519726,
          Mars : 1.8808158,
          Jupiter : 11.862615,
          Saturn : 29.447498,
          Uranus : 84.016846,
          Neptune : 164.79132
        }

        for (let planet of Object.keys(this.periods)) {
            let years = this.seconds / this.earthYear;
            this['on' + planet] = function() {
                return Number((years / this.periods[planet]).toFixed(2));
            }
        }
    }
}

module.exports = SpaceAge;

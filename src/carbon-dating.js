const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


// module.exports =
module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity) !== String) return false;
    const LNOF2 = 0.693;
    let a = Number(sampleActivity);
    if (a === NaN || a <= 0 || !sampleActivity === true || a > MODERN_ACTIVITY) return false;
    else return Math.ceil(Math.log(MODERN_ACTIVITY / a) / (LNOF2 / HALF_LIFE_PERIOD));
};

// console.log(dateSample('9000'));
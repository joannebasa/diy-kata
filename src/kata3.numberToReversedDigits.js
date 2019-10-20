/* eslint-disable prettier/prettier */
const numberToReversedDigits = number => {
    let value = [number];
    return value.toString().split("").reverse().map((digits) => parseInt(digits));
};
module.exports = numberToReversedDigits;

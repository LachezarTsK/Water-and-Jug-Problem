
/**
 * @param {number} firstJugCapacity
 * @param {number} secondJugCapacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (firstJugCapacity, secondJugCapacity, targetCapacity) {
    if (firstJugCapacity + secondJugCapacity < targetCapacity) {
        return false;
    }
    return targetCapacity % greatesrCommonDivisor(firstJugCapacity, secondJugCapacity) === 0;
};

/**
 * @param {number} firstJugCapacity
 * @param {number} secondJugCapacity
 * @return {number}
 */
function greatesrCommonDivisor(firstJugCapacity, secondJugCapacity) {
    return firstJugCapacity === 0 ?
           secondJugCapacity :
           greatesrCommonDivisor(secondJugCapacity % firstJugCapacity, firstJugCapacity);
}

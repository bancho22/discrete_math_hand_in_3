

/**
 * @param {Array} a - valid set represented as a Javascript array or a predefined infinite set 
 * @param {Array} b - valid set represented as a Javascript array or a predefined infinite set
 * @return {Array} 
 */
export const membership = (a, b) => a.filter(eA => b.indexOf(eA) > -1)


/**
 * Adds two Arrays
 * @param {Array} a - valid set represented as a Javascript array or a predefined infinite set 
 * @param {Array} b - valid set represented as a Javascript array or a predefined infinite set
 * @return {Array} sum
 */
export const intersection = (a, b) => a.filter(eA => b.indexOf(eA) > -1)


/**
 * Adds two Arrays
 * @param {Array} a - valid set represented as a Javascript array or a predefined infinite set 
 * @param {Array} b - valid set represented as a Javascript array or a predefined infinite set
 * @return {Array} sum
 */
export const union = (a, b) => a.filter(eA => b.indexOf(eA) === -1).concat(b.filter(eB => eB))


/**
 * Adds two Arrays
 * @param {Array} a - valid set represented as a Javascript array or a predefined infinite set 
 * @param {Array} b - valid set represented as a Javascript array or a predefined infinite set
 * @return {Array} sum
 */
export const difference = (a, b) => a.filter(eA => b.indexOf(eA) === -1)


/**
 * Adds two Arrays
 * @param {Array} a - valid set represented as a Javascript array or a predefined infinite set 
 * @param {Array} b - valid set represented as a Javascript array or a predefined infinite set
 * @return {Array} sum
 */
export const complement = (a, u) => u.filter(eU => a.indexOf(eU) === -1)


/**
 * Adds two Arrays
 * @param {Array} a - valid set represented as a Javascript array or a predefined infinite set 
 * @param {Array} b - valid set represented as a Javascript array or a predefined infinite set
 * @return {Array} sum
 */
export const compareSets = (a, b) => {
    if(a.every(eA => b.indexOf(eA) > -1) && b.every(eB => a.indexOf(eB) > -1)) return 0
    if(b.every(eB => a.indexOf(eB) > -1)) return 1
    if(a.every(eA => b.indexOf(eA) > -1)) return -1
    return -2
}

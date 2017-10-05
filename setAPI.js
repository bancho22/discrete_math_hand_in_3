
// as defined for all functions but compareSets()

/**
 * @param {Array} a - valid set represented as a Javascript array
 * @param {Array} b - valid set represented as a Javascript array
 * @return {Array} result as a Javascript array
 */

export const membership = (a, b) => a.filter(eA => b.indexOf(eA) > -1)

export const intersection = (a, b) => a.filter(eA => b.indexOf(eA) > -1)

export const union = (a, b) => a.filter(eA => b.indexOf(eA) === -1).concat(b.filter(eB => eB))

export const difference = (a, b) => a.filter(eA => b.indexOf(eA) === -1)

export const complement = (a, u) => u.filter(eU => a.indexOf(eU) === -1)


/**
 * @param {Array} a - valid set represented as a Javascript array
 * @param {Array} b - valid set represented as a Javascript array
 * @return {Integer} res: 
 * A ⊂ B = -1
 * A = B = 0
 * A ⊃ B = 1
 * otherwise -2
 */

export const compareSets = (a, b) => {
    if(a.every(eA => b.indexOf(eA) > -1) && b.every(eB => a.indexOf(eB) > -1)) return 0
    if(b.every(eB => a.indexOf(eB) > -1)) return 1
    if(a.every(eA => b.indexOf(eA) > -1)) return -1
    return -2
}

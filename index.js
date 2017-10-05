import {
    membership,
    intersection,
    union,
    difference,
    complement,
    compareSets
} from './setAPI'


// test


const a = [0, 1, 2, 3]
const b = [2, 3, 4, 5]

const membershipRes = membership(a, b)
const intersectionRes = intersection(a, b)
const unionRes = union(a, b)
const differenceRes = difference(a, b)
const complementRes = complement(a, b)
const compareSetsRes = compareSets(a, b)

console.log('membershipRes', membershipRes)

console.log('intersectionRes', intersectionRes)

console.log('unionRes', unionRes)

console.log('differenceRes', differenceRes)

console.log('complementRes', complementRes)

console.log('compareSetsRes', compareSetsRes)

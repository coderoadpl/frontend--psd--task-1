const names = ['Ala', 'Ola', 'Ela']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const checkIfArrayIncludes = function (array, needle) {

    for (let i = 0; i < array.length; i++) {
        const item = array[i]

        if (needle === item) return true
    }

    return false

}

console.log(checkIfArrayIncludes(names, 'Ala')) // true
console.log(checkIfArrayIncludes(names, 'Iza')) // false
console.log(checkIfArrayIncludes(numbers, 8)) // true
console.log(checkIfArrayIncludes(numbers, 18)) // false


console.log(names.indexOf('Ala') !== -1) // true
console.log(names.indexOf('Iza') !== -1) // false
console.log(numbers.indexOf(8) !== -1) // true
console.log(numbers.indexOf(18) !== -1) // false

console.log(names.includes('Ala')) // true
console.log(names.includes('Iza')) // false
console.log(numbers.includes(8)) // true
console.log(numbers.includes(18)) // false
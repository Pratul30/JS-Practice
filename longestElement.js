function longestElementReg(arr) {
    let maxLen = arr[0].length
    let eleIndex
    arr.forEach(val => {
        maxLen<val.length ? (maxLen = val.length , eleIndex = arr.indexOf(val) ): null
    })
    return arr[eleIndex]
}

const longestElementArrow = arr => {
    let maxLen = arr[0].length
    let eleIndex
    arr.forEach(val => {
        maxLen<val.length ? (maxLen = val.length , eleIndex = arr.indexOf(val) ): null
    })
    return arr[eleIndex]
}

module.exports = {longestElementReg,longestElementArrow}
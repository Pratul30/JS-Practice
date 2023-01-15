function concatStringReg(arr) {
    let newStr
    newStr = arr[0].slice(1) + arr[1].slice(1)
    return newStr
}

const concatStringArrow = arr => {
    let newStr
    newStr = arr[0].slice(1) + arr[1].slice(1)
    return newStr
}

module.exports = {
    concatStringReg, concatStringArrow
}
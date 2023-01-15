function isLeapYearReg(year) {
    let res
    res = year%4===0 && year%100!==0 ? true : year%400===0 ? true : false
    return res
}

const isLeapYearArrow = year => {
    let res
    res = year%4===0 && year%100!==0 ? true : year%400===0 ? true : false
    return res
}

module.exports = {
    isLeapYearArrow, isLeapYearReg
}
const funObj = require('./leapYear')

test('Check whether given year is leap year or not',()=>{
    expect(funObj.isLeapYearReg(2000)).toBe(true)
})

test('Check whether given year is leap year or not',()=>{
    expect(funObj.isLeapYearArrow(2003)).toBe(false)
}) 
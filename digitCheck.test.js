const funObj = require('./digitCheck')

test('Check for regular function', ()=>{
    expect(funObj.isDigitSameReg(22)).toBe(true)
})

test('Check for arrow function', ()=>{
    expect(funObj.isDigitSameArrow(23)).toBe(false)
})
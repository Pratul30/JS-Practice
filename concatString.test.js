const funObj = require('./concatString')

test('concat both elements of array without first letter', ()=>{
    expect(funObj.concatStringReg(["code", "academy"])).toBe("odecademy")
})


test('concat both elements of array without first letter', ()=>{
    expect(funObj.concatStringArrow(["Pratul", "Bhargava"])).toBe("ratulhargava")
})
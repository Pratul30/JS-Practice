const funObj = require('./reverseCase')

test('Test letter reversing using regular function', () => {
    expect(funObj.changeCaseReg('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP')
})

test('Test letter reversing using arrow function', () => {
    expect(funObj.changeCaseArrow('Hello my Name Is pRATUL')).toBe('hELLO MY nAME iS Pratul')
})
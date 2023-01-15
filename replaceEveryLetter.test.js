const funObj = require('./replaceEveryLetter')

test('properly replace every letter', () => {
    expect(funObj.replaceFollowingReg("codeacademy")).toBe("dpefbdbefnz")
})

test('properly replace every letter', () => {
    expect(funObj.replaceFollowingArrow("lazyinterns")).toBe("mbazjoufsot")
})
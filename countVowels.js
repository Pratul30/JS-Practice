function countVowelsReg(str){
    let vowels = ['a','e','i','o','u']
    let vowelCount = 0
    let lowerStr = str.toLowerCase()
    for(let char of lowerStr){
        vowelCount = vowels.includes(char) ? vowelCount + 1 : vowelCount 
    }
    return vowelCount
}

const countVowelsArrow = str => {
    let vowels = ['a','e','i','o','u']
    let vowelCount = 0
    let lowerStr = str.toLowerCase()
    for(let char of lowerStr){
        vowelCount = vowels.includes(char) ? vowelCount + 1 : vowelCount 
    }
    return vowelCount
}


module.exports = {
    countVowelsReg,countVowelsArrow
}

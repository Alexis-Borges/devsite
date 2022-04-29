{
    console.clear()
    const codeUpperA = 65
    const codeUpperZ = 90
    const codeLowerA = 97
    const codeLowerZ = 122
    const isUpper = (code) => code >= codeUpperA && code <= codeUpperZ
    const isLower = (code) => code >= codeLowerA && code <= codeLowerZ 
    const rotX = (str, rotation) => {
      let result = ''
      for (let i = 0; i < str.length; i += 1) {
        const code = str.charCodeAt(i) 
        const isUpperCase = isUpper(code)
       
        if (!isUpperCase && !isLower(code)) {
          result += str[i]
          continue;
        }
        
        const base = isUpperCase ? codeUpperA : codeLowerA
        const rotCode = (code - base + rotation) % 26
        result += String.fromCharCode(rotCode + base)
      }
      return result
    }
    const result = rotX("abcA - 123 - BCxyzXYZ", 13)
    console.log(result, "nopN - 123 - OPklmKLM", result === 'nopN - 123 - OPklmKLM')
  }
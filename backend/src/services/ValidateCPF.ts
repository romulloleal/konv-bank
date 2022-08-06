export const ValidateCPF = async (cpf: string) => {

  // verify cpf has only digits
  if(!/^[0-9]+$/.test(cpf)) return false

  const invalids = ['00000000000', '11111111111', '22222222222', '33333333333',
                    '44444444444', '55555555555', '66666666666', '77777777777',
                    '88888888888', '99999999999']

  // verify cpf has invalid sequence
  if(invalids.includes(cpf)) return false

  // verify cpf length
  if(cpf.length <= 10 || cpf.length >= 12) return false

  if(parseInt(cpf[9]) !== verifyFirstNumber(cpf)) return false

  if(parseInt(cpf[10]) !== verifySecondNumber(cpf)) return false

  return true

}

const verifyFirstNumber = (cpf: string) => {
    let firstDigit = 0
    for(let i = 0; i <= 8; i++){
        firstDigit += parseInt(cpf[i]) * (10 - i)
    }
    let result = 11 - (firstDigit % 11)
    return result <= 9 ? result : 0
}

const verifySecondNumber = (cpf: string) => {
    let secondDigit = 0
    for(let i = 0; i <= 9; i++){
        secondDigit += parseInt(cpf[i]) * (11 - i)
    }
    let result = 11 - (secondDigit % 11)
    return result <= 9 ? result : 0
}

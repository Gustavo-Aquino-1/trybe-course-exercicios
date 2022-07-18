const sum = require('./sum')

describe('Testando a função sum ' ,() => {
    it('Teste se o retorno de sum(4, 5) é 9',()=> {
        expect(sum(4,5)).toBe(9)
    })

    it('Verifique se 0 + 0 é igual a 0 ',() => {
        expect(sum(0,0)).toBe(0)
    })

    it('Verifica se lança um erro ao somar uma string',() => {
        expect(() => sum(4,"5")).toThrow() //quando queremos pegar um erro a funçao dentor do expect deve ser chamada atraves de uma arrow function , se nao ela nao capturara o erro!!
    })

    it('Teste se amensagem : "parameters must be numbers"   é emitida na chamada sum(4,"5"', () => {
        expect(() => sum(4,"5")).toThrowError(new Error("parameters must be numbers" ))
    })
})
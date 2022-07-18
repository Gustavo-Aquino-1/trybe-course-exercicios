const {searchEmployee,professionalBoard} = require('./bonus')

describe('Testando a função serachEmployee',() => {
    it('searchEmplyee é uma função',() => {
        expect(typeof searchEmployee).toBe('function') 
    })

    it('Retorna um erro caso o ID esteja errado',() => {
        expect(() => searchEmployee('8579-67','lastName')).toThrowError(new Error('ID não identificada'))
    })

    it('Retorna a mesngame informação indisponivel caso nao ache o detail',() => {
        expect(() => searchEmployee('8579-6','age')).toThrowError(new Error('Informação indisponível'))
    })

    it('Retorna a mensagem se a chamada estiver correta',() => {
        expect(searchEmployee('8579-6','lastName')).toEqual('Gates')
    })
})
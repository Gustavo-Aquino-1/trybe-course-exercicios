const encode = (string) => {
    let newString = '';
    for(let letter of string){
        if(letter === 'a'){
            letter = 1
        }
        else if(letter === 'e'){
            letter = 2
        }
        else if(letter === 'i'){
            letter = 3
        }
        else if(letter === 'o'){
            letter = 4
        }
        else if(letter === 'u'){
            letter = 5
        }
        newString += letter
    }
    return newString
}

const decode = (string) => {
    let newString = '';
    for(let letter of string){
        if(letter === '1'){
            letter = 'a'
        }
        else if(letter === '2'){
            letter = 'e'
        }
        else if(letter === '3'){
            letter = 'i'
        }
        else if(letter === '4'){
            letter = 'o'
        }
        else if(letter === '5'){
            letter = 'u'
        }
        newString += letter
    }
    return newString
}


describe('Testando as funçoes encode e decode',() => {
    it('Encode e Decode são funcçoes ? ',() => {
        expect(typeof decode + typeof encode).toBe('functionfunction')
    })

    it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente; ',() => {
        expect(encode('aeiou')).toEqual('12345')
    })

    it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente; ',() => {
        expect(decode('12345')).toEqual('aeiou')
    })

    it('Teste se as demais letras/números não são convertidos para cada caso; ',() => {
        expect(decode('1w2d9k')).toEqual('awed9k')
    })

    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro. ', () => {
        let stringTest = '3469u'
        expect(decode(stringTest)).toHaveLength(stringTest.length)
    })
})

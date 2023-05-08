export class Contato {
    constructor(nome, email, telefone){
        this.nome = nome,
        this.email = email,
        this.telefone = telefone
    }
}

export const getContatos = () => {
    return dbContatos
}

export const dbContatos = [
    new Contato('Wesley Isney De Jesus Reis', 'WesleyIsney@gmail.com', '(19) 98712-5415'),
    new Contato('Fabricio', 'Fabricio@gmail.com', '(19) 98712-5415'),
    new Contato('Eduardo Filme Dos Santos', 'Carlao@gmail.com', '(19) 98712-5415')
]



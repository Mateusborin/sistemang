export class Produto {

    constructor(key: Number, nome: String, preco: any, data: number, descricao: any) {
        this.key = key;
        this.nome = nome;
        this.preco = preco;
        this.data = data;
        this.descricao = descricao

    }

    key: Number;
    nome: String;
    preco:number;
    data:number;
    descricao:any
}
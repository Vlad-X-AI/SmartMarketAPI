'use strict'
const Mongoose = require('mongoose')
const Contato = Mongoose.model('Contato')

        // let Contato1 = new Contato(0, "Jose da silva", "tecnico", "Alterar bla bla", "24/09/19")
        // let Contato2 = new Contato(1, "Marcos", "tecnico", "Alterar bla bla", "24/09/19")
        // let Contato3 = new Contato(2, "João", "tecnico", "Alterar bla bla", "24/09/19")

let contatos = []
let cont = 3

class ContatoController {

    static async buscarTodos(req, res) {
        
        try {
            res.json(await Contato.find({}))
        } catch (error) {
            res.status(500).send('Erro ao buscar contatos: ${error}')
        }
    }

    static async adicionar(req, res) {
        
        try {
            let contatoNovo= req.body
            res.json(await Convidado.create(contatoNovo))
        } catch (error) {
            res.status(500).send('Erro ao salvar convidado: &{error}')
        }
    }

    // editar(req, res) {
    //     let id = req.body.id
    //     let erro = true

    //     for (let i = 0; i < contatos.length; i++) {
    //         if (contatos[i].id == id) {
    //             contatos[i] = req.body
    //             erro = false
    //         }
    //     }
    //     if (erro) {
    //         res.status(500).send("Erro ao editar contato!")
    //     } else {
    //         res.status(200).send("Contato editado com sucesso!")
    //     }
    // }

    // deletar(req, res) {
    //     let id = req.params.id
    //     let erro = true
    //     let posicao = null

    //     for (let i = 0; i < contatos.length; i++) {
    //         if (contatos[i].id == id) {
    //             posicao = i
    //             erro = false
    //         }
    //     }
    //     if (erro) {
    //         res.status(500).send("Erro ao remover convidado!")
    //     } else {

    //         res.status(200).send(contatos.splice(posicao, 1))
    //     }
    // }

}

module.exports = ContatoController
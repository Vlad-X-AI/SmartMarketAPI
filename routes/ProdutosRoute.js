const ProdutoController = require('./../controller/ProdutoController')

class ProdutoRoute {

<<<<<<< HEAD
  constructor(app) {

    let produto1 = new Produto(0, true, 'TV 43 Polegadas', 2300, 200, 'SAMSUNG', 'Eletronicos', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQpt_h9iBMsPp6XV2w3SwuT-h8kjttx_qWuRrLF3aokG07fKzvoMmmlzc9UUxZpKwwg4KdsGVC_XZdkcUJ-SsYCnzMZtXAngCC9XxeiyB7vzaR_ImPmqOG&usqp=CAc')
    let produto2 = new Produto(1, true, 'Latinha 350ml de Coca-cola', 3.5, 100, 'COCA', 'Bebidas', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUV4mrvYK_5-z4G2s2iZ4l1Bv41fw7Z0-dV48lmjTlg1p8wyI')

    this.produtos = [produto1, produto2]
    this.cont = 2


    app.get('/produtos', (req, res) => {
      res.json(this.produtos);
    })

    app.post('/produtos', (req, res) => {
      let novo = req.body;
      novo.id = this.cont;
      this.cont++
      this.produtos.push(novo);
      res.json(novo);
    })

    app.put('/produtos', (req, res) => {
      let id = req.body.id;
      let erro = true

      for (let i = 0; i < this.produtos.length; i++) {
        if (this.produtos[i].id == id) {
          this.produtos[i] = req.body;
          erro = false
        }
      }

      if (erro) {
        res.status(500).send('Erro ao editar produto')
      } else {
        res.status(200).send('Produto editado com sucesso')
      }
    })
    app.delete('/produtos', (req, res) => {
      res.send("Requisição DELETE para /produtos")
    })

  }
=======
    constructor(app){


      let produto1 = new Produto(0, true, 'TV 43 Polegadas', 2300, 49, 'SAMSUNG', 'Eletronicos', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQpt_h9iBMsPp6XV2w3SwuT-h8kjttx_qWuRrLF3aokG07fKzvoMmmlzc9UUxZpKwwg4KdsGVC_XZdkcUJ-SsYCnzMZtXAngCC9XxeiyB7vzaR_ImPmqOG&usqp=CAc', '12/31/2099')
      let produto2 = new Produto(1, true, 'Latinha 350ml de Coca-cola', 3.5, 49, 'COCA', 'Bebidas', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUV4mrvYK_5-z4G2s2iZ4l1Bv41fw7Z0-dV48lmjTlg1p8wyI', '09/30/2019')

      let produto = new ProdutoController()

      app.route('/produtos')
        .get(produto.buscar)
        .post(produto.salvar)
        .put(produto.editar)

    }
>>>>>>> 8f36a11fdb5700b434411a0fda15f9a47533dcc2
}

module.exports = ProdutoRoute
//index,show,store,update,destroy
const Endereco = require('../Model/Endereco')


//faz a requisição do request
const request = require('request');



module.exports = {
  //index traz todos os registros pelo método GET
  async index(req,res){
    let Enderecos = await Endereco.find();
    return res.json(Enderecos);
  },
  //show traz um registro onde o id do registro é igual ao id passado na URL
  async show(req, res){
    let Endereco = await Endereco.findOne({_id : req.params.id});
    return res.json(Endereco);
    
  },
  //Store usa o metodo POST para gravar
  async store(req, res){
      request('http://viacep.com.br/ws/'+ req.body.cep +'/json/', async function (error, response, body) {
        console.log('error:', error); // Print o erro que ocorreu
        console.log('statusCode:', response && response.statusCode); // Imprima o código de status da resposta se uma resposta foi recebida
        
        //Json vem como String simples// Json vem como texto puro
        console.log('body:', body); // imprime o Json recebido
    
        //Transforma o Json de texto puro para um Objeto
        //Assim a gente pode usar data.logradouro
        var data = JSON.parse(body)

        const cep = data.cep;
        const logradouro  = data.logradouro;
        const complemento = data.complemento;
        const bairro = data.bairro;
        const localidade = data.localidade;
        const uf = data.uf;
        const ibge = data.ibge;
        let {user_id} = req.headers;
        let aux = await Endereco.create({cep, logradouro, complemento, bairro, localidade, uf, ibge, user_id});
        return res.json(aux); 
              
      });
  },
  
    
  async update(req, res){

    let endereco = await Endereco.findOne({id:req.params.id});

    endereco.logradoduro = req.body.logradouro;
    endereco.complemento = req.body.complemento;
    endereco.bairro = req.body.bairro;
    endereco.localidade = req.body.localidade;
    endereco.uf = req.body.uf;
    endereco.ibge = req.body.ibge;
    ret = await Endereco.updateOne(endereco);
    return res.json(ret);
  },
  async destroy(req, res){
    let Endereco = await Endereco.destroyOne({_id : req.params.id});
    return res.json(Endereco);
   
  }
};
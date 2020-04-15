//index,show,store,update,destroy
const Modelo = require('../Model/Modelo')


module.exports = {
  //index traz todos os registros pelo método GET
  async index(req,res){
    let modelo = await Modelo.find();
    return res.json(modelo);
  },
  //show traz um registro onde o id do registro é igual ao id passado na URL
  async show(req, res){
    let modelo = await Modelo.findOne({_id : req.params.id});
    return res.json(modelo);
    
  },
  //Store usa o metodo POST para gravar
  async store(req, res){

    const nome = req.body.nome;
    
    
    
    let modelo = await  Modelo.create({nome})
    
    
    
    return res.json(modelo)
  },
  async update(req, res){

    let modelo = await Modelo.findOne({id:req.param.id});
    
    modelo.nome = "";
    
    modelo = await Modelo.updateOne(modelo);
    return res.json(modelo);
  },
  async destroy(req, res){
    let modelo = await Modelo.destroyOne({_id : req.params.id});
    return res.json(modelo);
   
  }
};
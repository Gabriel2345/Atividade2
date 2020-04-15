//index,show,store,update,destroy
const Marca = require('../Model/Marca');


module.exports = {
  //index traz todos os registros pelo método GET
  async index(req,res){
    let marca = await Marca.find();
    return res.json(marca);
  },
  //show traz um registro onde o id do registro é igual ao id passado na URL
  async show(req, res){
    let marca = await Marca.findOne({_id : req.params.id});
    return res.json(marca);
    
  },
  //Store usa o metodo POST para gravar
  async store(req, res){

    const nome = req.body.nome;
    const thumb = req.file.filename;
    
    let marca = await  Marca.create({nome, thumb})
        
    return res.json(marca)
  },
  async update(req, res){

    let marca = await Marca.findOne({id:req.param.id});
    
    marca.nome = req.body.nome;
    marca.thumb = req.file.filename;
    
    marca = await Marca.updateOne(marca);
    return res.json(marca);
  },
  async destroy(req, res){
    let marca = await Marca.destroyOne({_id : req.params.id});
    return res.json(marca);
   
  }
};
//index,show,store,update,destroy
const User = require('../Model/User')


module.exports = {
  //index traz todos os registros pelo método GET
  async index(req,res){
    let users = await User.find();
    return res.json(users);
  },
  //show traz um registro onde o id do registro é igual ao id passado na URL
  async show(req, res){
    let user = await User.findOne({_id : req.params.id});
    return res.json(user);
    
  },
  //Store usa o metodo POST para gravar
  async store(req, res){

    console.log(req.file);

    const nome = req.body.nome;
    const email = req.body.email;
    const senha  = req.body.senha;
    const status = req.body.status;
    const idade = req.body.idade;
    const thumb = req.file.filename;

    let user = await User.findOne({email});
    if(!user){
      user = await  User.create({nome, senha, email, status, idade, thumb})
      return res.json(user);
    }else{
      return res.status(400).json({error:"Usuário já cadastrado"});
    }
  },
  async update(req, res){

    let user = await User.findOne({id:req.param.id});
    
    user.nome = req.body.nome;
    user.email = req.body.email;
    user.senha = req.body.senha;
    user.status = req.body.status;
    user.idade = req.body.idade;
    user.thumb = req.file.filename;
    
    user = await User.updateOne(user);
    return res.json(user);
  },
  async destroy(req, res){
    let user = await User.deleteOne({_id : req.params.id});
    return res.json(user);
   
  }
};
//Vendor
const express = require('express');
const multer  = require('multer');

//Solicitação dos nossos arquivos do MVC e Config
const UploadConfig       = require('./config/upload');
const UserController     = require('./Controller/User');
const MarcaController    = require('./Controller/Marca');
const ModeloController   = require('./Controller/Modelo');
const VeiculoController  = require('./Controller/Veiculo');
const EnderecoController = require('./Controller/Endereco');

const routes = express.Router();
const upload = multer(UploadConfig);

//Index =Listagem 
//Show = Visualizar os dados gravados
//Store = Gravar
//Destroy = Delete
//este exemplo é o mesmo da segundo exemplo só que simpificado
//app.get('/', (req, res) => res.send('Hello World!'));

//este exemplo completo de uma reuqisição simples
routes.get('/',function(req, res){
    res.send("Hello world");
})

//Get => Buscar info -- Select para listagem de infos
//req.query = acessar a query ou params (filtros)
//localhost:3000/?idade=37&sexo=M
routes.get('/users',UserController.index);
routes.get('/marca',MarcaController.index);
routes.get('/modelo',ModeloController.index);
routes.get('/veiculo',VeiculoController.index);
routes.get('/endereco', EnderecoController.index);

//este exemplo de get onde traz um usuario com base no id passado
routes.get('/users/:id', UserController.show);
routes.get('/marca/:id', MarcaController.show);
routes.get('/modelo/:id', ModeloController.show);
routes.get('/veiculo/:id', VeiculoController.show);
routes.get('/endereco/:id', EnderecoController.show);



//Methodo POST // Create -- Gravação
//Formulario de login e senha  por exemplo
// vai enviar o login e a senha no corpo da requisição
routes.post('/users',    upload.single('thumb'), UserController.store);
routes.post('/marca',    upload.single('thumb'), MarcaController.store);
routes.post('/modelo',   ModeloController.store);
routes.post('/veiculo',  upload.single('thumb'), VeiculoController.store);
routes.post('/endereco', EnderecoController.store);
//Mehodo PUT é usado para fazer o update para atualizar os dados do banco de dados
// localhost:3000/users/5
routes.put('/users/:id', upload.single("thumb"), UserController.update);
routes.put('/marca/:id', upload.single("thumb"), MarcaController.update);
routes.put('/modelo/:id', ModeloController.update);
routes.put('/veiculo/:id', upload.single("thumb"), VeiculoController.update);
routes.put('/endereco/:id', EnderecoController.update);

//Methodo Delete - Serve para deletar um registro
routes.delete('/users/:id',UserController.destroy);
routes.delete('/marca/:id',MarcaController.destroy);
routes.delete('/modelo/:id',ModeloController.destroy);
routes.delete('/veiculo/:id',VeiculoController.destroy);
routes.delete('/endereco/:id',EnderecoController.destroy);
module.exports = routes;
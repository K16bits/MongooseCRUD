const Usuarios = require('../models/Usuario');
const { use, copy } = require('../routes');

module.exports = {
    async create(req,res){
        const data =  req.body;
        
        try{
            const resposta = await new Usuarios(data).save()
            res.send(resposta)
        }catch(e){
            console.log(e)
        }
    },
    async read(req,res){
        await Usuarios.find().then( usuario =>{ 
            console.log(usuario)
            },
            res.status(200).json({status:'tudo certo'})
        ).catch( erro =>{ 
        console.log(erro)},
        res.status(400).json({status:'tudo errado'})
         )
    
    },
    async updade(req,res){
        const id = req.params
        const nome = req.body
        //console.log(nome,novoNome)

        await Usuarios.findByIdAndUpdate(id,nome,{
            new : true
        }).then(

            res.status(200).json({status:"update de bom"})
        ).catch( erro =>{
            res.status(400).json({status:"falha"}),
            console.log(erro)
        } )
        res.json(nome)
    },

    async delete(req,res){
        const _id = req.params
        console.log(_id)
        try{
            await Usuarios.findByIdAndDelete(_id);
            res.status(204).json({status:'sucesso'})
        }catch(e){
            res.status(404).json({status:"deu ruim"})
            console.log(e)
        }
    },

}
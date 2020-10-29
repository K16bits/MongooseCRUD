const mongoose = require('../Data/baseconfig')

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type:String,
        required: true
    },
    idade:{
        type:Number,
        required: true
    },
    cidade:{
        type:String,
        required: true
    },
    data:{
        type: Date,
        default: Date.now()
    },
})

const Usuario = mongoose.model("usuarios",UsuarioSchema)
module.exports = Usuario
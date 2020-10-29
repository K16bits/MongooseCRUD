const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/data', {useNewUrlParser: true}).then(
    ()=>{ console.log("Connectado com Mongodb(¬_¬ )")
    }).catch( (erro)=>{
        console.log("Erro ao se conectar "+erro)
    } )

mongoose.Promise = global.Promise

module.exports = mongoose;

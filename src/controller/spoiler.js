const Spoiler = require("../model/spoiler");

exports.buscarUm = (request, response, next) => {
    const id = request.params.id;
    
    Spoiler.findById(id)
       .then(spoiler => {
           if (spoiler){

           }
       })
}



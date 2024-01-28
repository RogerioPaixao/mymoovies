const { param } = require("../router/moovies");

const categoryController = {

    findAll(req, res){
        /**
         * Aqui emtraria a regra de persistencia do BD
         */
        res.json([
            { id:"01", 
            nome:"Filmes A",
             descripition:"Filmes com a Letra A"
        },
        { id:"02", 
        nome:"Filmes B",
         descripition:"Filmes com a Letra B"
    }])
    },

    find(req, res){
       const {id} = req.params;
       /**
         * Aqui emtraria a regra de persistencia do BD
         */
        res.json({ id:id, 
                   nome:"Filmes A",
                   descripition:"Filmes com a Letra A"
         },
      )
    },
    create(req, res){
        const {name, descripition} = req.body;
        /**
         * Aqui emtraria a regra de persistencia do BD
         */
        res.json({ id:Number.MAX_SAFE_INTEGER, 
            nome:name,
            descripition:descripition,
        });
    },
        
    delite(req, res){
        const {id} = req.body;
        /**
         * Aqui emtraria a regra de persistencia do BD
         */
        res.status(204).json();
    },

}

module.exports = categoryController
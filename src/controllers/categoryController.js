
const db = require("../bd");

const categoryController = {

    async findAll(req, res) {
       try {

        const category = await db.query('SELECT * FROM teste');
        res.json(category.rows);

       } catch (error) {
        res.status(500).json({error: error.mensagem});
        
       }
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
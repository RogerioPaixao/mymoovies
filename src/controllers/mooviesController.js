 const mooviesController = {

    findAll(req, res){
        /**
         * Aqui emtraria a regra de persistencia do BD
         */
        res.json([
            { id:"1", 
            title:"Homem Aranha",
             descripition:"Filme baseado em história em quadrinhos",
             category_id: 1,
             realease_dade:"01/01/2024"
        },

        { id:"2", 
        title:"Homem de Ferro",
         descripition:"Filme da Marvel",
         category_id: 2,
         realease_dade:"10/01/2024"
    }])
    },

    find(req, res){
       const {id} = req.params;
       /**
         * Aqui emtraria a regra de persistencia do BD
         */
        res.json({ id:id, 
            title:"Homem Aranha",
            descripition:"Filme baseado em história em quadrinhos",
            category_id: 1,
            realease_dade:"01/01/2024"
         },
      )
    },
    create(req, res){
        const {title, descripition, category_id, realease_dade} = req.body;
        /**
         * Aqui emtraria a regra de persistencia do BD
         */
        res.json({ id:Number.MAX_SAFE_INTEGER, 
             title,
             descripition,
             category_id,
             realease_dade
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


 module.exports = mooviesController;
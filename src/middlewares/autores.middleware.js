const AutoresModel = require('../models/autores.model')

const validateAuthor = async (req, res, next)=>{
     const { authorId } = req.params;
     try{
        const [author] = await AutoresModel.selectAuthorById(authorId)
         if(!author.length){
            return res.json({
                fatal: 'Autor no encontrado'
            })
        }
         next();
     }catch(error){
        res.json({
            fatal: error.message
        })
    }
}

module.exports = { validateAuthor }
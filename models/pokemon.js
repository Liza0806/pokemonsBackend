const { Schema, model, version } = require('mongoose')
 const { handleMongooseError } = require('../helpers')
const Joi = require("joi")

const addSchema = Joi.object({
    favorite: Joi.boolean(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
  })
  
//   const updateFavoriteSchema = Joi.object ({
//     favorite: Joi.boolean().required(),
//   })
const schemas = {
    addSchema,
}

const pokemonSchema = new Schema({   
url: {
    type: String,
    required: true
},
urlImg: {
    type: String,
    required: true
},
name: {
    type: String,
    required: true
},
favorite: {
    type: Boolean,
    default: false,
    required: true
},
}, {versionKey: false, timestamps: true})

 pokemonSchema.post("save", handleMongooseError)
const Pokemon = model("allpokemon", pokemonSchema)

module.exports = {
    Pokemon,
    schemas,
}

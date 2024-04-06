const { Schema, model } = require('mongoose')

const pokemonSchema = new Schema({   
url: String,
urlImg: String,
name: String,
})

const Pokemon = model("allpokemon", pokemonSchema)

module.exports = Pokemon
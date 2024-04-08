const express = require('express')
const router = express.Router()
const {isValidId, validateBody }= require('../middlewares')
const { schemas } = require('../models/pokemon')

const ctrl = require('../controllers/pokemons')


router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.put('/:id', isValidId, validateBody(schemas.addSchema), ctrl.updatePokemonById)
router.patch('/:id', isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.startToLoveThisPokemon)



module.exports = router
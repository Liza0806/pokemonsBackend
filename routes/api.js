const express = require('express')
const router = express.Router()
const isValidId = require('../middlewares/isValidId')
const ctrl = require('../controllers/pokemons')


router.get('/', ctrl.getAll)
router.put('/:id', isValidId, ctrl.updatePokemonById)



module.exports = router
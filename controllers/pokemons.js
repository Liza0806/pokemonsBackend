const Pokemon = require('../models/pokemon')
const { HttpError, ctrlWrapper } = require('../helpers')

const getAll = async (req, res) => {
    const result = await Pokemon.find();
    res.json(result)

}


module.exports = {
    getAll: ctrlWrapper(getAll),
}
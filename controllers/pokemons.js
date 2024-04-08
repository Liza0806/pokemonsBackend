const { Pokemon } = require("../models/pokemon");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Pokemon.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Pokemon.findOne({ _id: id })
  if (!result) {
    throw HttpError(404, "not found");
  }
  res.json(result);
};

const addPokemon = async (req, res) => {

        const result = await Pokemon.add(req.body);
    
        res.status(201).json(result);
    
}

const updatePokemonById = async (req, res) => {
    const { id } = req.params;
  const result = await Pokemon.findByIdAndUpdate(id, req.body, {new: true}); //{new: true} - чтобы возвращал новую версию
  if (!result) {
    throw HttpError(404, "not found");
  }

  res.json(result);
};
const startToLoveThisPokemon = async (req, res) => {
    const { id } = req.params;
  const result = await Pokemon.findByIdAndUpdate(id, req.body, {new: true}); //{new: true} - чтобы возвращал новую версию
  if (!result) {
    throw HttpError(404, "not found");
  }

  res.json(result);
};

const removePokemon = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndDelete(id)
    if (!result) {
        throw HttpError(404, "not found");
      }
    
      res.json({message: 'Delete success'});
}


module.exports = {
  getAll: ctrlWrapper(getAll),
  updatePokemonById: ctrlWrapper(updatePokemonById),
  getById: ctrlWrapper(getById),
  startToLoveThisPokemon: ctrlWrapper(startToLoveThisPokemon),
  removePokemon: ctrlWrapper(removePokemon),
};

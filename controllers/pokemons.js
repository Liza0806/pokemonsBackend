const { Pokemon } = require("../models/pokemon");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Pokemon.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Pokemon.findById(id);
  if (!result) {
    throw HttpError(404, "not found");
  }
  res.json(result);
};

const updatePokemonById = async (req, res) => {
    const { id } = req.params;
  const result = await Pokemon.findByIdAndUpdate(id, req.body, {new: true}); //{new: true} - чтобы возвращал новую версию
  if (!result) {
    throw HttpError(404, "not found");
  }
  // return result;
  res.json(result);
};

// router.put('/:id', isValidId, async (req, res, next) => {
//     try {
//       const { error } = addSchema.validate(req.body);

//       if (error) {
//         throw HttpError(404, error.message);
//       }

//       const { id } = req.params;
//       const result = await contacts.updateContact(id, req.body);

//       if (!result) {
//         throw HttpError(404, "Not found");
//       }

//       res.json(result);
//     } catch (error) {
//       next(error);
//     }
//   });

module.exports = {
  getAll: ctrlWrapper(getAll),
  updatePokemonById: ctrlWrapper(updatePokemonById),
  getById: ctrlWrapper(getById)
};

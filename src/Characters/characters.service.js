import { Characters } from "./Character.js";

const createCharacterService = (body) => Characters.create(body);
const findByNameCharService = (name) => Characters.findOne({ name: name });
const findAllUserService = () => Characters.find();
const findByIdCharService = (idUser) => Characters.findById(idUser);
const updateCharService = (idParam, editTarefa) =>
  Characters.findByIdAndUpdate(idParam, editTarefa);
const deleteCharService = (idParam) => Characters.findByIdAndDelete(idParam);

export {
  createCharacterService,
  findByNameCharService,
  findAllUserService,
  findByIdCharService,
  updateCharService,
  deleteCharService,
};

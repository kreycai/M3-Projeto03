import * as charService from "./characters.service.js";
import mongoose from "mongoose";

const createCharController = async (req, res) => {
  const { name, status, specie, avatar } = req.body;
  if (!name || !status || !specie || !avatar) {
    return res.status(400).send({ message: "alguns campos estão faltando." });
  }

  const foundCharName = await charService.findByNameCharService(name);

  if (foundCharName) {
    return res.status(400).send({ message: "Personagem já existe!" });
  }

  const Char = await charService
    .createCharacterService(req.body)
    .catch((err) => console.log(err.message));

  if (!Char) {
    return res.status(400).send({
      message: "Erro ao criar Personagem!",
    });
  }

  res.status(201).send(Char);
};

const FindAllCharController = async (req, res) => {
  const chars = await charService.findAllUserService();

  if (chars.length === 0) {
    return res.status(400).send({
      message: "Não existem personagens cadastrados!",
    });
  }

  res.status(201).send(chars);
};

const findByIdCharController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: "ID invalido!" });
  }
  const char = await charService.findByIdCharService(idParam);

  if (!char) {
    return res.status(404).send({ message: "Tarefa não encontrada!" });
  }

  return res.status(201).send(char);
};

const updateCharController = async (req, res) => {
  const idParam = req.params.id;
  const editChar = req.body;

  const foundCharName = await charService.findByNameCharService(editChar.name);
  if (foundCharName) {
    return res.status(400).send({ message: "Nome de personagem já existe!" });
  }

  const updatedChar = await charService.updateCharService(idParam, editChar);
  res.send(updatedChar);
};

const deleteCharController = async (req, res) => {
  const idParam = req.params.id;
  await charService.deleteCharService(idParam);
  res.send({ message: "Tarefa deletada com sucesso!" });
};

export {
  createCharController,
  FindAllCharController,
  findByIdCharController,
  updateCharController,
  deleteCharController,
};

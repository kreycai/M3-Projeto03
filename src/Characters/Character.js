import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
  },
  specie: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

const Characters = mongoose.model("Characters", userSchema);

export { Characters };

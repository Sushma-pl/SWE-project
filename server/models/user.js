const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    id: String,

    email: String,
    password: String,
    username: String,
   
  },
  {
    collection: "users",
  }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;

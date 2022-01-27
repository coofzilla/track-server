import { Schema } from "mongoose";

const UserSchema = new Schema({
  id: String,
  name: String,
  email: String,
  password: String,
});


import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
    email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
},{timestamps: true});


userSchema.pre("save",async function (next) {
  if(!this.isModified("password")) return next();
  
  this.password = await bcrypt.hash(this.password,10);
  
});

userSchema.methods.camparePassword = async function (password)
{
  return await bcrypt.compare(password,this.password);
}

userSchema.statics.findByEmail = async function (email) {
  // console.log(email + "in schema");
  return this.findOne({ email });
}

const User = mongoose.model("User", userSchema);
export default User;
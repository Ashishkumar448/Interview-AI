import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
    },
    googleId: {
      type: String,
    },
    password: {
      type: String,
      required: function (this: any) {
        return !this.googleId;
      },
      minLength: 8,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;

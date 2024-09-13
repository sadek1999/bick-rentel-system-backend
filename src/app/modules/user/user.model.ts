import { model, Schema } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from "bcrypt";

import config from "../../config";

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], required: true },
    isDelete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre(["find", "findOne"], async function (next) {
  this.where({ isDelete: { $ne: true } });
  next();
});
userSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDelete: { $ne: false } } });
  next();
});

// change the password plain text ot hash before save
userSchema.pre("save", async function (Next) {
  // const user = this;
  this.password = await bcrypt.hash(this.password, Number(config.saltRound));
  Next();
});
//
userSchema.post("save", function (doc, next) {
  doc.password = "";

  next();
});

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select("+password");
};

userSchema.statics.isPasswordMatch = async function (
  plaintextPassword: string,
  hashPassword: string
) {
  return (await bcrypt.compare(plaintextPassword,hashPassword))
};

export const User = model<TUser, UserModel>("user", userSchema);

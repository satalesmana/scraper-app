import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "~/server/models/User.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig();
    const body = await readBody(event);
    const email = body.username;
    const password = body.password;

    if (email === "") throw new Error("username harus di isi");
    if (password === "") throw new Error("password harus di isi");

    const res = await User.findOne({ email });
    if (!res) throw new Error("email invalid");

    const isValid = await bcrypt.compareSync(password, res.password);
    if (!isValid) throw new Error("password invalid");

    const token = jwt.sign(
      {
        _id: res._id,
        id: email,
        name: res.name,
        role: res.role,
        scraperDataSource: res.scraperDataSource,
      },
      config.secretKey,
      {
        expiresIn: 86400, // expires in 24 hours
      }
    );

    return {
      data: { email, ...{ name: res.name } },
      token,
      message: "login berhasil",
    } as ApiResponse<{}, string>;
  } catch (error) {
    return error as ApiResponse<[], string>;
  }
});

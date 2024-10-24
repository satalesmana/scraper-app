import bcrypt from "bcryptjs";
import { User } from "~/server/models/User.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";
import type { ObjectId } from "mongoose";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const config = useRuntimeConfig();
  try {
    const name = body.name;
    const email = body.email;
    const password = body.password;
    const dataSource = body.scraperDataSource;

    let updateData = {
      name,
      email,
      isActive: body.status,
      scraperDataSource: dataSource,
      role: body.role,
    };

    if (name === "") throw new Error("name harus di isi");

    if (password) {
      const salt = bcrypt.genSaltSync(config.saltRounds);
      const passwordHas = await bcrypt.hashSync(password, salt);
      updateData = { ...updateData, ...{ password: passwordHas } };
    }

    const res = await User.updateOne({ _id: body._id as ObjectId }, updateData);
    console.log("res", res);

    return { data: [], message: "user hasbeen saved" } as ApiResponse<
      [],
      string
    >;
  } catch (error) {
    return error as ApiResponse<[], string>;
  }
});

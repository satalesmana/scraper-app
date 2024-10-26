import { ScrapingAccount } from "~/server/models/ScrapingAccount.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";

export default defineEventHandler(async (event) => {
  try {
    const { id, role } = getMetadata(event);
    let filter = {};
    let data: Array<any> = [];

    if (role === "user") {
      filter = { created_by: { email: id } };
    }

    const res = await ScrapingAccount.find(filter).select({
      _id: 1,
      name: 1,
      email: 1,
      phone: 1,
      type: 1,
      cookies: 1,
      created_by: 1,
    });

    if (res) {
      data = res.map((item) => {
        return {
          _id: item._id,
          name: item.name,
          email: item.email,
          phone: item.phone,
          type: item.type,
          created_by: item.created_by,
          isLoged: item.cookies ? true : false,
        };
      });
    }

    return { data: data, message: "" } as ApiResponse<[], string>;
  } catch (error) {
    console.log("error", error);
    return error as ApiResponse<[], string>;
  }
});

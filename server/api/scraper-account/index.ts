import { ScrapingAccount } from "~/server/models/ScrapingAccount.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";

export default defineEventHandler(async (event) => {
  try {
    return { tes: "" };
    // const { id } = getMetadata(event);

    // const res = await ScrapingAccount.find({ "created_by.email": id }).select({
    //   _id: 1,
    //   name: 1,
    //   email: 1,
    //   phone: 1,
    //   type: 1,
    //   cookies: 1,
    // });

    // return { data: res, message: "" } as ApiResponse<[], string>;
  } catch (error) {
    console.log("error", error);
    return error as ApiResponse<[], string>;
  }
});

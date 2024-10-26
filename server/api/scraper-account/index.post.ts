import { ScrapingAccount } from "~/server/models/ScrapingAccount.model";
import type { ApiResponse } from "~/server/types/apiresponse.interface";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { id } = getMetadata(event);

    const data = {
      ...body,
      created_by: {
        email: id,
      },
    };
    const res = await ScrapingAccount.create(data);

    return { data: res, message: "Account hasbeen saved" } as ApiResponse<
      [],
      string
    >;
  } catch (error) {
    return error as ApiResponse<[], string>;
  }
});

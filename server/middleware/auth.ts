import jwt from "jsonwebtoken";
import type { ApiResponse } from "~/server/types/apiresponse.interface";

export default defineEventHandler(async (event) => {
  try {
    const url = getRequestURL(event);

    const exeption = ["/api/auth/login"];
    if (exeption.includes(url.pathname)) {
      return;
    }

    if (url.pathname.includes("/api/")) {
      const config = useRuntimeConfig();
      const { authorization } = getHeaders(event);

      if (!authorization) {
        throw createError({
          statusCode: 422,
          statusMessage: "Not Authorize.",
        });
      }
      const cleanToken = authorization.split(" ");

      const isValidToken = await jwt.verify(cleanToken[1], config.secretKey);
      if (!isValidToken) {
        throw createError({
          statusCode: 422,
          statusMessage: "Invalid token.",
        });
      }
    }
  } catch (error) {
    return { data: [], message: error?.message } as ApiResponse<[], string>;
  }
});

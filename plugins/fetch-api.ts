export default defineNuxtPlugin(() => {
  return {
    provide: {
      useApiFetch: async (url: string, options: any = {}) => {
        return await useFetch(url, {
          baseURL: "/",
          async onRequest(ctx) {
            const config = useRuntimeConfig();
            const accessToken = await useCookie(config.public.appId, {
              default: undefined,
            });
            if (accessToken.value !== undefined) {
              ctx.options.headers = new Headers(ctx.options.headers);
              ctx.options.headers.append(
                "Authorization",
                `Bearer ${accessToken.value}`
              );
            }
          },
          ...options,
        });
      },
    },
  };
});

declare module '#auth' {
  const getServerSession: typeof import('/Users/satalesmana/Project/personal-app/scraper-app/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').getServerSession
  const getToken: typeof import('/Users/satalesmana/Project/personal-app/scraper-app/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').getToken
  const NuxtAuthHandler: typeof import('/Users/satalesmana/Project/personal-app/scraper-app/node_modules/@sidebase/nuxt-auth/dist/runtime/server/services').NuxtAuthHandler
interface SessionData {
  id: string | number
}
}
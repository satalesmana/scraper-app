import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["quasar"]?: typeof import("nuxt-quasar-ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["auth"]?: typeof import("@sidebase/nuxt-auth").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["nuxt-quasar-ui", Exclude<NuxtConfig["quasar"], boolean>] | ["@sidebase/nuxt-auth", Exclude<NuxtConfig["auth"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   saltRounds: number,

   mongodbUri: string,

   secretKey: string,
  }
  interface PublicRuntimeConfig {
   auth: {
      computed: {
         origin: any,

         pathname: string,

         fullBaseUrl: string,
      },

      isEnabled: boolean,

      session: {
         enableRefreshPeriodically: boolean,

         enableRefreshOnWindowFocus: boolean,
      },

      globalAppMiddleware: boolean,

      provider: {
         type: string,

         pages: {
            login: string,
         },

         endpoints: {
            signIn: {
               path: string,

               method: string,
            },

            signOut: {
               path: string,

               method: string,
            },

            signUp: {
               path: string,

               method: string,
            },

            getSession: {
               path: string,

               method: string,
            },
         },

         token: {
            signInResponseTokenPointer: string,

            type: string,

            cookieName: string,

            headerName: string,

            maxAgeInSeconds: number,

            sameSiteAttribute: string,
         },

         sessionDataType: {
            id: string,
         },
      },

      endpoints: {
         getSession: {
            path: string,
         },
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }
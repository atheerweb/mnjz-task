// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { myCustomLightTheme } from "~/utils/themes.ts";
import { ar } from "vuetify/locale";
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,

    components,
    directives,
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
    locale: {
      locale: "ar",
      fallback: "ar",
      messages: { ar },
      rtl: { ar: true },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});

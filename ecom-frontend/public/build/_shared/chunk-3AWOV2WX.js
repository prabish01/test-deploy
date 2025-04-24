import {
  createHotContext
} from "/build/_shared/chunk-2D5YPC6P.js";

// app/constants.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/constants.ts"
  );
  import.meta.hot.lastModified = "1745508918458.869";
}
var APP_META_TITLE = "Vendure Remix Storefront";
var APP_META_DESCRIPTION = "A headless commerce storefront starter kit built with Remix & Vendure";
var DEMO_API_URL = "https://readonlydemo.vendure.io/shop-api";
var API_URL = typeof process !== "undefined" ? process.env.VENDURE_API_URL ?? DEMO_API_URL : DEMO_API_URL;

export {
  APP_META_TITLE,
  APP_META_DESCRIPTION,
  API_URL
};
//# sourceMappingURL=/build/_shared/chunk-3AWOV2WX.js.map

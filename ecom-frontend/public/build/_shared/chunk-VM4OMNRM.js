import {
  createHotContext
} from "/build/_shared/chunk-2D5YPC6P.js";

// app/utils/validation.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/validation.ts"
  );
  import.meta.hot.lastModified = "1745508918464.347";
}
function shippingFormDataIsValid(data) {
  const shippingFormData = data instanceof FormData ? Object.fromEntries(data.entries()) : data;
  return !!(shippingFormData.streetLine1 && shippingFormData.city && shippingFormData.countryCode && shippingFormData.postalCode);
}
function replaceEmptyString(input) {
  if (!input || input.trim().length == 0) {
    return "-";
  }
  return input;
}

export {
  shippingFormDataIsValid,
  replaceEmptyString
};
//# sourceMappingURL=/build/_shared/chunk-VM4OMNRM.js.map

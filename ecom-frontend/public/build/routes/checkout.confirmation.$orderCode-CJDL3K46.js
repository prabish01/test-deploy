import {
  CartTotals
} from "/build/_shared/chunk-BRACU5L4.js";
import {
  CartContents
} from "/build/_shared/chunk-FCMJCPO3.js";
import "/build/_shared/chunk-AY65JH6E.js";
import {
  InformationCircleIcon_default
} from "/build/_shared/chunk-UAKY2I6L.js";
import {
  CheckCircleIcon_default,
  XCircleIcon_default
} from "/build/_shared/chunk-OJSGE3VW.js";
import {
  useTranslation
} from "/build/_shared/chunk-ATECKQIK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  useLoaderData,
  useRevalidator
} from "/build/_shared/chunk-E23D2VLJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-2D5YPC6P.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/checkout.confirmation.$orderCode.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/checkout.confirmation.$orderCode.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/checkout.confirmation.$orderCode.tsx"
  );
  import.meta.hot.lastModified = "1745508918462.001";
}
function CheckoutConfirmation() {
  _s();
  const {
    order,
    error
  } = useLoaderData();
  const revalidator = useRevalidator();
  const [retries, setRetries] = (0, import_react3.useState)(1);
  const {
    t
  } = useTranslation();
  const orderNotFound = !order && !error;
  const orderErrored = !order && error;
  const maxRetries = 5;
  const retriesExhausted = retries >= maxRetries;
  const retryTimeout = 2500;
  const retry = () => {
    if (!window)
      return;
    setRetries(retries + 1);
    window.setTimeout(() => {
      if (retries > maxRetries)
        return;
      revalidator.revalidate();
    }, retryTimeout);
  };
  (0, import_react3.useEffect)(() => {
    if (orderErrored) {
      retry();
    }
  }, [order]);
  (0, import_react3.useEffect)(() => {
    if (revalidator.state === "idle" && orderErrored && retries <= maxRetries && retries > 1) {
      retry();
    }
  }, [revalidator.state]);
  if (orderNotFound) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("checkout.orderNotFound") }, void 0, false, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 85,
      columnNumber: 12
    }, this);
  }
  if (orderErrored && retriesExhausted) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XCircleIcon_default, { className: "text-red-600 w-8 h-8 sm:w-12 sm:h-12" }, void 0, false, {
          fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t("checkout.orderErrorTitle") }, void 0, false, {
          fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-700", children: t("checkout.orderErrorMessage") }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 92,
      columnNumber: 12
    }, this);
  }
  if (orderErrored) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("checkout.orderProcessing") }, void 0, false, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 103,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "text-green-600 w-8 h-8 sm:w-12 sm:h-12" }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t("order.summary") }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-700", children: [
      t("checkout.orderSuccessMessage"),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold", children: order.code }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    order.active && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md bg-blue-50 p-4 my-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InformationCircleIcon_default, { className: "h-5 w-5 text-blue-400", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 121,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 120,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 flex-1 md:flex md:justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-700", children: t("checkout.paymentMessage") }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 119,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 118,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartContents, { orderLines: order.lines, currencyCode: order.currencyCode, editable: false }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartTotals, { order }, void 0, false, {
        fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
      lineNumber: 130,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/checkout.confirmation.$orderCode.tsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s(CheckoutConfirmation, "tvqwXa0ottJT9EtgLm+ecCVIk3k=", false, function() {
  return [useLoaderData, useRevalidator, useTranslation];
});
_c = CheckoutConfirmation;
var _c;
$RefreshReg$(_c, "CheckoutConfirmation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CheckoutConfirmation as default
};
//# sourceMappingURL=/build/routes/checkout.confirmation.$orderCode-CJDL3K46.js.map

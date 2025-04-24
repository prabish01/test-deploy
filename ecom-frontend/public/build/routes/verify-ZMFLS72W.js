import {
  require_i18next
} from "/build/_shared/chunk-QZYG7WHP.js";
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
  useSearchParams
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

// app/routes/verify.tsx
var import_react = __toESM(require_react(), 1);
var import_i18next = __toESM(require_i18next(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/verify.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/verify.tsx"
  );
  import.meta.hot.lastModified = "1745508918463.1626";
}
function VerifyTokenPage() {
  _s();
  const [searchParams] = useSearchParams();
  const result = useLoaderData();
  const btnRef = (0, import_react.useRef)(null);
  const {
    t
  } = useTranslation();
  (0, import_react.useEffect)(() => {
    if (!result.success || !btnRef.current) {
      return;
    }
    const submitBtn = btnRef.current;
    setTimeout(() => submitBtn.click(), 5e3);
  }, [result]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: result.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md bg-green-100 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-green-600", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 95,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 94,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-green-700", children: t("account.verifyMessage") }, void 0, false, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 98,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 97,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirect", value: searchParams.get("redirectTo") || "/" }, void 0, false, {
        fileName: "app/routes/verify.tsx",
        lineNumber: 103,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "headers", value: result.headersJson }, void 0, false, {
        fileName: "app/routes/verify.tsx",
        lineNumber: 104,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { ref: btnRef, type: "submit", style: {
        display: "none "
      } }, void 0, false, {
        fileName: "app/routes/verify.tsx",
        lineNumber: 105,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 102,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 93,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 92,
    columnNumber: 29
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XCircleIcon_default, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 113,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 112,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-red-700", children: result.error }, void 0, false, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 116,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/verify.tsx",
      lineNumber: 115,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 111,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 110,
    columnNumber: 22
  }, this) }, void 0, false, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 91,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/verify.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_s(VerifyTokenPage, "7iyyRW4WwZ+a7DzejjTwDrj6J1E=", false, function() {
  return [useSearchParams, useLoaderData, useTranslation];
});
_c = VerifyTokenPage;
var _c;
$RefreshReg$(_c, "VerifyTokenPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  VerifyTokenPage as default
};
//# sourceMappingURL=/build/routes/verify-ZMFLS72W.js.map

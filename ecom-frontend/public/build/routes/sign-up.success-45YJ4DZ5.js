import {
  CheckCircleIcon_default
} from "/build/_shared/chunk-OJSGE3VW.js";
import {
  useTranslation
} from "/build/_shared/chunk-ATECKQIK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Form
} from "/build/_shared/chunk-E23D2VLJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-2D5YPC6P.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/sign-up.success.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/sign-up.success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/sign-up.success.tsx"
  );
  import.meta.hot.lastModified = "1745508918463.0083";
}
function SuccessPage() {
  _s();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md border-2 rounded-md border-green-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "space-y-6", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircleIcon_default, { className: "h-20 w-20 m-auto mb-2 text-green-600", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/routes/sign-up.success.tsx",
      lineNumber: 41,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/sign-up.success.tsx",
      lineNumber: 40,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/sign-up.success.tsx",
      lineNumber: 39,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center mb-5", children: t("account.createdMessage") }, void 0, false, {
      fileName: "app/routes/sign-up.success.tsx",
      lineNumber: 44,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500", children: t("account.goHome") }, void 0, false, {
      fileName: "app/routes/sign-up.success.tsx",
      lineNumber: 45,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sign-up.success.tsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/sign-up.success.tsx",
    lineNumber: 37,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/sign-up.success.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/sign-up.success.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/sign-up.success.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(SuccessPage, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = SuccessPage;
var _c;
$RefreshReg$(_c, "SuccessPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SuccessPage as default
};
//# sourceMappingURL=/build/routes/sign-up.success-45YJ4DZ5.js.map

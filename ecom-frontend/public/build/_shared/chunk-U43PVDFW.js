import {
  Select
} from "/build/_shared/chunk-NAZUJGJB.js";
import {
  z
} from "/build/_shared/chunk-GVBBBZ4Y.js";
import {
  Button,
  clsx_m_default
} from "/build/_shared/chunk-GORBEOCZ.js";
import {
  ArrowPathIcon_default
} from "/build/_shared/chunk-UAKY2I6L.js";
import {
  useTranslation
} from "/build/_shared/chunk-ATECKQIK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  useNavigation
} from "/build/_shared/chunk-E23D2VLJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-2D5YPC6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/utils/pagination.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/pagination.ts"
  );
  import.meta.hot.lastModified = "1745508918463.8425";
}
function paginationValidationSchema(allowedPaginationLimits) {
  const paginationLimitsAsArray = Array.from(allowedPaginationLimits);
  const paginationLimitDerivedMin = Math.min(...paginationLimitsAsArray);
  const paginationLimitDerivedMax = Math.max(...paginationLimitsAsArray);
  const paginationLimitSchema = z.number({
    required_error: "Limit is required",
    invalid_type_error: "Limit must be a number",
    coerce: true
  }).int().min(paginationLimitDerivedMin, {
    message: `Limit must be at least ${paginationLimitDerivedMin}`
  }).max(paginationLimitDerivedMax, {
    message: `Maximum limit is ${paginationLimitDerivedMax}`
  }).refine((x) => allowedPaginationLimits.has(x));
  const paginationPageSchema = z.number({
    required_error: "Page is required",
    invalid_type_error: "Page must be a number",
    coerce: true
  }).int().min(1, { message: "Page must be at least 1" }).max(1e3, { message: "Page can't be over 1000" });
  return z.object({
    limit: paginationLimitSchema,
    page: paginationPageSchema
  });
}
function translatePaginationFrom(appliedPaginationPage, appliedPaginationLimit) {
  return (appliedPaginationPage - 1) * appliedPaginationLimit + 1;
}
function translatePaginationTo(appliedPaginationPage, appliedPaginationLimit, totalItems) {
  return translatePaginationFrom(appliedPaginationPage, appliedPaginationLimit) + totalItems - 1;
}

// app/components/Pagination.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Pagination.tsx"
  );
  import.meta.hot.lastModified = "1745508918455.0183";
}
function Pagination({
  appliedPaginationLimit,
  allowedPaginationLimits,
  totalItems,
  appliedPaginationPage,
  ...props
}) {
  _s();
  const navigation = useNavigation();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ...props, className: clsx_m_default("flex flex-col md:flex-row justify-center items-end md:items-center gap-4 lg:gap-6", props.className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex gap-4 items-center", children: [
      navigation.state !== "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowPathIcon_default, { className: "animate-spin h-6 w-6 text-gray-500" }, void 0, false, {
        fileName: "app/components/Pagination.tsx",
        lineNumber: 42,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "limit", required: true, noPlaceholder: true, defaultValue: appliedPaginationLimit, children: Array.from(allowedPaginationLimits).map((x) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: x, children: [
        x,
        " ",
        t("common.perPage")
      ] }, x, true, {
        fileName: "app/components/Pagination.tsx",
        lineNumber: 44,
        columnNumber: 57
      }, this)) }, void 0, false, {
        fileName: "app/components/Pagination.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Pagination.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", role: "group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { name: "page", type: "submit", value: appliedPaginationPage - 1, disabled: appliedPaginationPage <= 1 || navigation.state !== "idle", className: "!text-sm rounded-r-none border-r-0", children: t("common.prev") }, void 0, false, {
        fileName: "app/components/Pagination.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { name: "page", type: "submit", value: appliedPaginationPage + 1, disabled: appliedPaginationPage * appliedPaginationLimit >= totalItems || navigation.state !== "idle", className: "!text-sm rounded-l-none", children: t("common.next") }, void 0, false, {
        fileName: "app/components/Pagination.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Pagination.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Pagination.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(Pagination, "Jl2Mr1xTC58emDVtjb2ErKq/V+U=", false, function() {
  return [useNavigation, useTranslation];
});
_c = Pagination;
var _c;
$RefreshReg$(_c, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  paginationValidationSchema,
  translatePaginationFrom,
  translatePaginationTo,
  Pagination
};
//# sourceMappingURL=/build/_shared/chunk-U43PVDFW.js.map

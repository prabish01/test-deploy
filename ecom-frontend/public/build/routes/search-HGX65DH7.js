import {
  FacetFilterTracker,
  FilterableProductGrid,
  FiltersButton,
  filteredSearchLoaderFromPagination
} from "/build/_shared/chunk-UMANJAHL.js";
import {
  paginationValidationSchema
} from "/build/_shared/chunk-U43PVDFW.js";
import "/build/_shared/chunk-QZXK2SVX.js";
import "/build/_shared/chunk-AY65JH6E.js";
import "/build/_shared/chunk-NAZUJGJB.js";
import {
  ValidatedForm,
  withZod
} from "/build/_shared/chunk-GVBBBZ4Y.js";
import "/build/_shared/chunk-AYBHDJL7.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-3AWOV2WX.js";
import "/build/_shared/chunk-GORBEOCZ.js";
import "/build/_shared/chunk-V4DSXLWW.js";
import "/build/_shared/chunk-SHJ2IKH5.js";
import "/build/_shared/chunk-EW2ICRB6.js";
import "/build/_shared/chunk-UAKY2I6L.js";
import "/build/_shared/chunk-OJSGE3VW.js";
import {
  useTranslation
} from "/build/_shared/chunk-ATECKQIK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  useLoaderData,
  useSubmit
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

// app/routes/search.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/search.tsx"
  );
  import.meta.hot.lastModified = "1745508918462.6458";
}
var paginationLimitMinimumDefault = 25;
var allowedPaginationLimits = /* @__PURE__ */ new Set([paginationLimitMinimumDefault, 50, 100]);
var validator = withZod(paginationValidationSchema(allowedPaginationLimits));
var {
  filteredSearchLoader: loader
} = filteredSearchLoaderFromPagination(allowedPaginationLimits, paginationLimitMinimumDefault);
function Search() {
  _s();
  const loaderData = useLoaderData();
  const {
    result,
    resultWithoutFacetValueFilters,
    term,
    facetValueIds
  } = loaderData;
  const [mobileFiltersOpen, setMobileFiltersOpen] = (0, import_react2.useState)(false);
  const facetValuesTracker = (0, import_react2.useRef)(new FacetFilterTracker());
  facetValuesTracker.current.update(result, resultWithoutFacetValueFilters, facetValueIds);
  const submit = useSubmit();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: term ? `${t("common.resultsFor")} "${term}"` : t("common.allResults") }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FiltersButton, { filterCount: facetValueIds.length, onClick: () => setMobileFiltersOpen(true) }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/search.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ValidatedForm, { validator, method: "get", onChange: (e) => submit(e.currentTarget, {
      preventScrollReset: true
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FilterableProductGrid, { allowedPaginationLimits, mobileFiltersOpen, setMobileFiltersOpen, ...loaderData }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/search.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s(Search, "kdIHBT+i9LJ0A4NwEBXrX4hIzqs=", false, function() {
  return [useLoaderData, useSubmit, useTranslation];
});
_c = Search;
var _c;
$RefreshReg$(_c, "Search");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Search as default
};
//# sourceMappingURL=/build/routes/search-HGX65DH7.js.map

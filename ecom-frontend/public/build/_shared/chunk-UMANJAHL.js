import {
  Pagination,
  paginationValidationSchema,
  translatePaginationFrom,
  translatePaginationTo
} from "/build/_shared/chunk-U43PVDFW.js";
import {
  search,
  searchFacetValues
} from "/build/_shared/chunk-QZXK2SVX.js";
import {
  Price
} from "/build/_shared/chunk-AY65JH6E.js";
import {
  _t,
  d,
  qe,
  s,
  u as u2
} from "/build/_shared/chunk-V4DSXLWW.js";
import {
  C,
  I,
  I3 as I2,
  O2 as O,
  T2 as T,
  U,
  l,
  o,
  o3 as o2,
  o4 as o3,
  r,
  u,
  y2 as y
} from "/build/_shared/chunk-SHJ2IKH5.js";
import {
  FunnelIcon_default,
  MinusSmallIcon_default,
  PlusSmallIcon_default
} from "/build/_shared/chunk-UAKY2I6L.js";
import {
  XMarkIcon_default
} from "/build/_shared/chunk-OJSGE3VW.js";
import {
  useTranslation
} from "/build/_shared/chunk-ATECKQIK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Link,
  redirect,
  useSearchParams
} from "/build/_shared/chunk-E23D2VLJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-2D5YPC6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/facet-filter/facet-filter-tracker.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/facet-filter/facet-filter-tracker.ts"
  );
  import.meta.hot.lastModified = "1745508918457.3193";
}
var FacetFilterTracker = class {
  _facetsWithValues = [];
  get facetsWithValues() {
    return this._facetsWithValues;
  }
  update(searchResult, resultWithoutFacetValueFilters, activeFacetValueIds) {
    this._facetsWithValues = this.groupFacetValues(
      resultWithoutFacetValueFilters,
      searchResult.facetValues,
      activeFacetValueIds
    );
  }
  groupFacetValues(withoutFilters, current, activeFacetValueIds) {
    if (!current) {
      return [];
    }
    const facetMap = /* @__PURE__ */ new Map();
    for (const {
      facetValue: { id, name, facet },
      count
    } of withoutFilters.facetValues) {
      if (count === withoutFilters.totalItems) {
        continue;
      }
      const facetFromMap = facetMap.get(facet.id);
      const selected = activeFacetValueIds.includes(id);
      if (facetFromMap) {
        facetFromMap.values.push({ id, name, selected });
      } else {
        facetMap.set(facet.id, {
          id: facet.id,
          name: facet.name,
          values: [{ id, name, selected }]
        });
      }
    }
    return Array.from(facetMap.values());
  }
};

// app/components/FiltersButton.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/FiltersButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/FiltersButton.tsx"
  );
  import.meta.hot.lastModified = "1745508918454.7341";
}
function FiltersButton({
  filterCount,
  onClick
}) {
  _s();
  const {
    t: t2
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "flex space-x-2 items-center border rounded p-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden", onClick, children: [
    !!filterCount ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-200 text-primary-800", children: filterCount }, void 0, false, {
      fileName: "app/components/FiltersButton.tsx",
      lineNumber: 33,
      columnNumber: 24
    }, this) : "",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: t2("common.filters") }, void 0, false, {
      fileName: "app/components/FiltersButton.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunnelIcon_default, { className: "w-5 h-5", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/components/FiltersButton.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FiltersButton.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(FiltersButton, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = FiltersButton;
var _c;
$RefreshReg$(_c, "FiltersButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/facet-filter/FacetFilterControls.tsx
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react = __toESM(require_react(), 1);
function i(t2) {
  var n;
  if (t2.type)
    return t2.type;
  let e = (n = t2.as) != null ? n : "button";
  if (typeof e == "string" && e.toLowerCase() === "button")
    return "button";
}
function T2(t2, e) {
  let [n, u3] = (0, import_react.useState)(() => i(t2));
  return l(() => {
    u3(i(t2));
  }, [t2.type, t2.as]), l(() => {
    n || e.current && e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && u3("button");
  }, [n, e]), n;
}

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react2 = __toESM(require_react(), 1);
var t;
var a = (t = import_react2.default.startTransition) != null ? t : function(i2) {
  i2();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var Q = ((o5) => (o5[o5.Open = 0] = "Open", o5[o5.Closed = 1] = "Closed", o5))(Q || {});
var V = ((t2) => (t2[t2.ToggleDisclosure = 0] = "ToggleDisclosure", t2[t2.CloseDisclosure = 1] = "CloseDisclosure", t2[t2.SetButtonId = 2] = "SetButtonId", t2[t2.SetPanelId = 3] = "SetPanelId", t2[t2.LinkPanel = 4] = "LinkPanel", t2[t2.UnlinkPanel = 5] = "UnlinkPanel", t2))(V || {});
var Y = { [0]: (e) => ({ ...e, disclosureState: u(e.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e) => e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }, [4](e) {
  return e.linkedPanel === true ? e : { ...e, linkedPanel: true };
}, [5](e) {
  return e.linkedPanel === false ? e : { ...e, linkedPanel: false };
}, [2](e, n) {
  return e.buttonId === n.buttonId ? e : { ...e, buttonId: n.buttonId };
}, [3](e, n) {
  return e.panelId === n.panelId ? e : { ...e, panelId: n.panelId };
} };
var M = (0, import_react3.createContext)(null);
M.displayName = "DisclosureContext";
function _(e) {
  let n = (0, import_react3.useContext)(M);
  if (n === null) {
    let o5 = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o5, _), o5;
  }
  return n;
}
var v = (0, import_react3.createContext)(null);
v.displayName = "DisclosureAPIContext";
function K(e) {
  let n = (0, import_react3.useContext)(v);
  if (n === null) {
    let o5 = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o5, K), o5;
  }
  return n;
}
var F = (0, import_react3.createContext)(null);
F.displayName = "DisclosurePanelContext";
function Z() {
  return (0, import_react3.useContext)(F);
}
function ee(e, n) {
  return u(n.type, Y, e, n);
}
var te = import_react3.Fragment;
function ne(e, n) {
  let { defaultOpen: o5 = false, ...i2 } = e, f = (0, import_react3.useRef)(null), l2 = y(n, T((u3) => {
    f.current = u3;
  }, e.as === void 0 || e.as === import_react3.Fragment)), t2 = (0, import_react3.useRef)(null), d2 = (0, import_react3.useRef)(null), s2 = (0, import_react3.useReducer)(ee, { disclosureState: o5 ? 0 : 1, linkedPanel: false, buttonRef: d2, panelRef: t2, buttonId: null, panelId: null }), [{ disclosureState: c, buttonId: a2 }, D] = s2, p = o((u3) => {
    D({ type: 1 });
    let y2 = o2(f);
    if (!y2 || !a2)
      return;
    let r3 = (() => u3 ? u3 instanceof HTMLElement ? u3 : u3.current instanceof HTMLElement ? u3.current : y2.getElementById(a2) : y2.getElementById(a2))();
    r3 == null || r3.focus();
  }), P = (0, import_react3.useMemo)(() => ({ close: p }), [p]), T3 = (0, import_react3.useMemo)(() => ({ open: c === 0, close: p }), [c, p]), C2 = { ref: l2 };
  return import_react3.default.createElement(M.Provider, { value: s2 }, import_react3.default.createElement(v.Provider, { value: P }, import_react3.default.createElement(s, { value: u(c, { [0]: d.Open, [1]: d.Closed }) }, C({ ourProps: C2, theirProps: i2, slot: T3, defaultTag: te, name: "Disclosure" }))));
}
var le = "button";
function oe(e, n) {
  let o5 = I(), { id: i2 = `headlessui-disclosure-button-${o5}`, ...f } = e, [l2, t2] = _("Disclosure.Button"), d2 = Z(), s2 = d2 === null ? false : d2 === l2.panelId, c = (0, import_react3.useRef)(null), a2 = y(c, n, s2 ? null : l2.buttonRef), D = I2();
  (0, import_react3.useEffect)(() => {
    if (!s2)
      return t2({ type: 2, buttonId: i2 }), () => {
        t2({ type: 2, buttonId: null });
      };
  }, [i2, t2, s2]);
  let p = o((r3) => {
    var m;
    if (s2) {
      if (l2.disclosureState === 1)
        return;
      switch (r3.key) {
        case o3.Space:
        case o3.Enter:
          r3.preventDefault(), r3.stopPropagation(), t2({ type: 0 }), (m = l2.buttonRef.current) == null || m.focus();
          break;
      }
    } else
      switch (r3.key) {
        case o3.Space:
        case o3.Enter:
          r3.preventDefault(), r3.stopPropagation(), t2({ type: 0 });
          break;
      }
  }), P = o((r3) => {
    switch (r3.key) {
      case o3.Space:
        r3.preventDefault();
        break;
    }
  }), T3 = o((r3) => {
    var m;
    r(r3.currentTarget) || e.disabled || (s2 ? (t2({ type: 0 }), (m = l2.buttonRef.current) == null || m.focus()) : t2({ type: 0 }));
  }), C2 = (0, import_react3.useMemo)(() => ({ open: l2.disclosureState === 0 }), [l2]), u3 = T2(e, c), y2 = s2 ? { ref: a2, type: u3, onKeyDown: p, onClick: T3 } : { ref: a2, id: i2, type: u3, "aria-expanded": l2.disclosureState === 0, "aria-controls": l2.linkedPanel ? l2.panelId : void 0, onKeyDown: p, onKeyUp: P, onClick: T3 };
  return C({ mergeRefs: D, ourProps: y2, theirProps: f, slot: C2, defaultTag: le, name: "Disclosure.Button" });
}
var re = "div";
var se = O.RenderStrategy | O.Static;
function ue(e, n) {
  let o5 = I(), { id: i2 = `headlessui-disclosure-panel-${o5}`, ...f } = e, [l2, t2] = _("Disclosure.Panel"), { close: d2 } = K("Disclosure.Panel"), s2 = I2(), c = y(n, l2.panelRef, (T3) => {
    a(() => t2({ type: T3 ? 4 : 5 }));
  });
  (0, import_react3.useEffect)(() => (t2({ type: 3, panelId: i2 }), () => {
    t2({ type: 3, panelId: null });
  }), [i2, t2]);
  let a2 = u2(), D = (() => a2 !== null ? (a2 & d.Open) === d.Open : l2.disclosureState === 0)(), p = (0, import_react3.useMemo)(() => ({ open: l2.disclosureState === 0, close: d2 }), [l2, d2]), P = { ref: c, id: i2 };
  return import_react3.default.createElement(F.Provider, { value: l2.panelId }, C({ mergeRefs: s2, ourProps: P, theirProps: f, slot: p, defaultTag: re, features: se, visible: D, name: "Disclosure.Panel" }));
}
var ie = U(ne);
var ae = U(oe);
var pe = U(ue);
var Ae = Object.assign(ie, { Button: ae, Panel: pe });

// app/components/facet-filter/FacetFilterControls.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/facet-filter/FacetFilterControls.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/facet-filter/FacetFilterControls.tsx"
  );
  import.meta.hot.lastModified = "1745508918457.247";
}
function FacetFilterControls({
  facetFilterTracker,
  mobileFiltersOpen,
  setMobileFiltersOpen
}) {
  _s2();
  const [searchParams] = useSearchParams();
  const q = searchParams.getAll("q");
  const {
    t: t2
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe.Root, { show: mobileFiltersOpen, as: import_react4.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t, { as: "div", className: "relative z-40 lg:hidden", onClose: setMobileFiltersOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe.Child, { as: import_react4.Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 bg-black bg-opacity-25" }, void 0, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 flex z-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe.Child, { as: import_react4.Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t.Panel, { className: "ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: t2("common.filters") }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 51,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400", onClick: () => setMobileFiltersOpen(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: t2("common.closeMenu") }, void 0, false, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 55,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 56,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 54,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 border-t border-gray-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "q", value: q }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 60,
            columnNumber: 19
          }, this),
          facetFilterTracker.facetsWithValues.map((facet) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae, { as: "div", defaultOpen: true, className: "border-t border-gray-200 px-4 py-6", children: ({
            open
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "-mx-2 -my-3 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { className: "px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-gray-900 uppercase", children: facet.name }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 67,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MinusSmallIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 71,
                columnNumber: 41
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PlusSmallIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 71,
                columnNumber: 101
              }, this) }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 70,
                columnNumber: 31
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 66,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 65,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Panel, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-6", children: facet.values.map((value, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: `filter-mobile-${facet.id}-${optionIdx}`, defaultValue: value.id, type: "checkbox", checked: value.selected, onChange: (ev) => {
                document.getElementById(`filter-${facet.id}-${optionIdx}`).checked = ev.target.checked;
              }, className: "h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500" }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 78,
                columnNumber: 35
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: `filter-mobile-${facet.id}-${optionIdx}`, className: "ml-3 min-w-0 flex-1 text-gray-500", children: value.name }, void 0, false, {
                fileName: "app/components/facet-filter/FacetFilterControls.tsx",
                lineNumber: 82,
                columnNumber: 35
              }, this)
            ] }, value.id, true, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 77,
              columnNumber: 71
            }, this)) }, void 0, false, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 76,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/components/facet-filter/FacetFilterControls.tsx",
              lineNumber: 75,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 64,
            columnNumber: 25
          }, this) }, facet.id, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 61,
            columnNumber: 69
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/facet-filter/FacetFilterControls.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/facet-filter/FacetFilterControls.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "q", value: q }, void 0, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      facetFilterTracker.facetsWithValues.map((facet) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae, { as: "div", defaultOpen: true, className: "border-b border-gray-200 py-6", children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "-my-3 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { className: "py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-gray-900 uppercase", children: facet.name }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 105,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MinusSmallIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 109,
            columnNumber: 31
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PlusSmallIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 109,
            columnNumber: 91
          }, this) }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 108,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 104,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Panel, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: facet.values.map((value, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: `filter-${facet.id}-${optionIdx}`, name: `fvid`, defaultValue: value.id, type: "checkbox", checked: value.selected, onChange: () => {
          }, className: "h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500" }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 116,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: `filter-${facet.id}-${optionIdx}`, className: "ml-3 text-sm text-gray-600", children: value.name }, void 0, false, {
            fileName: "app/components/facet-filter/FacetFilterControls.tsx",
            lineNumber: 117,
            columnNumber: 25
          }, this)
        ] }, value.id, true, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 115,
          columnNumber: 61
        }, this)) }, void 0, false, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 114,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/facet-filter/FacetFilterControls.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this) }, facet.id, false, {
        fileName: "app/components/facet-filter/FacetFilterControls.tsx",
        lineNumber: 99,
        columnNumber: 59
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/facet-filter/FacetFilterControls.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/facet-filter/FacetFilterControls.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s2(FacetFilterControls, "2/2hGkpLhAgWFHJC7+gr0asGte0=", false, function() {
  return [useSearchParams, useTranslation];
});
_c2 = FacetFilterControls;
var _c2;
$RefreshReg$(_c2, "FacetFilterControls");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/products/ProductCard.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/ProductCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/ProductCard.tsx"
  );
  import.meta.hot.lastModified = "1745508918458.1877";
}
function ProductCard({
  productAsset,
  productName,
  slug,
  priceWithTax,
  currencyCode
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { className: "flex flex-col", prefetch: "intent", to: `/products/${slug}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "rounded-xl flex-grow object-cover aspect-[7/8]", alt: "", src: productAsset?.preview + "?w=300&h=400" }, void 0, false, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-2" }, void 0, false, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm text-gray-700", children: productName }, void 0, false, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Price, { priceWithTax, currencyCode }, void 0, false, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/products/ProductCard.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c3 = ProductCard;
var _c3;
$RefreshReg$(_c3, "ProductCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/products/NoResultsHint.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/NoResultsHint.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/NoResultsHint.tsx"
  );
  import.meta.hot.lastModified = "1745508918458.0508";
}
function NoResultsHint({
  facetFilterTracker,
  ...props
}) {
  _s3();
  const {
    t: t2
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl sm:text-4xl font-light tracking-tight text-gray-900", children: t2("product.noResults") }, void 0, false, {
      fileName: "app/components/products/NoResultsHint.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    facetFilterTracker?.facetsWithValues.some((f) => f.values.some((v2) => v2.selected)) && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-lg sm:text-2xl font-light tracking-tight text-gray-900", children: t2("product.filterTip") }, void 0, false, {
      fileName: "app/components/products/NoResultsHint.tsx",
      lineNumber: 35,
      columnNumber: 90
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/products/NoResultsHint.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s3(NoResultsHint, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c4 = NoResultsHint;
var _c4;
$RefreshReg$(_c4, "NoResultsHint");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/products/FilterableProductGrid.tsx
var import_react8 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/FilterableProductGrid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/FilterableProductGrid.tsx"
  );
  import.meta.hot.lastModified = "1745508918457.977";
}
function FilterableProductGrid({
  result,
  resultWithoutFacetValueFilters,
  facetValueIds,
  appliedPaginationPage,
  appliedPaginationLimit,
  allowedPaginationLimits,
  mobileFiltersOpen,
  setMobileFiltersOpen
}) {
  _s4();
  const {
    t: t2
  } = useTranslation();
  const facetValuesTracker = (0, import_react8.useRef)(new FacetFilterTracker());
  facetValuesTracker.current.update(result, resultWithoutFacetValueFilters, facetValueIds);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-6 grid sm:grid-cols-5 gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FacetFilterControls, { facetFilterTracker: facetValuesTracker.current, mobileFiltersOpen, setMobileFiltersOpen }, void 0, false, {
      fileName: "app/components/products/FilterableProductGrid.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    result.items.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "sm:col-span-5 lg:col-span-4 space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8", children: result.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProductCard, { ...item }, item.productId, false, {
        fileName: "app/components/products/FilterableProductGrid.tsx",
        lineNumber: 50,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/components/products/FilterableProductGrid.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "self-start text-gray-500 text-sm mt-2", children: [
          t2("product.showing"),
          " ",
          translatePaginationFrom(appliedPaginationPage, appliedPaginationLimit),
          " ",
          t2("product.to"),
          " ",
          translatePaginationTo(appliedPaginationPage, appliedPaginationLimit, result.items.length)
        ] }, void 0, true, {
          fileName: "app/components/products/FilterableProductGrid.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Pagination, { appliedPaginationLimit, allowedPaginationLimits, totalItems: result.totalItems, appliedPaginationPage }, void 0, false, {
          fileName: "app/components/products/FilterableProductGrid.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/products/FilterableProductGrid.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/products/FilterableProductGrid.tsx",
      lineNumber: 48,
      columnNumber: 34
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NoResultsHint, { facetFilterTracker: facetValuesTracker.current, className: "sm:col-span-4 sm:p-4" }, void 0, false, {
      fileName: "app/components/products/FilterableProductGrid.tsx",
      lineNumber: 62,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/products/FilterableProductGrid.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s4(FilterableProductGrid, "12ulESM3mSjbGvTJMUbtHgeAlSU=", false, function() {
  return [useTranslation];
});
_c5 = FilterableProductGrid;
var _c5;
$RefreshReg$(_c5, "FilterableProductGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/utils/filtered-search-loader.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/filtered-search-loader.ts"
  );
  import.meta.hot.lastModified = "1745508918463.7817";
}
function filteredSearchLoaderFromPagination(allowedPaginationLimits, paginationLimitMinimumDefault) {
  const searchPaginationSchema = paginationValidationSchema(
    allowedPaginationLimits
  );
  return {
    validator: searchPaginationSchema,
    filteredSearchLoader: async ({ params, request }) => {
      const url = new URL(request.url);
      const term = url.searchParams.get("q");
      const facetValueIds = url.searchParams.getAll("fvid");
      const limit = url.searchParams.get("limit") ?? paginationLimitMinimumDefault;
      const page = url.searchParams.get("page") ?? 1;
      const zodResult = searchPaginationSchema.safeParse({ limit, page });
      if (!zodResult.success) {
        url.search = "";
        throw redirect(url.href);
      }
      let resultPromises;
      const searchResultPromise = search(
        {
          input: {
            groupByProduct: true,
            term,
            facetValueFilters: [{ or: facetValueIds }],
            collectionSlug: params.slug,
            take: zodResult.data.limit,
            skip: (zodResult.data.page - 1) * zodResult.data.limit
          }
        },
        { request }
      );
      if (facetValueIds.length) {
        resultPromises = [
          searchResultPromise,
          searchFacetValues(
            {
              input: {
                groupByProduct: true,
                term,
                collectionSlug: params.slug
              }
            },
            { request }
          )
        ];
      } else {
        resultPromises = [searchResultPromise, searchResultPromise];
      }
      const [result, resultWithoutFacetValueFilters] = await Promise.all(
        resultPromises
      );
      return {
        term,
        facetValueIds,
        result: result.search,
        resultWithoutFacetValueFilters: resultWithoutFacetValueFilters.search,
        appliedPaginationLimit: zodResult.data.limit,
        appliedPaginationPage: zodResult.data.page
      };
    }
  };
}

export {
  FacetFilterTracker,
  FiltersButton,
  FilterableProductGrid,
  filteredSearchLoaderFromPagination
};
//# sourceMappingURL=/build/_shared/chunk-UMANJAHL.js.map

import {
  shippingFormDataIsValid
} from "/build/_shared/chunk-VM4OMNRM.js";
import {
  classNames
} from "/build/_shared/chunk-RDUJMNM6.js";
import "/build/_shared/chunk-G6LEXIC6.js";
import {
  Price
} from "/build/_shared/chunk-AY65JH6E.js";
import "/build/_shared/chunk-AYBHDJL7.js";
import "/build/_shared/chunk-3AWOV2WX.js";
import {
  C,
  G,
  I,
  I2,
  M,
  N,
  O,
  U,
  c,
  l,
  o,
  o3 as o2,
  o4 as o3,
  p,
  r,
  s2 as s,
  s3 as s2,
  u,
  u2,
  w,
  x,
  y2 as y
} from "/build/_shared/chunk-SHJ2IKH5.js";
import "/build/_shared/chunk-EW2ICRB6.js";
import {
  CheckCircleIcon_default,
  LockClosedIcon_default
} from "/build/_shared/chunk-UAKY2I6L.js";
import {
  useTranslation
} from "/build/_shared/chunk-ATECKQIK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Form,
  useLoaderData,
  useNavigate,
  useOutletContext
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

// app/routes/checkout._index.tsx
var import_react7 = __toESM(require_react(), 1);

// app/components/account/AddressForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/account/AddressForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/account/AddressForm.tsx"
  );
  import.meta.hot.lastModified = "1745508918455.3845";
}
function AddressForm({
  address,
  defaultFullName,
  availableCountries
}) {
  _s();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "fullName", className: "block text-sm font-medium text-gray-700", children: t("account.fullName") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "fullName", name: "fullName", defaultValue: defaultFullName, autoComplete: "given-name", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700", children: t("address.company") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "company", id: "company", defaultValue: address?.company ?? "", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "streetLine1", className: "block text-sm font-medium text-gray-700", children: t("address.streetLine1") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "streetLine1", id: "streetLine1", defaultValue: address?.streetLine1 ?? "", autoComplete: "street-address", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "streetLine2", className: "block text-sm font-medium text-gray-700", children: t("address.streetLine2") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "streetLine2", id: "streetLine2", defaultValue: address?.streetLine2 ?? "", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "city", className: "block text-sm font-medium text-gray-700", children: t("address.city") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "city", id: "city", autoComplete: "address-level2", defaultValue: address?.city ?? "", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "countryCode", className: "block text-sm font-medium text-gray-700", children: t("address.country") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: availableCountries && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "countryCode", name: "countryCode", defaultValue: address?.countryCode ?? "US", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm", children: availableCountries.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: item.code, children: item.name }, item.id, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 84,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 83,
        columnNumber: 34
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "province", className: "block text-sm font-medium text-gray-700", children: t("address.province") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "province", id: "province", defaultValue: address?.province ?? "", autoComplete: "address-level1", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "postalCode", className: "block text-sm font-medium text-gray-700", children: t("address.postalCode") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "postalCode", id: "postalCode", defaultValue: address?.postalCode ?? "", autoComplete: "postal-code", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "phoneNumber", className: "block text-sm font-medium text-gray-700", children: t("address.phoneNumber") }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "phoneNumber", id: "phoneNumber", defaultValue: address?.phoneNumber ?? "", autoComplete: "tel", className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/account/AddressForm.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/account/AddressForm.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/account/AddressForm.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(AddressForm, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = AddressForm;
var _c;
$RefreshReg$(_c, "AddressForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react = __toESM(require_react(), 1);
function T(l2, r2, c3) {
  let [i, s3] = (0, import_react.useState)(c3), e2 = l2 !== void 0, t = (0, import_react.useRef)(e2), u4 = (0, import_react.useRef)(false), d2 = (0, import_react.useRef)(false);
  return e2 && !t.current && !u4.current ? (u4.current = true, t.current = e2, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e2 && t.current && !d2.current && (d2.current = true, t.current = e2, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e2 ? l2 : i, o((n) => (e2 || s3(n), r2 == null ? void 0 : r2(n)))];
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react2 = __toESM(require_react(), 1);
function F({ container: e2, accept: t, walk: r2, enabled: c3 = true }) {
  let o6 = (0, import_react2.useRef)(t), l2 = (0, import_react2.useRef)(r2);
  (0, import_react2.useEffect)(() => {
    o6.current = t, l2.current = r2;
  }, [t, r2]), l(() => {
    if (!e2 || !c3)
      return;
    let n = o2(e2);
    if (!n)
      return;
    let f4 = o6.current, p3 = l2.current, d2 = Object.assign((i) => f4(i), { acceptNode: f4 }), u4 = n.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, d2, false);
    for (; u4.nextNode(); )
      p3(u4.currentNode);
  }, [e2, c3, o6, l2]);
}

// node_modules/@headlessui/react/dist/utils/form.js
function e(i = {}, s3 = null, t = []) {
  for (let [r2, n] of Object.entries(i))
    o5(t, f2(s3, r2), n);
  return t;
}
function f2(i, s3) {
  return i ? i + "[" + s3 + "]" : s3;
}
function o5(i, s3, t) {
  if (Array.isArray(t))
    for (let [r2, n] of t.entries())
      o5(i, f2(s3, r2.toString()), n);
  else
    t instanceof Date ? i.push([s3, t.toISOString()]) : typeof t == "boolean" ? i.push([s3, t ? "1" : "0"]) : typeof t == "string" ? i.push([s3, t]) : typeof t == "number" ? i.push([s3, `${t}`]) : t == null ? i.push([s3, ""]) : e(t, s3, i);
}
function p2(i) {
  var t, r2;
  let s3 = (t = i == null ? void 0 : i.form) != null ? t : i.closest("form");
  if (s3) {
    for (let n of s3.elements)
      if (n !== i && (n.tagName === "INPUT" && n.type === "submit" || n.tagName === "BUTTON" && n.type === "submit" || n.nodeName === "INPUT" && n.type === "image")) {
        n.click();
        return;
      }
    (r2 = s3.requestSubmit) == null || r2.call(s3);
  }
}

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react3 = __toESM(require_react(), 1);
var d = (0, import_react3.createContext)(null);
function u3() {
  let a = (0, import_react3.useContext)(d);
  if (a === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, u3), t;
  }
  return a;
}
function F2() {
  let [a, t] = (0, import_react3.useState)([]);
  return [a.length > 0 ? a.join(" ") : void 0, (0, import_react3.useMemo)(() => function(e2) {
    let s3 = o((r2) => (t((l2) => [...l2, r2]), () => t((l2) => {
      let n = l2.slice(), p3 = n.indexOf(r2);
      return p3 !== -1 && n.splice(p3, 1), n;
    }))), o6 = (0, import_react3.useMemo)(() => ({ register: s3, slot: e2.slot, name: e2.name, props: e2.props }), [s3, e2.slot, e2.name, e2.props]);
    return import_react3.default.createElement(d.Provider, { value: o6 }, e2.children);
  }, [t])];
}
var A = "label";
function h(a, t) {
  let i = I(), { id: e2 = `headlessui-label-${i}`, passive: s3 = false, ...o6 } = a, r2 = u3(), l2 = y(t);
  l(() => r2.register(e2), [e2, r2.register]);
  let n = { ref: l2, ...r2.props, id: e2 };
  return s3 && ("onClick" in n && (delete n.htmlFor, delete n.onClick), "onClick" in o6 && delete o6.onClick), C({ ourProps: n, theirProps: o6, slot: r2.slot || {}, defaultTag: A, name: r2.name || "Label" });
}
var v = U(h);
var B = Object.assign(v, {});

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var Ge = ((t) => (t[t.RegisterOption = 0] = "RegisterOption", t[t.UnregisterOption = 1] = "UnregisterOption", t))(Ge || {});
var Ce = { [0](o6, r2) {
  let t = [...o6.options, { id: r2.id, element: r2.element, propsRef: r2.propsRef }];
  return { ...o6, options: I2(t, (p3) => p3.element.current) };
}, [1](o6, r2) {
  let t = o6.options.slice(), p3 = o6.options.findIndex((T2) => T2.id === r2.id);
  return p3 === -1 ? o6 : (t.splice(p3, 1), { ...o6, options: t });
} };
var B2 = (0, import_react4.createContext)(null);
B2.displayName = "RadioGroupDataContext";
function oe(o6) {
  let r2 = (0, import_react4.useContext)(B2);
  if (r2 === null) {
    let t = new Error(`<${o6} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, oe), t;
  }
  return r2;
}
var $ = (0, import_react4.createContext)(null);
$.displayName = "RadioGroupActionsContext";
function ne(o6) {
  let r2 = (0, import_react4.useContext)($);
  if (r2 === null) {
    let t = new Error(`<${o6} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, ne), t;
  }
  return r2;
}
function ke(o6, r2) {
  return u(r2.type, Ce, o6, r2);
}
var Le = "div";
function he(o6, r2) {
  let t = I(), { id: p3 = `headlessui-radiogroup-${t}`, value: T2, defaultValue: v2, form: M2, name: m3, onChange: H, by: G2 = (e2, i) => e2 === i, disabled: P = false, ...N2 } = o6, y2 = o(typeof G2 == "string" ? (e2, i) => {
    let n = G2;
    return (e2 == null ? void 0 : e2[n]) === (i == null ? void 0 : i[n]);
  } : G2), [A2, L2] = (0, import_react4.useReducer)(ke, { options: [] }), a = A2.options, [h2, R] = F2(), [C2, U2] = w(), k = (0, import_react4.useRef)(null), W = y(k, r2), [l2, s3] = T(T2, H, v2), b2 = (0, import_react4.useMemo)(() => a.find((e2) => !e2.propsRef.current.disabled), [a]), x2 = (0, import_react4.useMemo)(() => a.some((e2) => y2(e2.propsRef.current.value, l2)), [a, l2]), d2 = o((e2) => {
    var n;
    if (P || y2(e2, l2))
      return false;
    let i = (n = a.find((f4) => y2(f4.propsRef.current.value, e2))) == null ? void 0 : n.propsRef.current;
    return i != null && i.disabled ? false : (s3 == null || s3(e2), true);
  });
  F({ container: k.current, accept(e2) {
    return e2.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e2) {
    e2.setAttribute("role", "none");
  } });
  let F3 = o((e2) => {
    let i = k.current;
    if (!i)
      return;
    let n = o2(i), f4 = a.filter((u4) => u4.propsRef.current.disabled === false).map((u4) => u4.element.current);
    switch (e2.key) {
      case o3.Enter:
        p2(e2.currentTarget);
        break;
      case o3.ArrowLeft:
      case o3.ArrowUp:
        if (e2.preventDefault(), e2.stopPropagation(), O(f4, M.Previous | M.WrapAround) === N.Success) {
          let g = a.find((K) => K.element.current === (n == null ? void 0 : n.activeElement));
          g && d2(g.propsRef.current.value);
        }
        break;
      case o3.ArrowRight:
      case o3.ArrowDown:
        if (e2.preventDefault(), e2.stopPropagation(), O(f4, M.Next | M.WrapAround) === N.Success) {
          let g = a.find((K) => K.element.current === (n == null ? void 0 : n.activeElement));
          g && d2(g.propsRef.current.value);
        }
        break;
      case o3.Space:
        {
          e2.preventDefault(), e2.stopPropagation();
          let u4 = a.find((g) => g.element.current === (n == null ? void 0 : n.activeElement));
          u4 && d2(u4.propsRef.current.value);
        }
        break;
    }
  }), c3 = o((e2) => (L2({ type: 0, ...e2 }), () => L2({ type: 1, id: e2.id }))), w2 = (0, import_react4.useMemo)(() => ({ value: l2, firstOption: b2, containsCheckedOption: x2, disabled: P, compare: y2, ...A2 }), [l2, b2, x2, P, y2, A2]), ie = (0, import_react4.useMemo)(() => ({ registerOption: c3, change: d2 }), [c3, d2]), ae = { ref: W, id: p3, role: "radiogroup", "aria-labelledby": h2, "aria-describedby": C2, onKeyDown: F3 }, pe = (0, import_react4.useMemo)(() => ({ value: l2 }), [l2]), I3 = (0, import_react4.useRef)(null), le = p();
  return (0, import_react4.useEffect)(() => {
    I3.current && v2 !== void 0 && le.addEventListener(I3.current, "reset", () => {
      d2(v2);
    });
  }, [I3, d2]), import_react4.default.createElement(U2, { name: "RadioGroup.Description" }, import_react4.default.createElement(R, { name: "RadioGroup.Label" }, import_react4.default.createElement($.Provider, { value: ie }, import_react4.default.createElement(B2.Provider, { value: w2 }, m3 != null && l2 != null && e({ [m3]: l2 }).map(([e2, i], n) => import_react4.default.createElement(u2, { features: s2.Hidden, ref: n === 0 ? (f4) => {
    var u4;
    I3.current = (u4 = f4 == null ? void 0 : f4.closest("form")) != null ? u4 : null;
  } : void 0, ...x({ key: e2, as: "input", type: "radio", checked: i != null, hidden: true, readOnly: true, form: M2, disabled: P, name: e2, value: i }) })), C({ ourProps: ae, theirProps: N2, slot: pe, defaultTag: Le, name: "RadioGroup" })))));
}
var xe = ((t) => (t[t.Empty = 1] = "Empty", t[t.Active = 2] = "Active", t))(xe || {});
var Fe = "div";
function we(o6, r2) {
  var F3;
  let t = I(), { id: p3 = `headlessui-radiogroup-option-${t}`, value: T2, disabled: v2 = false, ...M2 } = o6, m3 = (0, import_react4.useRef)(null), H = y(m3, r2), [G2, P] = F2(), [N2, y2] = w(), { addFlag: A2, removeFlag: L2, hasFlag: a } = c(1), h2 = s({ value: T2, disabled: v2 }), R = oe("RadioGroup.Option"), C2 = ne("RadioGroup.Option");
  l(() => C2.registerOption({ id: p3, element: m3, propsRef: h2 }), [p3, C2, m3, h2]);
  let U2 = o((c3) => {
    var w2;
    if (r(c3.currentTarget))
      return c3.preventDefault();
    C2.change(T2) && (A2(2), (w2 = m3.current) == null || w2.focus());
  }), k = o((c3) => {
    if (r(c3.currentTarget))
      return c3.preventDefault();
    A2(2);
  }), W = o(() => L2(2)), l2 = ((F3 = R.firstOption) == null ? void 0 : F3.id) === p3, s3 = R.disabled || v2, b2 = R.compare(R.value, T2), x2 = { ref: H, id: p3, role: "radio", "aria-checked": b2 ? "true" : "false", "aria-labelledby": G2, "aria-describedby": N2, "aria-disabled": s3 ? true : void 0, tabIndex: (() => s3 ? -1 : b2 || !R.containsCheckedOption && l2 ? 0 : -1)(), onClick: s3 ? void 0 : U2, onFocus: s3 ? void 0 : k, onBlur: s3 ? void 0 : W }, d2 = (0, import_react4.useMemo)(() => ({ checked: b2, disabled: s3, active: a(2) }), [b2, s3, a]);
  return import_react4.default.createElement(y2, { name: "RadioGroup.Description" }, import_react4.default.createElement(P, { name: "RadioGroup.Label" }, C({ ourProps: x2, theirProps: M2, slot: d2, defaultTag: Fe, name: "RadioGroup.Option" })));
}
var Ie = U(he);
var Se = U(we);
var it = Object.assign(Ie, { Option: Se, Label: B, Description: G });

// app/components/checkout/ShippingMethodSelector.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/checkout/ShippingMethodSelector.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/checkout/ShippingMethodSelector.tsx"
  );
  import.meta.hot.lastModified = "1745508918456.5115";
}
function ShippingMethodSelector({
  eligibleShippingMethods,
  currencyCode,
  shippingMethodId,
  onChange
}) {
  _s2();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it, { value: shippingMethodId, onChange, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Label, { className: "text-lg font-medium text-gray-900", children: t("checkout.deliveryMethod") }, void 0, false, {
      fileName: "app/components/checkout/ShippingMethodSelector.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: eligibleShippingMethods.map((shippingMethod) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Option, { value: shippingMethod.id, className: ({
      checked,
      active
    }) => classNames(checked ? "border-transparent" : "border-gray-300", active ? "ring-2 ring-primary-500" : "", "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"), children: ({
      checked,
      active
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex-1 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Label, { as: "span", className: "block text-sm font-medium text-gray-900", children: shippingMethod.name }, void 0, false, {
          fileName: "app/components/checkout/ShippingMethodSelector.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(it.Description, { as: "span", className: "mt-6 text-sm font-medium text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Price, { priceWithTax: shippingMethod.priceWithTax, currencyCode }, void 0, false, {
          fileName: "app/components/checkout/ShippingMethodSelector.tsx",
          lineNumber: 57,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/components/checkout/ShippingMethodSelector.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/checkout/ShippingMethodSelector.tsx",
        lineNumber: 52,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/checkout/ShippingMethodSelector.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      checked ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-primary-600", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/checkout/ShippingMethodSelector.tsx",
        lineNumber: 61,
        columnNumber: 28
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: classNames(active ? "border" : "border-2", checked ? "border-primary-500" : "border-transparent", "absolute -inset-px rounded-lg pointer-events-none"), "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/checkout/ShippingMethodSelector.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/checkout/ShippingMethodSelector.tsx",
      lineNumber: 50,
      columnNumber: 15
    }, this) }, shippingMethod.id, false, {
      fileName: "app/components/checkout/ShippingMethodSelector.tsx",
      lineNumber: 43,
      columnNumber: 56
    }, this)) }, void 0, false, {
      fileName: "app/components/checkout/ShippingMethodSelector.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/checkout/ShippingMethodSelector.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s2(ShippingMethodSelector, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c2 = ShippingMethodSelector;
var _c2;
$RefreshReg$(_c2, "ShippingMethodSelector");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/checkout/ShippingAddressSelector.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/checkout/ShippingAddressSelector.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/checkout/ShippingAddressSelector.tsx"
  );
  import.meta.hot.lastModified = "1745508918456.4346";
}
function ShippingAddressSelector({
  addresses,
  selectedAddressIndex,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(it, { value: selectedAddressIndex, onChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: (addresses || []).map((address, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(it.Option, { value: index, className: ({
    checked,
    active
  }) => classNames(checked ? "border-transparent" : "border-gray-300", active ? "ring-2 ring-primary-500" : "", "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"), children: ({
    checked,
    active
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex-1 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(it.Label, { as: "span", className: "block text-sm font-medium text-gray-900", children: [
        address.streetLine1,
        ", ",
        address.postalCode
      ] }, void 0, true, {
        fileName: "app/components/checkout/ShippingAddressSelector.tsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(it.Description, { as: "span", className: "mt-6 text-sm text-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.streetLine1 }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.streetLine2 }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.city }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.province }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 49,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.postalCode }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 50,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: address.country.name }, void 0, false, {
          fileName: "app/components/checkout/ShippingAddressSelector.tsx",
          lineNumber: 51,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/checkout/ShippingAddressSelector.tsx",
        lineNumber: 45,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/checkout/ShippingAddressSelector.tsx",
        lineNumber: 44,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/checkout/ShippingAddressSelector.tsx",
      lineNumber: 40,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/checkout/ShippingAddressSelector.tsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    checked ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CheckCircleIcon_default, { className: "h-5 w-5 text-primary-600", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/components/checkout/ShippingAddressSelector.tsx",
      lineNumber: 56,
      columnNumber: 28
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: classNames(active ? "border" : "border-2", checked ? "border-primary-500" : "border-transparent", "absolute -inset-px rounded-lg pointer-events-none"), "aria-hidden": "true" }, void 0, false, {
      fileName: "app/components/checkout/ShippingAddressSelector.tsx",
      lineNumber: 57,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/checkout/ShippingAddressSelector.tsx",
    lineNumber: 38,
    columnNumber: 15
  }, this) }, index, false, {
    fileName: "app/components/checkout/ShippingAddressSelector.tsx",
    lineNumber: 31,
    columnNumber: 52
  }, this)) }, void 0, false, {
    fileName: "app/components/checkout/ShippingAddressSelector.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/checkout/ShippingAddressSelector.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c3 = ShippingAddressSelector;
var _c3;
$RefreshReg$(_c3, "ShippingAddressSelector");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/checkout._index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/checkout._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/checkout._index.tsx"
  );
  import.meta.hot.lastModified = "1745508918461.8936";
}
function CheckoutShipping() {
  _s3();
  const {
    availableCountries,
    eligibleShippingMethods,
    activeCustomer,
    error
  } = useLoaderData();
  const {
    activeOrderFetcher,
    activeOrder
  } = useOutletContext();
  const [customerFormChanged, setCustomerFormChanged] = (0, import_react7.useState)(false);
  const [addressFormChanged, setAddressFormChanged] = (0, import_react7.useState)(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = (0, import_react7.useState)(0);
  let navigate = useNavigate();
  const {
    t
  } = useTranslation();
  const {
    customer,
    shippingAddress
  } = activeOrder ?? {};
  const isSignedIn = !!activeCustomer?.id;
  const addresses = activeCustomer?.addresses ?? [];
  const defaultFullName = shippingAddress?.fullName ?? (customer ? `${customer.firstName} ${customer.lastName}` : ``);
  const canProceedToPayment = customer && (shippingAddress?.streetLine1 && shippingAddress?.postalCode || selectedAddressIndex != null) && activeOrder?.shippingLines?.length && activeOrder?.lines?.length;
  const submitCustomerForm = (event) => {
    const formData = new FormData(event.currentTarget);
    const {
      emailAddress,
      firstName,
      lastName
    } = Object.fromEntries(formData.entries());
    const isValid = event.currentTarget.checkValidity();
    if (customerFormChanged && isValid && emailAddress && firstName && lastName) {
      activeOrderFetcher.submit(formData, {
        method: "post",
        action: "/api/active-order"
      });
      setCustomerFormChanged(false);
    }
  };
  const submitAddressForm = (event) => {
    const formData = new FormData(event.currentTarget);
    const isValid = event.currentTarget.checkValidity();
    if (addressFormChanged && isValid) {
      setShippingAddress(formData);
    }
  };
  const submitSelectedAddress = (index) => {
    const selectedAddress = activeCustomer?.addresses?.[index];
    if (selectedAddress) {
      setSelectedAddressIndex(index);
      const formData = new FormData();
      Object.keys(selectedAddress).forEach((key) => formData.append(key, selectedAddress[key]));
      formData.append("countryCode", selectedAddress.country.code);
      formData.append("action", "setCheckoutShipping");
      setShippingAddress(formData);
    }
  };
  function setShippingAddress(formData) {
    if (shippingFormDataIsValid(formData)) {
      activeOrderFetcher.submit(formData, {
        method: "post",
        action: "/api/active-order"
      });
      setAddressFormChanged(false);
    }
  }
  const submitSelectedShippingMethod = (value) => {
    if (value) {
      activeOrderFetcher.submit({
        action: "setShippingMethod",
        shippingMethodId: value
      }, {
        method: "post",
        action: "/api/active-order"
      });
    }
  };
  function navigateToPayment() {
    navigate("./payment");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: t("checkout.detailsTitle") }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, this),
      isSignedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-2 text-gray-600", children: [
          customer?.firstName,
          " ",
          customer?.lastName
        ] }, void 0, true, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: customer?.emailAddress }, void 0, false, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 161,
        columnNumber: 23
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "post", action: "/api/active-order", onBlur: submitCustomerForm, onChange: () => setCustomerFormChanged(true), hidden: isSignedIn, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "action", value: "setOrderCustomer" }, void 0, false, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "emailAddress", className: "block text-sm font-medium text-gray-700", children: t("account.emailAddress") }, void 0, false, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "email", id: "emailAddress", name: "emailAddress", autoComplete: "email", defaultValue: customer?.emailAddress, className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 172,
            columnNumber: 15
          }, this),
          error?.errorCode === "EMAIL_ADDRESS_CONFLICT_ERROR" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-2 text-sm text-red-600", id: "email-error", children: error.message }, void 0, false, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 175,
            columnNumber: 71
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700", children: t("account.firstName") }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 181,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", id: "firstName", name: "firstName", autoComplete: "given-name", defaultValue: customer?.firstName, className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 185,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 184,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700", children: t("account.lastName") }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 190,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", id: "lastName", name: "lastName", autoComplete: "family-name", defaultValue: customer?.lastName, className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm" }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 194,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/checkout._index.tsx",
              lineNumber: 193,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout._index.tsx",
            lineNumber: 189,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout._index.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 166,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "post", action: "/api/active-order", onBlur: submitAddressForm, onChange: () => setAddressFormChanged(true), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "hidden", name: "action", value: "setCheckoutShipping" }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-10 border-t border-gray-200 pt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: t("checkout.shippingTitle") }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 204,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this),
      isSignedIn && activeCustomer.addresses?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ShippingAddressSelector, { addresses: activeCustomer.addresses, selectedAddressIndex, onChange: submitSelectedAddress }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 209,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 208,
        columnNumber: 59
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AddressForm, { availableCountries: activeOrder ? availableCountries : void 0, address: shippingAddress, defaultFullName }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 210,
        columnNumber: 20
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 201,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-10 border-t border-gray-200 pt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ShippingMethodSelector, { eligibleShippingMethods, currencyCode: activeOrder?.currencyCode, shippingMethodId: activeOrder?.shippingLines[0]?.shippingMethod.id ?? "", onChange: submitSelectedShippingMethod }, void 0, false, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 214,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", disabled: !canProceedToPayment, onClick: navigateToPayment, className: classNames(canProceedToPayment ? "bg-primary-600 hover:bg-primary-700" : "bg-gray-400", "flex w-full items-center justify-center space-x-2 mt-24 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LockClosedIcon_default, { className: "w-5 h-5" }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: t("checkout.goToPayment") }, void 0, false, {
        fileName: "app/routes/checkout._index.tsx",
        lineNumber: 219,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout._index.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/checkout._index.tsx",
    lineNumber: 155,
    columnNumber: 10
  }, this);
}
_s3(CheckoutShipping, "/BqNhZzIAIFPjsHoZn9yOKLct+E=", false, function() {
  return [useLoaderData, useOutletContext, useNavigate, useTranslation];
});
_c4 = CheckoutShipping;
var _c4;
$RefreshReg$(_c4, "CheckoutShipping");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CheckoutShipping as default
};
//# sourceMappingURL=/build/routes/checkout._index-B6ETGDXX.js.map

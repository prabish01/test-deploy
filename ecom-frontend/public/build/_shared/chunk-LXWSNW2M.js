import {
  FormElement_default,
  useField
} from "/build/_shared/chunk-GVBBBZ4Y.js";
import {
  clsx_m_default
} from "/build/_shared/chunk-GORBEOCZ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-2D5YPC6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/Input.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Input.tsx"
  );
  import.meta.hot.lastModified = "1745508918454.9495";
}
var Input = _s(import_react.default.forwardRef(_c = _s(({
  name,
  label,
  required,
  ...props
}, ref) => {
  _s();
  const {
    error,
    getInputProps
  } = useField(name);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormElement_default, { name, label, required, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref, ...props, ...getInputProps(), className: clsx_m_default("block w-full py-2 px-4 shadow-sm border bg-white rounded-md text-base sm:text-sm text-gray-900 border-gray-300 placeholder-gray-500", "focus:ring-primary-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:placeholder-gray-400", {
    "border-rose-500 focus:border-rose-500": error
  }, props.className), children: props.children }, void 0, false, {
    fileName: "app/components/Input.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Input.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}, "xc3EQrxToS/RE+RvWstIvn3J9H4=", false, function() {
  return [useField];
})), "xc3EQrxToS/RE+RvWstIvn3J9H4=", false, function() {
  return [useField];
});
_c2 = Input;
var _c;
var _c2;
$RefreshReg$(_c, "Input$React.forwardRef");
$RefreshReg$(_c2, "Input");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Input
};
//# sourceMappingURL=/build/_shared/chunk-LXWSNW2M.js.map

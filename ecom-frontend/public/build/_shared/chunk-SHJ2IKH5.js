import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t7, e, n2) => e in t7 ? i(t7, e, { enumerable: true, configurable: true, writable: true, value: n2 }) : t7[e] = n2;
var r = (t7, e, n2) => (d(t7, typeof e != "symbol" ? e + "" : e, n2), n2);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e) {
    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e, f5) => {
  s.isServer ? (0, import_react.useEffect)(e, f5) : (0, import_react.useLayoutEffect)(e, f5);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e) {
  let r4 = (0, import_react2.useRef)(e);
  return l(() => {
    r4.current = e;
  }, [e]), r4;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react3 = __toESM(require_react(), 1);
var o2 = function(t7) {
  let e = s2(t7);
  return import_react3.default.useCallback((...r4) => e.current(...r4), [e]);
};

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o8) => setTimeout(() => {
    throw o8;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o3() {
  let n2 = [], r4 = { addEventListener(e, t7, s6, a2) {
    return e.addEventListener(t7, s6, a2), r4.add(() => e.removeEventListener(t7, s6, a2));
  }, requestAnimationFrame(...e) {
    let t7 = requestAnimationFrame(...e);
    return r4.add(() => cancelAnimationFrame(t7));
  }, nextFrame(...e) {
    return r4.requestAnimationFrame(() => r4.requestAnimationFrame(...e));
  }, setTimeout(...e) {
    let t7 = setTimeout(...e);
    return r4.add(() => clearTimeout(t7));
  }, microTask(...e) {
    let t7 = { current: true };
    return t3(() => {
      t7.current && e[0]();
    }), r4.add(() => {
      t7.current = false;
    });
  }, style(e, t7, s6) {
    let a2 = e.style.getPropertyValue(t7);
    return Object.assign(e.style, { [t7]: s6 }), this.add(() => {
      Object.assign(e.style, { [t7]: a2 });
    });
  }, group(e) {
    let t7 = o3();
    return e(t7), this.add(() => t7.dispose());
  }, add(e) {
    return n2.push(e), () => {
      let t7 = n2.indexOf(e);
      if (t7 >= 0)
        for (let s6 of n2.splice(t7, 1))
          s6();
    };
  }, dispose() {
    for (let e of n2.splice(0))
      e();
  } };
  return r4;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e] = (0, import_react4.useState)(o3);
  return (0, import_react4.useEffect)(() => () => e.dispose(), [e]), e;
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t4 = __toESM(require_react(), 1);
function s4() {
  let r4 = typeof document == "undefined";
  return "useSyncExternalStore" in t4 ? ((o8) => o8.useSyncExternalStore)(t4)(() => () => {
  }, () => false, () => !r4) : false;
}
function l2() {
  let r4 = s4(), [e, n2] = t4.useState(s.isHandoffComplete);
  return e && s.isHandoffComplete === false && n2(false), t4.useEffect(() => {
    e !== true && n2(true);
  }, [e]), t4.useEffect(() => s.handoff(), []), r4 ? false : e;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react5 = __toESM(require_react(), 1);
var o5;
var I = (o5 = import_react5.default.useId) != null ? o5 : function() {
  let n2 = l2(), [e, u5] = import_react5.default.useState(n2 ? () => s.nextId() : null);
  return l(() => {
    e === null && u5(s.nextId());
  }, [e]), e != null ? "" + e : void 0;
};

// node_modules/@headlessui/react/dist/utils/match.js
function u(r4, n2, ...a2) {
  if (r4 in n2) {
    let e = n2[r4];
    return typeof e == "function" ? e(...a2) : e;
  }
  let t7 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e) => `"${e}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t7, u), t7;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function o6(r4) {
  return s.isServer ? null : r4 instanceof Node ? r4.ownerDocument : r4 != null && r4.hasOwnProperty("current") && r4.current instanceof Node ? r4.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var M = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(M || {});
var N = ((o8) => (o8[o8.Error = 0] = "Error", o8[o8.Overflow = 1] = "Overflow", o8[o8.Success = 2] = "Success", o8[o8.Underflow = 3] = "Underflow", o8))(N || {});
var F = ((t7) => (t7[t7.Previous = -1] = "Previous", t7[t7.Next = 1] = "Next", t7))(F || {});
function f(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(c2)).sort((r4, t7) => Math.sign((r4.tabIndex || Number.MAX_SAFE_INTEGER) - (t7.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t7) => (t7[t7.Strict = 0] = "Strict", t7[t7.Loose = 1] = "Loose", t7))(T || {});
function h(e, r4 = 0) {
  var t7;
  return e === ((t7 = o6(e)) == null ? void 0 : t7.body) ? false : u(r4, { [0]() {
    return e.matches(c2);
  }, [1]() {
    let l6 = e;
    for (; l6 !== null; ) {
      if (l6.matches(c2))
        return true;
      l6 = l6.parentElement;
    }
    return false;
  } });
}
var w = ((t7) => (t7[t7.Keyboard = 0] = "Keyboard", t7[t7.Mouse = 1] = "Mouse", t7))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y(e) {
  e == null || e.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e) {
  var r4, t7;
  return (t7 = (r4 = e == null ? void 0 : e.matches) == null ? void 0 : r4.call(e, S)) != null ? t7 : false;
}
function I2(e, r4 = (t7) => t7) {
  return e.slice().sort((t7, l6) => {
    let o8 = r4(t7), i4 = r4(l6);
    if (o8 === null || i4 === null)
      return 0;
    let n2 = o8.compareDocumentPosition(i4);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function O(e, r4, { sorted: t7 = true, relativeTo: l6 = null, skipElements: o8 = [] } = {}) {
  let i4 = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, n2 = Array.isArray(e) ? t7 ? I2(e) : e : f(e);
  o8.length > 0 && n2.length > 1 && (n2 = n2.filter((s6) => !o8.includes(s6))), l6 = l6 != null ? l6 : i4.activeElement;
  let E2 = (() => {
    if (r4 & 5)
      return 1;
    if (r4 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (r4 & 1)
      return 0;
    if (r4 & 2)
      return Math.max(0, n2.indexOf(l6)) - 1;
    if (r4 & 4)
      return Math.max(0, n2.indexOf(l6)) + 1;
    if (r4 & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p3 = r4 & 32 ? { preventScroll: true } : {}, d3 = 0, a2 = n2.length, u5;
  do {
    if (d3 >= a2 || d3 + a2 <= 0)
      return 0;
    let s6 = x2 + d3;
    if (r4 & 16)
      s6 = (s6 + a2) % a2;
    else {
      if (s6 < 0)
        return 3;
      if (s6 >= a2)
        return 1;
    }
    u5 = n2[s6], u5 == null || u5.focus(p3), d3 += E2;
  } while (u5 !== i4.activeElement);
  return r4 & 6 && H(u5) && u5.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react6 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t7, n2 = true) {
  return Object.assign(t7, { [u2]: n2 });
}
function y2(...t7) {
  let n2 = (0, import_react6.useRef)(t7);
  (0, import_react6.useEffect)(() => {
    n2.current = t7;
  }, [t7]);
  let c4 = o2((e) => {
    for (let o8 of n2.current)
      o8 != null && (typeof o8 == "function" ? o8(e) : o8.current = e);
  });
  return t7.every((e) => e == null || (e == null ? void 0 : e[u2])) ? void 0 : c4;
}

// node_modules/@headlessui/react/dist/utils/class-names.js
function t6(...r4) {
  return Array.from(new Set(r4.flatMap((n2) => typeof n2 == "string" ? n2.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react7 = __toESM(require_react(), 1);
var O2 = ((n2) => (n2[n2.None = 0] = "None", n2[n2.RenderStrategy = 1] = "RenderStrategy", n2[n2.Static = 2] = "Static", n2))(O2 || {});
var v = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(v || {});
function C({ ourProps: r4, theirProps: t7, slot: e, defaultTag: n2, features: o8, visible: a2 = true, name: f5, mergeRefs: l6 }) {
  l6 = l6 != null ? l6 : k;
  let s6 = R(t7, r4);
  if (a2)
    return m(s6, e, n2, f5, l6);
  let y3 = o8 != null ? o8 : 0;
  if (y3 & 2) {
    let { static: u5 = false, ...d3 } = s6;
    if (u5)
      return m(d3, e, n2, f5, l6);
  }
  if (y3 & 1) {
    let { unmount: u5 = true, ...d3 } = s6;
    return u(u5 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return m({ ...d3, hidden: true, style: { display: "none" } }, e, n2, f5, l6);
    } });
  }
  return m(s6, e, n2, f5, l6);
}
function m(r4, t7 = {}, e, n2, o8) {
  let { as: a2 = e, children: f5, refName: l6 = "ref", ...s6 } = F2(r4, ["unmount", "static"]), y3 = r4.ref !== void 0 ? { [l6]: r4.ref } : {}, u5 = typeof f5 == "function" ? f5(t7) : f5;
  "className" in s6 && s6.className && typeof s6.className == "function" && (s6.className = s6.className(t7));
  let d3 = {};
  if (t7) {
    let i4 = false, c4 = [];
    for (let [T4, p3] of Object.entries(t7))
      typeof p3 == "boolean" && (i4 = true), p3 === true && c4.push(T4);
    i4 && (d3["data-headlessui-state"] = c4.join(" "));
  }
  if (a2 === import_react7.Fragment && Object.keys(x(s6)).length > 0) {
    if (!(0, import_react7.isValidElement)(u5) || Array.isArray(u5) && u5.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s6).map((p3) => `  - ${p3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p3) => `  - ${p3}`).join(`
`)].join(`
`));
    let i4 = u5.props, c4 = typeof (i4 == null ? void 0 : i4.className) == "function" ? (...p3) => t6(i4 == null ? void 0 : i4.className(...p3), s6.className) : t6(i4 == null ? void 0 : i4.className, s6.className), T4 = c4 ? { className: c4 } : {};
    return (0, import_react7.cloneElement)(u5, Object.assign({}, R(u5.props, x(F2(s6, ["ref"]))), d3, y3, { ref: o8(u5.ref, y3.ref) }, T4));
  }
  return (0, import_react7.createElement)(a2, Object.assign({}, F2(s6, ["ref"]), a2 !== import_react7.Fragment && y3, a2 !== import_react7.Fragment && d3), u5);
}
function I3() {
  let r4 = (0, import_react7.useRef)([]), t7 = (0, import_react7.useCallback)((e) => {
    for (let n2 of r4.current)
      n2 != null && (typeof n2 == "function" ? n2(e) : n2.current = e);
  }, []);
  return (...e) => {
    if (!e.every((n2) => n2 == null))
      return r4.current = e, t7;
  };
}
function k(...r4) {
  return r4.every((t7) => t7 == null) ? void 0 : (t7) => {
    for (let e of r4)
      e != null && (typeof e == "function" ? e(t7) : e.current = t7);
  };
}
function R(...r4) {
  var n2;
  if (r4.length === 0)
    return {};
  if (r4.length === 1)
    return r4[0];
  let t7 = {}, e = {};
  for (let o8 of r4)
    for (let a2 in o8)
      a2.startsWith("on") && typeof o8[a2] == "function" ? ((n2 = e[a2]) != null || (e[a2] = []), e[a2].push(o8[a2])) : t7[a2] = o8[a2];
  if (t7.disabled || t7["aria-disabled"])
    return Object.assign(t7, Object.fromEntries(Object.keys(e).map((o8) => [o8, void 0])));
  for (let o8 in e)
    Object.assign(t7, { [o8](a2, ...f5) {
      let l6 = e[o8];
      for (let s6 of l6) {
        if ((a2 instanceof Event || (a2 == null ? void 0 : a2.nativeEvent) instanceof Event) && a2.defaultPrevented)
          return;
        s6(a2, ...f5);
      }
    } });
  return t7;
}
function U(r4) {
  var t7;
  return Object.assign((0, import_react7.forwardRef)(r4), { displayName: (t7 = r4.displayName) != null ? t7 : r4.name });
}
function x(r4) {
  let t7 = Object.assign({}, r4);
  for (let e in t7)
    t7[e] === void 0 && delete t7[e];
  return t7;
}
function F2(r4, t7 = []) {
  let e = Object.assign({}, r4);
  for (let n2 of t7)
    n2 in e && delete e[n2];
  return e;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var p2 = "div";
var s5 = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(s5 || {});
function l4(d3, o8) {
  var n2;
  let { features: t7 = 1, ...e } = d3, r4 = { ref: o8, "aria-hidden": (t7 & 2) === 2 ? true : (n2 = e["aria-hidden"]) != null ? n2 : void 0, hidden: (t7 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(t7 & 4) === 4 && (t7 & 2) !== 2 && { display: "none" } } };
  return C({ ourProps: r4, theirProps: e, slot: {}, defaultTag: p2, name: "Hidden" });
}
var u3 = U(l4);

// node_modules/@headlessui/react/dist/utils/bugs.js
function r2(n2) {
  let e = n2.parentElement, l6 = null;
  for (; e && !(e instanceof HTMLFieldSetElement); )
    e instanceof HTMLLegendElement && (l6 = e), e = e.parentElement;
  let t7 = (e == null ? void 0 : e.getAttribute("disabled")) === "";
  return t7 && i3(l6) ? false : t7;
}
function i3(n2) {
  if (!n2)
    return false;
  let e = n2.previousElementSibling;
  for (; e !== null; ) {
    if (e instanceof HTMLLegendElement)
      return false;
    e = e.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o7 = ((r4) => (r4.Space = " ", r4.Enter = "Enter", r4.Escape = "Escape", r4.Backspace = "Backspace", r4.Delete = "Delete", r4.ArrowLeft = "ArrowLeft", r4.ArrowUp = "ArrowUp", r4.ArrowRight = "ArrowRight", r4.ArrowDown = "ArrowDown", r4.Home = "Home", r4.End = "End", r4.PageUp = "PageUp", r4.PageDown = "PageDown", r4.Tab = "Tab", r4))(o7 || {});

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react8 = __toESM(require_react(), 1);
function f2() {
  let e = (0, import_react8.useRef)(false);
  return l(() => (e.current = true, () => {
    e.current = false;
  }), []), e;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react9 = __toESM(require_react(), 1);
var d2 = (0, import_react9.createContext)(null);
function f3() {
  let r4 = (0, import_react9.useContext)(d2);
  if (r4 === null) {
    let t7 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t7, f3), t7;
  }
  return r4;
}
function w2() {
  let [r4, t7] = (0, import_react9.useState)([]);
  return [r4.length > 0 ? r4.join(" ") : void 0, (0, import_react9.useMemo)(() => function(e) {
    let i4 = o2((s6) => (t7((o8) => [...o8, s6]), () => t7((o8) => {
      let p3 = o8.slice(), c4 = p3.indexOf(s6);
      return c4 !== -1 && p3.splice(c4, 1), p3;
    }))), n2 = (0, import_react9.useMemo)(() => ({ register: i4, slot: e.slot, name: e.name, props: e.props }), [i4, e.slot, e.name, e.props]);
    return import_react9.default.createElement(d2.Provider, { value: n2 }, e.children);
  }, [t7])];
}
var I4 = "p";
function S3(r4, t7) {
  let a2 = I(), { id: e = `headlessui-description-${a2}`, ...i4 } = r4, n2 = f3(), s6 = y2(t7);
  l(() => n2.register(e), [e, n2.register]);
  let o8 = { ref: s6, ...n2.props, id: e };
  return C({ ourProps: o8, theirProps: i4, slot: n2.slot || {}, defaultTag: I4, name: n2.name || "Description" });
}
var h3 = U(S3);
var G = Object.assign(h3, {});

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react10 = __toESM(require_react(), 1);
function c3(a2 = 0) {
  let [l6, r4] = (0, import_react10.useState)(a2), t7 = f2(), o8 = (0, import_react10.useCallback)((e) => {
    t7.current && r4((u5) => u5 | e);
  }, [l6, t7]), m3 = (0, import_react10.useCallback)((e) => Boolean(l6 & e), [l6]), s6 = (0, import_react10.useCallback)((e) => {
    t7.current && r4((u5) => u5 & ~e);
  }, [r4, t7]), g2 = (0, import_react10.useCallback)((e) => {
    t7.current && r4((u5) => u5 ^ e);
  }, [r4]);
  return { flags: l6, addFlag: o8, hasFlag: m3, removeFlag: s6, toggleFlag: g2 };
}

export {
  s,
  l,
  s2,
  o2 as o,
  t3 as t,
  o3 as o2,
  p,
  l2,
  I,
  u,
  o6 as o3,
  M,
  N,
  T,
  h,
  y,
  I2,
  O,
  T2,
  y2,
  t6 as t2,
  O2,
  v,
  C,
  I3,
  U,
  x,
  s5 as s3,
  u3 as u2,
  r2 as r,
  o7 as o4,
  f2 as f,
  w2 as w,
  G,
  c3 as c
};
//# sourceMappingURL=/build/_shared/chunk-SHJ2IKH5.js.map

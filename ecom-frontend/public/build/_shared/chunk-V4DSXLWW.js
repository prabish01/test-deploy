import {
  C,
  G,
  I,
  M,
  N,
  O,
  O2,
  T,
  T2,
  U,
  c,
  f,
  h,
  l,
  l2,
  o,
  o2,
  o3,
  o4,
  p,
  r,
  s,
  s2,
  s3,
  t,
  t2,
  u,
  u2,
  v,
  w,
  y,
  y2
} from "/build/_shared/chunk-SHJ2IKH5.js";
import {
  require_react_dom
} from "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react15 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react = __toESM(require_react(), 1);
function E(n6, e3, a6, t12) {
  let i3 = s2(a6);
  (0, import_react.useEffect)(() => {
    n6 = n6 != null ? n6 : window;
    function r5(o5) {
      i3.current(o5);
    }
    return n6.addEventListener(e3, r5, t12), () => n6.removeEventListener(e3, r5, t12);
  }, [n6, e3, t12]);
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react2 = __toESM(require_react(), 1);
function c2(t12) {
  let r5 = o(t12), e3 = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => (e3.current = false, () => {
    e3.current = true, t(() => {
      e3.current && r5();
    });
  }), [r5]);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react3 = __toESM(require_react(), 1);
function n2(...e3) {
  return (0, import_react3.useMemo)(() => o3(...e3), [...e3]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react4 = __toESM(require_react(), 1);
function s4(e3, r5, n6) {
  let o5 = s2(r5);
  (0, import_react4.useEffect)(() => {
    function t12(i3) {
      o5.current(i3);
    }
    return window.addEventListener(e3, t12, n6), () => window.removeEventListener(e3, t12, n6);
  }, [e3, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var s5 = ((r5) => (r5[r5.Forwards = 0] = "Forwards", r5[r5.Backwards = 1] = "Backwards", r5))(s5 || {});
function n3() {
  let e3 = (0, import_react5.useRef)(0);
  return s4("keydown", (o5) => {
    o5.key === "Tab" && (e3.current = o5.shiftKey ? 1 : 0);
  }, true), e3;
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react6 = __toESM(require_react(), 1);
function m(u8, t12) {
  let e3 = (0, import_react6.useRef)([]), r5 = o(u8);
  (0, import_react6.useEffect)(() => {
    let o5 = [...e3.current];
    for (let [n6, a6] of t12.entries())
      if (e3.current[n6] !== a6) {
        let l8 = r5(t12, o5);
        return e3.current = t12, l8;
      }
  }, [r5, ...t12]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t5(n6) {
  function e3() {
    document.readyState !== "loading" && (n6(), document.removeEventListener("DOMContentLoaded", e3));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e3), e3());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var t6 = [];
t5(() => {
  function e3(n6) {
    n6.target instanceof HTMLElement && n6.target !== document.body && t6[0] !== n6.target && (t6.unshift(n6.target), t6 = t6.filter((r5) => r5 != null && r5.isConnected), t6.splice(10));
  }
  window.addEventListener("click", e3, { capture: true }), window.addEventListener("mousedown", e3, { capture: true }), window.addEventListener("focus", e3, { capture: true }), document.body.addEventListener("click", e3, { capture: true }), document.body.addEventListener("mousedown", e3, { capture: true }), document.body.addEventListener("focus", e3, { capture: true });
});

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t12) {
  if (!t12)
    return /* @__PURE__ */ new Set();
  if (typeof t12 == "function")
    return new Set(t12());
  let n6 = /* @__PURE__ */ new Set();
  for (let e3 of t12.current)
    e3.current instanceof HTMLElement && n6.add(e3.current);
  return n6;
}
var X = "div";
var _ = ((r5) => (r5[r5.None = 1] = "None", r5[r5.InitialFocus = 2] = "InitialFocus", r5[r5.TabLock = 4] = "TabLock", r5[r5.FocusLock = 8] = "FocusLock", r5[r5.RestoreFocus = 16] = "RestoreFocus", r5[r5.All = 30] = "All", r5))(_ || {});
function z(t12, n6) {
  let e3 = (0, import_react7.useRef)(null), o5 = y2(e3, n6), { initialFocus: l8, containers: c8, features: r5 = 30, ...s11 } = t12;
  l2() || (r5 = 1);
  let i3 = n2(e3);
  Y({ ownerDocument: i3 }, Boolean(r5 & 16));
  let u8 = Z({ ownerDocument: i3, container: e3, initialFocus: l8 }, Boolean(r5 & 2));
  $({ ownerDocument: i3, container: e3, containers: c8, previousActiveElement: u8 }, Boolean(r5 & 8));
  let y6 = n3(), R2 = o((a6) => {
    let m8 = e3.current;
    if (!m8)
      return;
    ((B) => B())(() => {
      u(y6.current, { [s5.Forwards]: () => {
        O(m8, M.First, { skipElements: [a6.relatedTarget] });
      }, [s5.Backwards]: () => {
        O(m8, M.Last, { skipElements: [a6.relatedTarget] });
      } });
    });
  }), h3 = p(), H2 = (0, import_react7.useRef)(false), j2 = { ref: o5, onKeyDown(a6) {
    a6.key == "Tab" && (H2.current = true, h3.requestAnimationFrame(() => {
      H2.current = false;
    }));
  }, onBlur(a6) {
    let m8 = P(c8);
    e3.current instanceof HTMLElement && m8.add(e3.current);
    let T4 = a6.relatedTarget;
    T4 instanceof HTMLElement && T4.dataset.headlessuiFocusGuard !== "true" && (S(m8, T4) || (H2.current ? O(e3.current, u(y6.current, { [s5.Forwards]: () => M.Next, [s5.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: a6.target }) : a6.target instanceof HTMLElement && y(a6.target)));
  } };
  return import_react7.default.createElement(import_react7.default.Fragment, null, Boolean(r5 & 4) && import_react7.default.createElement(u2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R2, features: s3.Focusable }), C({ ourProps: j2, theirProps: s11, defaultTag: X, name: "FocusTrap" }), Boolean(r5 & 4) && import_react7.default.createElement(u2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R2, features: s3.Focusable }));
}
var D = U(z);
var de = Object.assign(D, { features: _ });
function Q(t12 = true) {
  let n6 = (0, import_react7.useRef)(t6.slice());
  return m(([e3], [o5]) => {
    o5 === true && e3 === false && t(() => {
      n6.current.splice(0);
    }), o5 === false && e3 === true && (n6.current = t6.slice());
  }, [t12, t6, n6]), o(() => {
    var e3;
    return (e3 = n6.current.find((o5) => o5 != null && o5.isConnected)) != null ? e3 : null;
  });
}
function Y({ ownerDocument: t12 }, n6) {
  let e3 = Q(n6);
  m(() => {
    n6 || (t12 == null ? void 0 : t12.activeElement) === (t12 == null ? void 0 : t12.body) && y(e3());
  }, [n6]), c2(() => {
    n6 && y(e3());
  });
}
function Z({ ownerDocument: t12, container: n6, initialFocus: e3 }, o5) {
  let l8 = (0, import_react7.useRef)(null), c8 = f();
  return m(() => {
    if (!o5)
      return;
    let r5 = n6.current;
    r5 && t(() => {
      if (!c8.current)
        return;
      let s11 = t12 == null ? void 0 : t12.activeElement;
      if (e3 != null && e3.current) {
        if ((e3 == null ? void 0 : e3.current) === s11) {
          l8.current = s11;
          return;
        }
      } else if (r5.contains(s11)) {
        l8.current = s11;
        return;
      }
      e3 != null && e3.current ? y(e3.current) : O(r5, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l8.current = t12 == null ? void 0 : t12.activeElement;
    });
  }, [o5]), l8;
}
function $({ ownerDocument: t12, container: n6, containers: e3, previousActiveElement: o5 }, l8) {
  let c8 = f();
  E(t12 == null ? void 0 : t12.defaultView, "focus", (r5) => {
    if (!l8 || !c8.current)
      return;
    let s11 = P(e3);
    n6.current instanceof HTMLElement && s11.add(n6.current);
    let i3 = o5.current;
    if (!i3)
      return;
    let u8 = r5.target;
    u8 && u8 instanceof HTMLElement ? S(s11, u8) ? (o5.current = u8, y(u8)) : (r5.preventDefault(), r5.stopPropagation(), y(i3)) : y(o5.current);
  }, true);
}
function S(t12, n6) {
  for (let e3 of t12)
    if (e3.contains(n6))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react9 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react8 = __toESM(require_react(), 1);
var e = (0, import_react8.createContext)(false);
function a() {
  return (0, import_react8.useContext)(e);
}
function l3(o5) {
  return import_react8.default.createElement(e.Provider, { value: o5.force }, o5.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F(p5) {
  let n6 = a(), l8 = (0, import_react9.useContext)(_2), e3 = n2(p5), [a6, o5] = (0, import_react9.useState)(() => {
    if (!n6 && l8 !== null || s.isServer)
      return null;
    let t12 = e3 == null ? void 0 : e3.getElementById("headlessui-portal-root");
    if (t12)
      return t12;
    if (e3 === null)
      return null;
    let r5 = e3.createElement("div");
    return r5.setAttribute("id", "headlessui-portal-root"), e3.body.appendChild(r5);
  });
  return (0, import_react9.useEffect)(() => {
    a6 !== null && (e3 != null && e3.body.contains(a6) || e3 == null || e3.body.appendChild(a6));
  }, [a6, e3]), (0, import_react9.useEffect)(() => {
    n6 || l8 !== null && o5(l8.current);
  }, [l8, o5, n6]), a6;
}
var U2 = import_react9.Fragment;
function N2(p5, n6) {
  let l8 = p5, e3 = (0, import_react9.useRef)(null), a6 = y2(T2((u8) => {
    e3.current = u8;
  }), n6), o5 = n2(e3), t12 = F(e3), [r5] = (0, import_react9.useState)(() => {
    var u8;
    return s.isServer ? null : (u8 = o5 == null ? void 0 : o5.createElement("div")) != null ? u8 : null;
  }), i3 = (0, import_react9.useContext)(f3), v3 = l2();
  return l(() => {
    !t12 || !r5 || t12.contains(r5) || (r5.setAttribute("data-headlessui-portal", ""), t12.appendChild(r5));
  }, [t12, r5]), l(() => {
    if (r5 && i3)
      return i3.register(r5);
  }, [i3, r5]), c2(() => {
    var u8;
    !t12 || !r5 || (r5 instanceof Node && t12.contains(r5) && t12.removeChild(r5), t12.childNodes.length <= 0 && ((u8 = t12.parentElement) == null || u8.removeChild(t12)));
  }), v3 ? !t12 || !r5 ? null : (0, import_react_dom.createPortal)(C({ ourProps: { ref: a6 }, theirProps: l8, defaultTag: U2, name: "Portal" }), r5) : null;
}
var S2 = import_react9.Fragment;
var _2 = (0, import_react9.createContext)(null);
function j(p5, n6) {
  let { target: l8, ...e3 } = p5, o5 = { ref: y2(n6) };
  return import_react9.default.createElement(_2.Provider, { value: l8 }, C({ ourProps: o5, theirProps: e3, defaultTag: S2, name: "Popover.Group" }));
}
var f3 = (0, import_react9.createContext)(null);
function ee() {
  let p5 = (0, import_react9.useContext)(f3), n6 = (0, import_react9.useRef)([]), l8 = o((o5) => (n6.current.push(o5), p5 && p5.register(o5), () => e3(o5))), e3 = o((o5) => {
    let t12 = n6.current.indexOf(o5);
    t12 !== -1 && n6.current.splice(t12, 1), p5 && p5.unregister(o5);
  }), a6 = (0, import_react9.useMemo)(() => ({ register: l8, unregister: e3, portals: n6 }), [l8, e3, n6]);
  return [n6, (0, import_react9.useMemo)(() => function({ children: t12 }) {
    return import_react9.default.createElement(f3.Provider, { value: a6 }, t12);
  }, [a6])];
}
var D2 = U(N2);
var I2 = U(j);
var te = Object.assign(D2, { Group: I2 });

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l4 = __toESM(require_react(), 1);
function i(e3, t12) {
  return e3 === t12 && (e3 !== 0 || 1 / e3 === 1 / t12) || e3 !== e3 && t12 !== t12;
}
var d5 = typeof Object.is == "function" ? Object.is : i;
var { useState: u4, useEffect: h2, useLayoutEffect: f4, useDebugValue: p2 } = l4;
function y3(e3, t12, c8) {
  const a6 = t12(), [{ inst: n6 }, o5] = u4({ inst: { value: a6, getSnapshot: t12 } });
  return f4(() => {
    n6.value = a6, n6.getSnapshot = t12, r3(n6) && o5({ inst: n6 });
  }, [e3, a6, t12]), h2(() => (r3(n6) && o5({ inst: n6 }), e3(() => {
    r3(n6) && o5({ inst: n6 });
  })), [e3]), p2(a6), a6;
}
function r3(e3) {
  const t12 = e3.getSnapshot, c8 = e3.value;
  try {
    const a6 = t12();
    return !d5(c8, a6);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t8(r5, e3, n6) {
  return e3();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r4 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s8 = !r4;
var c4 = s8 ? t8 : y3;
var a2 = "useSyncExternalStore" in e2 ? ((n6) => n6.useSyncExternalStore)(e2) : c4;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S3(t12) {
  return a2(t12.subscribe, t12.getSnapshot, t12.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a3(o5, r5) {
  let t12 = o5(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t12;
  }, subscribe(e3) {
    return n6.add(e3), () => n6.delete(e3);
  }, dispatch(e3, ...s11) {
    let i3 = r5[e3].call(t12, ...s11);
    i3 && (t12 = i3, n6.forEach((c8) => c8()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c5() {
  let o5;
  return { before({ doc: e3 }) {
    var l8;
    let n6 = e3.documentElement;
    o5 = ((l8 = e3.defaultView) != null ? l8 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e3, d: n6 }) {
    let t12 = e3.documentElement, l8 = t12.clientWidth - t12.offsetWidth, r5 = o5 - l8;
    n6.style(t12, "paddingRight", `${r5}px`);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t9() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i2() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n4() {
  return t9() || i2();
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function d6() {
  return t9() ? { before({ doc: r5, d: l8, meta: c8 }) {
    function o5(a6) {
      return c8.containers.flatMap((n6) => n6()).some((n6) => n6.contains(a6));
    }
    l8.microTask(() => {
      var s11;
      if (window.getComputedStyle(r5.documentElement).scrollBehavior !== "auto") {
        let t12 = o2();
        t12.style(r5.documentElement, "scrollBehavior", "auto"), l8.add(() => l8.microTask(() => t12.dispose()));
      }
      let a6 = (s11 = window.scrollY) != null ? s11 : window.pageYOffset, n6 = null;
      l8.addEventListener(r5, "click", (t12) => {
        if (t12.target instanceof HTMLElement)
          try {
            let e3 = t12.target.closest("a");
            if (!e3)
              return;
            let { hash: f6 } = new URL(e3.href), i3 = r5.querySelector(f6);
            i3 && !o5(i3) && (n6 = i3);
          } catch {
          }
      }, true), l8.addEventListener(r5, "touchstart", (t12) => {
        if (t12.target instanceof HTMLElement)
          if (o5(t12.target)) {
            let e3 = t12.target;
            for (; e3.parentElement && o5(e3.parentElement); )
              e3 = e3.parentElement;
            l8.style(e3, "overscrollBehavior", "contain");
          } else
            l8.style(t12.target, "touchAction", "none");
      }), l8.addEventListener(r5, "touchmove", (t12) => {
        if (t12.target instanceof HTMLElement)
          if (o5(t12.target)) {
            let e3 = t12.target;
            for (; e3.parentElement && e3.dataset.headlessuiPortal !== "" && !(e3.scrollHeight > e3.clientHeight || e3.scrollWidth > e3.clientWidth); )
              e3 = e3.parentElement;
            e3.dataset.headlessuiPortal === "" && t12.preventDefault();
          } else
            t12.preventDefault();
      }, { passive: false }), l8.add(() => {
        var e3;
        let t12 = (e3 = window.scrollY) != null ? e3 : window.pageYOffset;
        a6 !== t12 && window.scrollTo(0, a6), n6 && n6.isConnected && (n6.scrollIntoView({ block: "nearest" }), n6 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l5() {
  return { before({ doc: e3, d: o5 }) {
    o5.style(e3.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m3(e3) {
  let n6 = {};
  for (let t12 of e3)
    Object.assign(n6, t12(n6));
  return n6;
}
var a4 = a3(() => /* @__PURE__ */ new Map(), { PUSH(e3, n6) {
  var o5;
  let t12 = (o5 = this.get(e3)) != null ? o5 : { doc: e3, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t12.count++, t12.meta.add(n6), this.set(e3, t12), this;
}, POP(e3, n6) {
  let t12 = this.get(e3);
  return t12 && (t12.count--, t12.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e3, d: n6, meta: t12 }) {
  let o5 = { doc: e3, d: n6, meta: m3(t12) }, c8 = [d6(), c5(), l5()];
  c8.forEach(({ before: r5 }) => r5 == null ? void 0 : r5(o5)), c8.forEach(({ after: r5 }) => r5 == null ? void 0 : r5(o5));
}, SCROLL_ALLOW({ d: e3 }) {
  e3.dispose();
}, TEARDOWN({ doc: e3 }) {
  this.delete(e3);
} });
a4.subscribe(() => {
  let e3 = a4.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t12] of e3)
    n6.set(t12, t12.documentElement.style.overflow);
  for (let t12 of e3.values()) {
    let o5 = n6.get(t12.doc) === "hidden", c8 = t12.count !== 0;
    (c8 && !o5 || !c8 && o5) && a4.dispatch(t12.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t12), t12.count === 0 && a4.dispatch("TEARDOWN", t12);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p3(e3, r5, n6) {
  let f6 = S3(a4), o5 = e3 ? f6.get(e3) : void 0, i3 = o5 ? o5.count > 0 : false;
  return l(() => {
    if (!(!e3 || !r5))
      return a4.dispatch("PUSH", e3, n6), () => a4.dispatch("POP", e3, n6);
  }, [r5, e3]), i3;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u5 = /* @__PURE__ */ new Map();
var t10 = /* @__PURE__ */ new Map();
function b(r5, l8 = true) {
  l(() => {
    var o5;
    if (!l8)
      return;
    let e3 = typeof r5 == "function" ? r5() : r5.current;
    if (!e3)
      return;
    function a6() {
      var d12;
      if (!e3)
        return;
      let i3 = (d12 = t10.get(e3)) != null ? d12 : 1;
      if (i3 === 1 ? t10.delete(e3) : t10.set(e3, i3 - 1), i3 !== 1)
        return;
      let n6 = u5.get(e3);
      n6 && (n6["aria-hidden"] === null ? e3.removeAttribute("aria-hidden") : e3.setAttribute("aria-hidden", n6["aria-hidden"]), e3.inert = n6.inert, u5.delete(e3));
    }
    let f6 = (o5 = t10.get(e3)) != null ? o5 : 0;
    return t10.set(e3, f6 + 1), f6 !== 0 || (u5.set(e3, { "aria-hidden": e3.getAttribute("aria-hidden"), inert: e3.inert }), e3.setAttribute("aria-hidden", "true"), e3.inert = true), a6;
  }, [r5, l8]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react10 = __toESM(require_react(), 1);
function d7(e3, r5, n6) {
  let o5 = s2(r5);
  (0, import_react10.useEffect)(() => {
    function t12(u8) {
      o5.current(u8);
    }
    return document.addEventListener(e3, t12, n6), () => document.removeEventListener(e3, t12, n6);
  }, [e3, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function y4(s11, m8, a6 = true) {
  let i3 = (0, import_react11.useRef)(false);
  (0, import_react11.useEffect)(() => {
    requestAnimationFrame(() => {
      i3.current = a6;
    });
  }, [a6]);
  function c8(e3, r5) {
    if (!i3.current || e3.defaultPrevented)
      return;
    let t12 = r5(e3);
    if (t12 === null || !t12.getRootNode().contains(t12) || !t12.isConnected)
      return;
    let E4 = function u8(n6) {
      return typeof n6 == "function" ? u8(n6()) : Array.isArray(n6) || n6 instanceof Set ? n6 : [n6];
    }(s11);
    for (let u8 of E4) {
      if (u8 === null)
        continue;
      let n6 = u8 instanceof HTMLElement ? u8 : u8.current;
      if (n6 != null && n6.contains(t12) || e3.composed && e3.composedPath().includes(n6))
        return;
    }
    return !h(t12, T.Loose) && t12.tabIndex !== -1 && e3.preventDefault(), m8(e3, t12);
  }
  let o5 = (0, import_react11.useRef)(null);
  d7("pointerdown", (e3) => {
    var r5, t12;
    i3.current && (o5.current = ((t12 = (r5 = e3.composedPath) == null ? void 0 : r5.call(e3)) == null ? void 0 : t12[0]) || e3.target);
  }, true), d7("mousedown", (e3) => {
    var r5, t12;
    i3.current && (o5.current = ((t12 = (r5 = e3.composedPath) == null ? void 0 : r5.call(e3)) == null ? void 0 : t12[0]) || e3.target);
  }, true), d7("click", (e3) => {
    n4() || o5.current && (c8(e3, () => o5.current), o5.current = null);
  }, true), d7("touchend", (e3) => c8(e3, () => e3.target instanceof HTMLElement ? e3.target : null), true), s4("blur", (e3) => c8(e3, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react12 = __toESM(require_react(), 1);
function N3({ defaultContainers: o5 = [], portals: r5, mainTreeNodeRef: u8 } = {}) {
  var f6;
  let t12 = (0, import_react12.useRef)((f6 = u8 == null ? void 0 : u8.current) != null ? f6 : null), l8 = n2(t12), c8 = o(() => {
    var i3, s11, a6;
    let n6 = [];
    for (let e3 of o5)
      e3 !== null && (e3 instanceof HTMLElement ? n6.push(e3) : "current" in e3 && e3.current instanceof HTMLElement && n6.push(e3.current));
    if (r5 != null && r5.current)
      for (let e3 of r5.current)
        n6.push(e3);
    for (let e3 of (i3 = l8 == null ? void 0 : l8.querySelectorAll("html > *, body > *")) != null ? i3 : [])
      e3 !== document.body && e3 !== document.head && e3 instanceof HTMLElement && e3.id !== "headlessui-portal-root" && (e3.contains(t12.current) || e3.contains((a6 = (s11 = t12.current) == null ? void 0 : s11.getRootNode()) == null ? void 0 : a6.host) || n6.some((L) => e3.contains(L)) || n6.push(e3));
    return n6;
  });
  return { resolveContainers: c8, contains: o((n6) => c8().some((i3) => i3.contains(n6))), mainTreeNodeRef: t12, MainTreeNode: (0, import_react12.useMemo)(() => function() {
    return u8 != null ? null : import_react12.default.createElement(u2, { features: s3.Hidden, ref: t12 });
  }, [t12, u8]) };
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react13 = __toESM(require_react(), 1);
var n5 = (0, import_react13.createContext)(null);
n5.displayName = "OpenClosedContext";
var d10 = ((e3) => (e3[e3.Open = 1] = "Open", e3[e3.Closed = 2] = "Closed", e3[e3.Closing = 4] = "Closing", e3[e3.Opening = 8] = "Opening", e3))(d10 || {});
function u6() {
  return (0, import_react13.useContext)(n5);
}
function s9({ value: o5, children: r5 }) {
  return import_react13.default.createElement(n5.Provider, { value: o5 }, r5);
}

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react14 = __toESM(require_react(), 1);
var a5 = (0, import_react14.createContext)(() => {
});
a5.displayName = "StackContext";
var s10 = ((e3) => (e3[e3.Add = 0] = "Add", e3[e3.Remove = 1] = "Remove", e3))(s10 || {});
function x() {
  return (0, import_react14.useContext)(a5);
}
function b2({ children: i3, onUpdate: r5, type: e3, element: n6, enabled: u8 }) {
  let l8 = x(), o5 = o((...t12) => {
    r5 == null || r5(...t12), l8(...t12);
  });
  return l(() => {
    let t12 = u8 === void 0 || u8 === true;
    return t12 && o5(0, e3, n6), () => {
      t12 && o5(1, e3, n6);
    };
  }, [o5, e3, n6, u8]), import_react14.default.createElement(a5.Provider, { value: o5 }, i3);
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Me = ((r5) => (r5[r5.Open = 0] = "Open", r5[r5.Closed = 1] = "Closed", r5))(Me || {});
var we = ((e3) => (e3[e3.SetTitleId = 0] = "SetTitleId", e3))(we || {});
var He = { [0](o5, e3) {
  return o5.titleId === e3.id ? o5 : { ...o5, titleId: e3.id };
} };
var I3 = (0, import_react15.createContext)(null);
I3.displayName = "DialogContext";
function b3(o5) {
  let e3 = (0, import_react15.useContext)(I3);
  if (e3 === null) {
    let r5 = new Error(`<${o5} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, b3), r5;
  }
  return e3;
}
function Be(o5, e3, r5 = () => [document.body]) {
  p3(o5, e3, (i3) => {
    var n6;
    return { containers: [...(n6 = i3.containers) != null ? n6 : [], r5] };
  });
}
function Ge(o5, e3) {
  return u(e3.type, He, o5, e3);
}
var Ne = "div";
var Ue = O2.RenderStrategy | O2.Static;
function We(o5, e3) {
  let r5 = I(), { id: i3 = `headlessui-dialog-${r5}`, open: n6, onClose: l8, initialFocus: s11, role: a6 = "dialog", __demoMode: T4 = false, ...m8 } = o5, [M5, f6] = (0, import_react15.useState)(0), U4 = (0, import_react15.useRef)(false);
  a6 = function() {
    return a6 === "dialog" || a6 === "alertdialog" ? a6 : (U4.current || (U4.current = true, console.warn(`Invalid role [${a6}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let E4 = u6();
  n6 === void 0 && E4 !== null && (n6 = (E4 & d10.Open) === d10.Open);
  let D4 = (0, import_react15.useRef)(null), ee3 = y2(D4, e3), g3 = n2(D4), W = o5.hasOwnProperty("open") || E4 !== null, $3 = o5.hasOwnProperty("onClose");
  if (!W && !$3)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!W)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!$3)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n6 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n6}`);
  if (typeof l8 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l8}`);
  let p5 = n6 ? 0 : 1, [h3, te2] = (0, import_react15.useReducer)(Ge, { titleId: null, descriptionId: null, panelRef: (0, import_react15.createRef)() }), P3 = o(() => l8(false)), Y2 = o((t12) => te2({ type: 0, id: t12 })), S5 = l2() ? T4 ? false : p5 === 0 : false, x2 = M5 > 1, j2 = (0, import_react15.useContext)(I3) !== null, [oe, re] = ee(), ne = { get current() {
    var t12;
    return (t12 = h3.panelRef.current) != null ? t12 : D4.current;
  } }, { resolveContainers: w2, mainTreeNodeRef: L, MainTreeNode: le2 } = N3({ portals: oe, defaultContainers: [ne] }), ae2 = x2 ? "parent" : "leaf", J2 = E4 !== null ? (E4 & d10.Closing) === d10.Closing : false, ie = (() => j2 || J2 ? false : S5)(), se2 = (0, import_react15.useCallback)(() => {
    var t12, c8;
    return (c8 = Array.from((t12 = g3 == null ? void 0 : g3.querySelectorAll("body > *")) != null ? t12 : []).find((d12) => d12.id === "headlessui-portal-root" ? false : d12.contains(L.current) && d12 instanceof HTMLElement)) != null ? c8 : null;
  }, [L]);
  b(se2, ie);
  let pe = (() => x2 ? true : S5)(), de2 = (0, import_react15.useCallback)(() => {
    var t12, c8;
    return (c8 = Array.from((t12 = g3 == null ? void 0 : g3.querySelectorAll("[data-headlessui-portal]")) != null ? t12 : []).find((d12) => d12.contains(L.current) && d12 instanceof HTMLElement)) != null ? c8 : null;
  }, [L]);
  b(de2, pe);
  let ue2 = (() => !(!S5 || x2))();
  y4(w2, (t12) => {
    t12.preventDefault(), P3();
  }, ue2);
  let fe = (() => !(x2 || p5 !== 0))();
  E(g3 == null ? void 0 : g3.defaultView, "keydown", (t12) => {
    fe && (t12.defaultPrevented || t12.key === o4.Escape && (t12.preventDefault(), t12.stopPropagation(), P3()));
  });
  let ge = (() => !(J2 || p5 !== 0 || j2))();
  Be(g3, ge, w2), (0, import_react15.useEffect)(() => {
    if (p5 !== 0 || !D4.current)
      return;
    let t12 = new ResizeObserver((c8) => {
      for (let d12 of c8) {
        let F3 = d12.target.getBoundingClientRect();
        F3.x === 0 && F3.y === 0 && F3.width === 0 && F3.height === 0 && P3();
      }
    });
    return t12.observe(D4.current), () => t12.disconnect();
  }, [p5, D4, P3]);
  let [Te, ce] = w(), De2 = (0, import_react15.useMemo)(() => [{ dialogState: p5, close: P3, setTitleId: Y2 }, h3], [p5, h3, P3, Y2]), X3 = (0, import_react15.useMemo)(() => ({ open: p5 === 0 }), [p5]), me = { ref: ee3, id: i3, role: a6, "aria-modal": p5 === 0 ? true : void 0, "aria-labelledby": h3.titleId, "aria-describedby": Te };
  return import_react15.default.createElement(b2, { type: "Dialog", enabled: p5 === 0, element: D4, onUpdate: o((t12, c8) => {
    c8 === "Dialog" && u(t12, { [s10.Add]: () => f6((d12) => d12 + 1), [s10.Remove]: () => f6((d12) => d12 - 1) });
  }) }, import_react15.default.createElement(l3, { force: true }, import_react15.default.createElement(te, null, import_react15.default.createElement(I3.Provider, { value: De2 }, import_react15.default.createElement(te.Group, { target: D4 }, import_react15.default.createElement(l3, { force: false }, import_react15.default.createElement(ce, { slot: X3, name: "Dialog.Description" }, import_react15.default.createElement(de, { initialFocus: s11, containers: w2, features: S5 ? u(ae2, { parent: de.features.RestoreFocus, leaf: de.features.All & ~de.features.FocusLock }) : de.features.None }, import_react15.default.createElement(re, null, C({ ourProps: me, theirProps: m8, slot: X3, defaultTag: Ne, features: Ue, visible: p5 === 0, name: "Dialog" }))))))))), import_react15.default.createElement(le2, null));
}
var $e = "div";
function Ye(o5, e3) {
  let r5 = I(), { id: i3 = `headlessui-dialog-overlay-${r5}`, ...n6 } = o5, [{ dialogState: l8, close: s11 }] = b3("Dialog.Overlay"), a6 = y2(e3), T4 = o((f6) => {
    if (f6.target === f6.currentTarget) {
      if (r(f6.currentTarget))
        return f6.preventDefault();
      f6.preventDefault(), f6.stopPropagation(), s11();
    }
  }), m8 = (0, import_react15.useMemo)(() => ({ open: l8 === 0 }), [l8]);
  return C({ ourProps: { ref: a6, id: i3, "aria-hidden": true, onClick: T4 }, theirProps: n6, slot: m8, defaultTag: $e, name: "Dialog.Overlay" });
}
var je = "div";
function Je(o5, e3) {
  let r5 = I(), { id: i3 = `headlessui-dialog-backdrop-${r5}`, ...n6 } = o5, [{ dialogState: l8 }, s11] = b3("Dialog.Backdrop"), a6 = y2(e3);
  (0, import_react15.useEffect)(() => {
    if (s11.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s11.panelRef]);
  let T4 = (0, import_react15.useMemo)(() => ({ open: l8 === 0 }), [l8]);
  return import_react15.default.createElement(l3, { force: true }, import_react15.default.createElement(te, null, C({ ourProps: { ref: a6, id: i3, "aria-hidden": true }, theirProps: n6, slot: T4, defaultTag: je, name: "Dialog.Backdrop" })));
}
var Xe = "div";
function Ke(o5, e3) {
  let r5 = I(), { id: i3 = `headlessui-dialog-panel-${r5}`, ...n6 } = o5, [{ dialogState: l8 }, s11] = b3("Dialog.Panel"), a6 = y2(e3, s11.panelRef), T4 = (0, import_react15.useMemo)(() => ({ open: l8 === 0 }), [l8]), m8 = o((f6) => {
    f6.stopPropagation();
  });
  return C({ ourProps: { ref: a6, id: i3, onClick: m8 }, theirProps: n6, slot: T4, defaultTag: Xe, name: "Dialog.Panel" });
}
var Ve = "h2";
function qe(o5, e3) {
  let r5 = I(), { id: i3 = `headlessui-dialog-title-${r5}`, ...n6 } = o5, [{ dialogState: l8, setTitleId: s11 }] = b3("Dialog.Title"), a6 = y2(e3);
  (0, import_react15.useEffect)(() => (s11(i3), () => s11(null)), [i3, s11]);
  let T4 = (0, import_react15.useMemo)(() => ({ open: l8 === 0 }), [l8]);
  return C({ ourProps: { ref: a6, id: i3 }, theirProps: n6, slot: T4, defaultTag: Ve, name: "Dialog.Title" });
}
var ze = U(We);
var Qe = U(Je);
var Ze = U(Ke);
var et = U(Ye);
var tt = U(qe);
var _t = Object.assign(ze, { Backdrop: Qe, Panel: Ze, Overlay: et, Title: tt, Description: G });

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react16 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l7(r5) {
  let e3 = { called: false };
  return (...t12) => {
    if (!e3.called)
      return e3.called = true, r5(...t12);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function g2(t12, ...e3) {
  t12 && e3.length > 0 && t12.classList.add(...e3);
}
function v2(t12, ...e3) {
  t12 && e3.length > 0 && t12.classList.remove(...e3);
}
function b4(t12, e3) {
  let n6 = o2();
  if (!t12)
    return n6.dispose;
  let { transitionDuration: m8, transitionDelay: a6 } = getComputedStyle(t12), [u8, p5] = [m8, a6].map((l8) => {
    let [r5 = 0] = l8.split(",").filter(Boolean).map((i3) => i3.includes("ms") ? parseFloat(i3) : parseFloat(i3) * 1e3).sort((i3, T4) => T4 - i3);
    return r5;
  }), o5 = u8 + p5;
  if (o5 !== 0) {
    n6.group((r5) => {
      r5.setTimeout(() => {
        e3(), r5.dispose();
      }, o5), r5.addEventListener(t12, "transitionrun", (i3) => {
        i3.target === i3.currentTarget && r5.dispose();
      });
    });
    let l8 = n6.addEventListener(t12, "transitionend", (r5) => {
      r5.target === r5.currentTarget && (e3(), l8());
    });
  } else
    e3();
  return n6.add(() => e3()), n6.dispose;
}
function M3(t12, e3, n6, m8) {
  let a6 = n6 ? "enter" : "leave", u8 = o2(), p5 = m8 !== void 0 ? l7(m8) : () => {
  };
  a6 === "enter" && (t12.removeAttribute("hidden"), t12.style.display = "");
  let o5 = u(a6, { enter: () => e3.enter, leave: () => e3.leave }), l8 = u(a6, { enter: () => e3.enterTo, leave: () => e3.leaveTo }), r5 = u(a6, { enter: () => e3.enterFrom, leave: () => e3.leaveFrom });
  return v2(t12, ...e3.base, ...e3.enter, ...e3.enterTo, ...e3.enterFrom, ...e3.leave, ...e3.leaveFrom, ...e3.leaveTo, ...e3.entered), g2(t12, ...e3.base, ...o5, ...r5), u8.nextFrame(() => {
    v2(t12, ...e3.base, ...o5, ...r5), g2(t12, ...e3.base, ...o5, ...l8), b4(t12, () => (v2(t12, ...e3.base, ...o5), g2(t12, ...e3.base, ...e3.entered), p5()));
  }), u8.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D3({ immediate: t12, container: s11, direction: n6, classes: u8, onStart: a6, onStop: c8 }) {
  let l8 = f(), d12 = p(), e3 = s2(n6);
  l(() => {
    t12 && (e3.current = "enter");
  }, [t12]), l(() => {
    let r5 = o2();
    d12.add(r5.dispose);
    let i3 = s11.current;
    if (i3 && e3.current !== "idle" && l8.current)
      return r5.dispose(), a6.current(e3.current), r5.add(M3(i3, u8.current, e3.current === "enter", () => {
        r5.dispose(), c8.current(e3.current);
      })), r5.dispose;
  }, [n6]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S4(t12 = "") {
  return t12.split(/\s+/).filter((n6) => n6.length > 1);
}
var I4 = (0, import_react16.createContext)(null);
I4.displayName = "TransitionContext";
var Se = ((r5) => (r5.Visible = "visible", r5.Hidden = "hidden", r5))(Se || {});
function ye2() {
  let t12 = (0, import_react16.useContext)(I4);
  if (t12 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t12;
}
function xe() {
  let t12 = (0, import_react16.useContext)(M4);
  if (t12 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t12;
}
var M4 = (0, import_react16.createContext)(null);
M4.displayName = "NestingContext";
function U3(t12) {
  return "children" in t12 ? U3(t12.children) : t12.current.filter(({ el: n6 }) => n6.current !== null).filter(({ state: n6 }) => n6 === "visible").length > 0;
}
function se(t12, n6) {
  let r5 = s2(t12), s11 = (0, import_react16.useRef)([]), R2 = f(), D4 = p(), p5 = o((i3, e3 = v.Hidden) => {
    let a6 = s11.current.findIndex(({ el: o5 }) => o5 === i3);
    a6 !== -1 && (u(e3, { [v.Unmount]() {
      s11.current.splice(a6, 1);
    }, [v.Hidden]() {
      s11.current[a6].state = "hidden";
    } }), D4.microTask(() => {
      var o5;
      !U3(s11) && R2.current && ((o5 = r5.current) == null || o5.call(r5));
    }));
  }), x2 = o((i3) => {
    let e3 = s11.current.find(({ el: a6 }) => a6 === i3);
    return e3 ? e3.state !== "visible" && (e3.state = "visible") : s11.current.push({ el: i3, state: "visible" }), () => p5(i3, v.Unmount);
  }), h3 = (0, import_react16.useRef)([]), v3 = (0, import_react16.useRef)(Promise.resolve()), u8 = (0, import_react16.useRef)({ enter: [], leave: [], idle: [] }), g3 = o((i3, e3, a6) => {
    h3.current.splice(0), n6 && (n6.chains.current[e3] = n6.chains.current[e3].filter(([o5]) => o5 !== i3)), n6 == null || n6.chains.current[e3].push([i3, new Promise((o5) => {
      h3.current.push(o5);
    })]), n6 == null || n6.chains.current[e3].push([i3, new Promise((o5) => {
      Promise.all(u8.current[e3].map(([f6, N4]) => N4)).then(() => o5());
    })]), e3 === "enter" ? v3.current = v3.current.then(() => n6 == null ? void 0 : n6.wait.current).then(() => a6(e3)) : a6(e3);
  }), d12 = o((i3, e3, a6) => {
    Promise.all(u8.current[e3].splice(0).map(([o5, f6]) => f6)).then(() => {
      var o5;
      (o5 = h3.current.shift()) == null || o5();
    }).then(() => a6(e3));
  });
  return (0, import_react16.useMemo)(() => ({ children: s11, register: x2, unregister: p5, onStart: g3, onStop: d12, wait: v3, chains: u8 }), [x2, p5, s11, g3, d12, u8, v3]);
}
function Ne2() {
}
var Pe2 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ae(t12) {
  var r5;
  let n6 = {};
  for (let s11 of Pe2)
    n6[s11] = (r5 = t12[s11]) != null ? r5 : Ne2;
  return n6;
}
function Re(t12) {
  let n6 = (0, import_react16.useRef)(ae(t12));
  return (0, import_react16.useEffect)(() => {
    n6.current = ae(t12);
  }, [t12]), n6;
}
var De = "div";
var le = O2.RenderStrategy;
function He2(t12, n6) {
  var Q2, Y2;
  let { beforeEnter: r5, afterEnter: s11, beforeLeave: R2, afterLeave: D4, enter: p5, enterFrom: x2, enterTo: h3, entered: v3, leave: u8, leaveFrom: g3, leaveTo: d12, ...i3 } = t12, e3 = (0, import_react16.useRef)(null), a6 = y2(e3, n6), o5 = (Q2 = i3.unmount) == null || Q2 ? v.Unmount : v.Hidden, { show: f6, appear: N4, initial: T4 } = ye2(), [l8, j2] = (0, import_react16.useState)(f6 ? "visible" : "hidden"), z2 = xe(), { register: L, unregister: O3 } = z2;
  (0, import_react16.useEffect)(() => L(e3), [L, e3]), (0, import_react16.useEffect)(() => {
    if (o5 === v.Hidden && e3.current) {
      if (f6 && l8 !== "visible") {
        j2("visible");
        return;
      }
      return u(l8, { ["hidden"]: () => O3(e3), ["visible"]: () => L(e3) });
    }
  }, [l8, e3, L, O3, f6, o5]);
  let k = s2({ base: S4(i3.className), enter: S4(p5), enterFrom: S4(x2), enterTo: S4(h3), entered: S4(v3), leave: S4(u8), leaveFrom: S4(g3), leaveTo: S4(d12) }), V2 = Re({ beforeEnter: r5, afterEnter: s11, beforeLeave: R2, afterLeave: D4 }), G2 = l2();
  (0, import_react16.useEffect)(() => {
    if (G2 && l8 === "visible" && e3.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e3, l8, G2]);
  let Te = T4 && !N4, K2 = N4 && f6 && T4, de2 = (() => !G2 || Te ? "idle" : f6 ? "enter" : "leave")(), H2 = c(0), fe = o((C3) => u(C3, { enter: () => {
    H2.addFlag(d10.Opening), V2.current.beforeEnter();
  }, leave: () => {
    H2.addFlag(d10.Closing), V2.current.beforeLeave();
  }, idle: () => {
  } })), me = o((C3) => u(C3, { enter: () => {
    H2.removeFlag(d10.Opening), V2.current.afterEnter();
  }, leave: () => {
    H2.removeFlag(d10.Closing), V2.current.afterLeave();
  }, idle: () => {
  } })), w2 = se(() => {
    j2("hidden"), O3(e3);
  }, z2), B = (0, import_react16.useRef)(false);
  D3({ immediate: K2, container: e3, classes: k, direction: de2, onStart: s2((C3) => {
    B.current = true, w2.onStart(e3, C3, fe);
  }), onStop: s2((C3) => {
    B.current = false, w2.onStop(e3, C3, me), C3 === "leave" && !U3(w2) && (j2("hidden"), O3(e3));
  }) });
  let P3 = i3, ce = { ref: a6 };
  return K2 ? P3 = { ...P3, className: t2(i3.className, ...k.current.enter, ...k.current.enterFrom) } : B.current && (P3.className = t2(i3.className, (Y2 = e3.current) == null ? void 0 : Y2.className), P3.className === "" && delete P3.className), import_react16.default.createElement(M4.Provider, { value: w2 }, import_react16.default.createElement(s9, { value: u(l8, { ["visible"]: d10.Open, ["hidden"]: d10.Closed }) | H2.flags }, C({ ourProps: ce, theirProps: P3, defaultTag: De, features: le, visible: l8 === "visible", name: "Transition.Child" })));
}
function Fe(t12, n6) {
  let { show: r5, appear: s11 = false, unmount: R2 = true, ...D4 } = t12, p5 = (0, import_react16.useRef)(null), x2 = y2(p5, n6);
  l2();
  let h3 = u6();
  if (r5 === void 0 && h3 !== null && (r5 = (h3 & d10.Open) === d10.Open), ![true, false].includes(r5))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v3, u8] = (0, import_react16.useState)(r5 ? "visible" : "hidden"), g3 = se(() => {
    u8("hidden");
  }), [d12, i3] = (0, import_react16.useState)(true), e3 = (0, import_react16.useRef)([r5]);
  l(() => {
    d12 !== false && e3.current[e3.current.length - 1] !== r5 && (e3.current.push(r5), i3(false));
  }, [e3, r5]);
  let a6 = (0, import_react16.useMemo)(() => ({ show: r5, appear: s11, initial: d12 }), [r5, s11, d12]);
  (0, import_react16.useEffect)(() => {
    if (r5)
      u8("visible");
    else if (!U3(g3))
      u8("hidden");
    else {
      let T4 = p5.current;
      if (!T4)
        return;
      let l8 = T4.getBoundingClientRect();
      l8.x === 0 && l8.y === 0 && l8.width === 0 && l8.height === 0 && u8("hidden");
    }
  }, [r5, g3]);
  let o5 = { unmount: R2 }, f6 = o(() => {
    var T4;
    d12 && i3(false), (T4 = t12.beforeEnter) == null || T4.call(t12);
  }), N4 = o(() => {
    var T4;
    d12 && i3(false), (T4 = t12.beforeLeave) == null || T4.call(t12);
  });
  return import_react16.default.createElement(M4.Provider, { value: g3 }, import_react16.default.createElement(I4.Provider, { value: a6 }, C({ ourProps: { ...o5, as: import_react16.Fragment, children: import_react16.default.createElement(ue, { ref: x2, ...o5, ...D4, beforeEnter: f6, beforeLeave: N4 }) }, theirProps: {}, defaultTag: import_react16.Fragment, features: le, visible: v3 === "visible", name: "Transition" })));
}
function _e(t12, n6) {
  let r5 = (0, import_react16.useContext)(I4) !== null, s11 = u6() !== null;
  return import_react16.default.createElement(import_react16.default.Fragment, null, !r5 && s11 ? import_react16.default.createElement(q2, { ref: n6, ...t12 }) : import_react16.default.createElement(ue, { ref: n6, ...t12 }));
}
var q2 = U(Fe);
var ue = U(He2);
var Le = U(_e);
var qe2 = Object.assign(q2, { Child: Le, Root: q2 });

export {
  d10 as d,
  u6 as u,
  s9 as s,
  _t,
  qe2 as qe
};
//# sourceMappingURL=/build/_shared/chunk-V4DSXLWW.js.map

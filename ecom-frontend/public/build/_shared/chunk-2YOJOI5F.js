import {
  createHotContext
} from "/build/_shared/chunk-2D5YPC6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/utils/use-toggle-state.tsx
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/use-toggle-state.tsx"
  );
  import.meta.hot.lastModified = "1745508918464.2178";
}
var useToggleState = (initialState = false) => {
  const [state, setState] = (0, import_react.useState)(initialState);
  const close = () => {
    setState(false);
  };
  const open = () => {
    setState(true);
  };
  const toggle = () => {
    setState((state2) => !state2);
  };
  const hookData = [state, open, close, toggle];
  hookData.state = state;
  hookData.open = open;
  hookData.close = close;
  hookData.toggle = toggle;
  return hookData;
};
var use_toggle_state_default = useToggleState;

export {
  use_toggle_state_default
};
//# sourceMappingURL=/build/_shared/chunk-2YOJOI5F.js.map

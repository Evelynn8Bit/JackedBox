import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ToggleUI from "./ToggleUI";
import { Button } from "./components/ui/button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button>Hello</Button>
  </StrictMode>
);

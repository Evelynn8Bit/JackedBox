import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";
import { Leva } from "leva";
import { StrictMode } from "react";

function Main() {
  return (
    <StrictMode>
      <>
        <Leva />
        <App />
      </>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);

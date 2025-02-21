import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";
import { StrictMode } from "react";

function Main() {
  return (
    <StrictMode>
      <>
        <App />
      </>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);

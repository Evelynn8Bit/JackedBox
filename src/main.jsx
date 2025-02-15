import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";
import { StrictMode } from "react";
import { User } from "./User";

function Main() {
  return (
    <StrictMode>
      <>
        <User />
        <App />
      </>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Main />);

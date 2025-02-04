import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-pink-500 py-2 px-4 rounded-lg cursor-pointer hover:bg-pink-600 hover:text-blue-900">
      Menu
    </div>
  </StrictMode>
);

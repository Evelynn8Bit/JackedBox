import { useState, useRef } from "react";
import { AuthProvider } from "./contexts/authContext";
import { Toaster } from "react-hot-toast";

export const MenuPannel = ({ id, toggled, className, children }) => {
  const [isOpen, toggleOpen] = useState(toggled ?? true);

  const toggle = () => {
    toggleOpen(!isOpen);
  };

  let menu = useRef();
  return (
    <section
      id={id}
      toggled={isOpen.toString()}
      ref={menu}
      className={className + " menu__item"}
      onClick={toggle}>
      <AuthProvider>
        <Toaster
          position="top-center"
          onClick={() => {
            console.log("toaster clicked");
          }}
        />
        {children}
      </AuthProvider>
    </section>
  );
};

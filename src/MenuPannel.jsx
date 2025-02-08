import { useState, useRef } from "react";

export const MenuPannel = ({ id, toggled, className, children }) => {
  const user = "Evelynn";
  const [isOpen, toggleOpen] = useState(toggled ?? true);
  const toggle = () => {
    toggleOpen(!isOpen);
  };

  let menu = useRef();
  return (
    <section
      toggled={isOpen.toString()}
      ref={menu}
      className={className + " menu__item"}
      onClick={toggle}
    >
      {children}
    </section>
  );
};

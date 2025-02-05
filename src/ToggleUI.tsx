import { useState, useEffect } from "react";

// ToggleUI Component
const ToggleUI = ({ menu: MenuComponent }) => {
  // Toggle Menu with Button
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Toggle Menu with Escape Key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggle();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={toggle}>{isOpen ? "Close" : "Open"} Menu</button>
      {isOpen && (
        <div className="menu__wrapper" onClick={toggle}>
          <div
            className="menu__item"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* The Menu */}
            <MenuComponent />
          </div>
        </div>
      )}
    </>
  );
};

export default ToggleUI;

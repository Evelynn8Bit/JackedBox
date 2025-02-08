import { MenuPannel } from "./MenuPannel";
export const UI = () => {
  return (
    <main id="UI">
      <MenuPannel id={"other"} className="half collapse-x">
        <h2>Other</h2>
        <div className="menu__item-content">Content</div>
      </MenuPannel>
      <MenuPannel id={"user"} className="full collpase-y">
        <div className="profile">
          <div className="pfp"></div>
          <h2>{user ?? null}</h2>
        </div>
        <div className="menu__item-content">Content</div>
      </MenuPannel>
    </main>
  );
};

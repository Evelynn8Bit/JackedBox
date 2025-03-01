import { MenuPannel } from "./MenuPannel";
import { UserProfile } from "./components/UserProfile";
export const UI = () => {
  return (
    <main id="UI">
      {/* GAME MENU */}
      <MenuPannel
        id={"other"}
        className="fold-half collapse-x"></MenuPannel>

      {/* USER MENU */}
      <MenuPannel
        id={"user"}
        className="fold-slide collapse-y">
        <UserProfile />
      </MenuPannel>
    </main>
  );
};

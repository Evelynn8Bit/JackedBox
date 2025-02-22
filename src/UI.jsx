import { Toaster } from "react-hot-toast";
import { MenuPannel } from "./MenuPannel";
import { AccountActions } from "./components/auth/header/AccountActions";
import { AuthProvider } from "./contexts/authContext";
import { UserProfile } from "./components/UserProfile";
export const UI = () => {
  return (
    <main id="UI">
      {/* GAME MENU */}
      <MenuPannel id={"other"} className="fold-half collapse-x">
        <h2 className="menu__item--title">Other</h2>
        <div className="menu__item--content">Content</div>
      </MenuPannel>

      {/* USER MENU */}
      <MenuPannel id={"user"} className="fold-slide collapse-y">
        <AuthProvider>
          <AccountActions />
          <Toaster position="top-center" />
          <UserProfile />
        </AuthProvider>
      </MenuPannel>
    </main>
  );
};

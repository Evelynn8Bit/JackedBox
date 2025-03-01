import { useAuth } from "../contexts/authContext";
import { Login, Logout } from "./auth/header";
export const UserProfile = () => {
  const { currentUser } = useAuth();
  if (currentUser === null) {
    return <Login />;
  }

  return (
    <>
      <div className="user__profile">
        <img
          className="pfp"
          src={currentUser.photoURL}
          alt={currentUser.displayName}
        />
        <h1>{currentUser.displayName}</h1>
        <div className="edit__account">
          {/* TODO icons */}
          <button className="edit-button">Edit Profile</button>
        </div>
      </div>
      <div className="menu__item--content">
        <div
          className="menu__item-user--actions"
          onClick={(e) => e.stopPropagation()}>
          <button>Games</button>
          <button>Friends</button>
          <button>Messaging</button>
          <button>Settings</button>
          <button>Stats</button>
        </div>
        <Logout />
      </div>
    </>
  );
};

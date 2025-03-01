import { useAuth } from "../../../contexts/authContext";
import { doSignOut, loginGoogle } from "../../../firebase/auth";
import { Modal } from "../../modal";
import { useState } from "react";

export const Login = () => {
  const { userLoggedIn, currentUser } = useAuth();
  const [openModal, setOpenModal] = useState(null);

  return (
    <div className="grid pink">
      <button
        className="login__button"
        onClick={() => setOpenModal("login")}>
        Login
      </button>
      <Modal
        isOpen={openModal === "login"}
        onClose={() => setOpenModal(null)}>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
          />
          <button type="submit">Login</button>
          <small>or</small>
        </form>
        <button onClick={() => loginGoogle()}>Google</button>
      </Modal>
    </div>
  );
};
export const Logout = () => {
  const { userLoggedIn, currentUser } = useAuth();
  const [openModal, setOpenModal] = useState(null);
  if (currentUser === null || userLoggedIn === false) {
    return null;
  }
  return (
    <div className="fixed-top">
      <button onClick={() => console.log(currentUser)}>Current user</button>
      <>
        <button onClick={() => setOpenModal("logout")}>Logout</button>
        <Modal
          isOpen={openModal === "logout"}
          onClose={() => setOpenModal(null)}>
          <h2>Are you sure?</h2>
          <button
            onClick={() => {
              doSignOut();
              setOpenModal(null);
            }}>
            LogOut
          </button>
          <button onClick={() => setOpenModal(null)}>Cancel</button>
        </Modal>
      </>
    </div>
  );
};

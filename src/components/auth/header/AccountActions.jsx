import { useAuth } from "../../../contexts/authContext";
import { doSignInWithGoogle } from "../../../firebase/auth";
import { Modal } from "../../modal";
import { useState } from "react";
export const AccountActions = () => {
  const { userLoggedIn } = useAuth();
  const [openModal, setOpenModal] = useState(null);

  return (
    <div>
      {userLoggedIn ? (
        <>
          <button onClick={() => setOpenModal("logout")}>Logout</button>
          <Modal
            isOpen={openModal === "logout"}
            onClose={() => setOpenModal(null)}
          >
            <h2>Are you sure?</h2>
            <button onClick={() => doSignOut()}>LogOut</button>
            <button onClick={() => setOpenModal(null)}>Cancel</button>
          </Modal>
        </>
      ) : (
        <>
          <button onClick={() => setOpenModal("login")}>login</button>
          <ToastContainer />
          <Modal
            isOpen={openModal === "login"}
            onClose={() => setOpenModal(null)}
          >
            <h2>Login</h2>
            <form action="">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
              <button type="submit">Login</button>
            </form>
            <small>or</small>
            <button>Google</button>
          </Modal>
        </>
      )}
    </div>
  );
};

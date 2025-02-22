import { useAuth } from "../contexts/authContext";

export const UserProfile = () => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <h1>User not found</h1>;
  }
  return (
    <div>
      <h1>{currentUser.displayName}</h1>
    </div>
  );
};

import { useGlobalContext } from "../hooks/useGlobalContext";
import useLogout from "../hooks/useLogout";

function Profile() {
  const { user } = useGlobalContext();
  const { logout, error } = useLogout();
  const { displayName: nick, email } = user;
  return (
    <div className="container">
      <h1>Profile</h1>
      <p>
        NickName: <span>{nick}</span>
      </p>
      <p>
        Email: <span>{email}</span>
      </p>
      <button className="logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;

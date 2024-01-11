import { useDispatch } from "react-redux";
import { logout } from "../../index";
import authService from "../../Appwrite/auth";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log("Error in Logout btn");
      });
  };
  return (
    <button
      onClick={logoutHandler}
      className="
  inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      Logout
    </button>
  );
}

export default LogoutBtn;

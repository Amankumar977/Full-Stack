import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./Appwrite/auth";
import { login, logout, Loader, Footer, Header } from "./index";
function App() {
  let [isLoading, setIsLoading] = useState(true);
  let dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.log("error in app");
      })
      .finally(setIsLoading(false));
  }, []);
  return !isLoading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block ">
        <Header />
        <main>{/* <Outlet/> */}</main>
        <Footer />
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default App;

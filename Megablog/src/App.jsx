import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./Appwrite/auth";
import { Outlet } from "react-router-dom";
import { login, logout, Loader, Footer, Header } from "./index";
function App() {
  // console.log("I'm reaching till here");
  let [isLoading, setIsLoading] = useState(false);
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
      .finally(() => setIsLoading(false));
  }, []);
  return !isLoading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400 font-mono">
      <div className="w-full block ">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default App;

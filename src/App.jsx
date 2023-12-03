import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useGlobalContext } from "./hooks/useGlobalContext";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import Profile from "./pages/Profile";

function App() {
  const { user, dispatch, isAuthChange } = useGlobalContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "login",
      element: <>{user ? <Navigate to="/" /> : <Login />}</>,
    },
    {
      path: "signup",
      element: <>{user ? <Navigate to="/" /> : <Signup />}</>,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_CHANGE" });
    });
  }, []);

  return <>{isAuthChange && <RouterProvider router={router} />}</>;
}

export default App;

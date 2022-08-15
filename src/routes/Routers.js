import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Detailpage from "../pages/Detailpage";
import Homepage from "../pages/Homepage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../app/firebase";
import Seriespage from "../pages/Seriespage";
import Moviespage from "../pages/Moviespage";
import useScrollToTop from "../hooks/useScrollToTop";
import Searchpage from "../pages/Searchpage";
import Loginpage from "../pages/LoginPage";
import Registerpage from "../pages/RegisterPage";

export default function Routers() {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/details/:media_type/:id"
        element={
          <PrivateRoute>
            <Detailpage />
          </PrivateRoute>
        }
      />
      <Route
        path="/series"
        element={
          <PrivateRoute>
            <Seriespage />
          </PrivateRoute>
        }
      />
      <Route
        path="/movies"
        element={
          <PrivateRoute>
            <Moviespage />
          </PrivateRoute>
        }
      />
      <Route
        path="/search/:query"
        element={
          <PrivateRoute>
            <Searchpage />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <ProtectLoginRegister>
            <Loginpage/>
          </ProtectLoginRegister>
        }
      ></Route>
      <Route
        path="/register"
        element={
          <ProtectLoginRegister>
            <Registerpage/>
          </ProtectLoginRegister>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  return loading ? null : user ? children : <Navigate to="/login" />;
}

function ProtectLoginRegister({ children }) {
  const [user, loading] = useAuthState(auth);
  return loading ? null : !user ? children : <Navigate to="/" />;
}

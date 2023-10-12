import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Account from "./Components/Pages/Account";
import ProtecetedRought from "./Components/ProtecetedRought";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtecetedRought>
                <Account />
              </ProtecetedRought>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

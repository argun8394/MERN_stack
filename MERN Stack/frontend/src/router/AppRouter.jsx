import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/Chat";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route  />
        </Routes>
      <Footer/>

      </Router>
    </>
  );
};

export default AppRouter;
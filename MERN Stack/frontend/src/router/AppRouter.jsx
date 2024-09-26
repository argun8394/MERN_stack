import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/Chat";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import AnswerList from "../pages/AnswerList";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/answers" element={<AnswerList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route  />
        </Routes>
      <Footer/>

      </Router>
    </>
  );
};

export default AppRouter;
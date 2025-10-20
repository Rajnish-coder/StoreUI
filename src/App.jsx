import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

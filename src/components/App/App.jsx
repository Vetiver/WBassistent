import Style from "../../components/App/App.module.css";
import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../../pages/all-pages";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className={`${Style.App}`}>
      <AppHeader />
      <main className={Style.main}>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

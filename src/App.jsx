import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard.jsx";
import PaymentPage from "./pages/PaymentPage/PaymentPage.jsx";
import GamePage from "./pages/Game/Game";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

//ConfirmModal -> Pay Now (make that into a Link tag) from PaymentPage
//PaymentPage -> View bill (make that into a Link tag) from DashBoard
//GamePage -> Play a game to earn blue bells

export default App;

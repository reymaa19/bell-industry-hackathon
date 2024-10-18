import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard/DashBoard.jsx";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal.jsx";
import PaymentPage from "./pages/PaymentPage/PaymentPage.jsx";
import GamePage from "./pages/GamePage/GamePage.jsx";
import InitiativeModal from "./components/InitiativeModal/InitiativeModal.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaymentPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/game/modal" element={<InitiativeModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

//ConfirmModal -> Pay Now (make that into a Link tag) from PaymentPage
//PaymentPage -> View bill (make that into a Link tag) from DashBoard
//GamePage -> Play a game to earn blue bells
//GamePage -> Play a game to earn blue bells

export default App;

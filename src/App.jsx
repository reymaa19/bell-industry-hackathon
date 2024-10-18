import './App.scss';
//import Temp from './components/ConfirmModal/Temp';
//import PieChartWithCenterLabel from "./components/PieDemo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from './pages/DashBoard/DashBoard.jsx'
import ConfirmModal from './components/ConfirmModal/ConfirmModal.jsx'
import PaymentPage from './pages/PaymentPage/PaymentPage.jsx'
import GamePage from "./pages/Game/Game";

function App() {
  return (
    <>
      {/* <PieChartWithCenterLabel /> */}
      {/* <Temp /> */}
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PaymentPage />} />
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

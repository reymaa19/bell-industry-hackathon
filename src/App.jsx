import './App.scss';
import Temp from './components/ConfirmModal/Temp';
import PieChartWithCenterLabel from "./components/PieDemo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from './pages/DashBoard/DashBoard.jsx'
import ConfirmModal from './components/ConfirmModal/ConfirmModal.jsx'
import PaymenPage from './pages/PaymentPage/PaymentPage.jsx'

function App() {
  return (
    <>
      {/* <PieChartWithCenterLabel /> */}
      {/* <Temp /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path='/ConfirmModal' element={<ConfirmModal />} />
          <Route path='/PaymentPage' element={<PaymenPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

//ConfirmModal -> Pay Now (make that into a Link tag) from PaymentPage
//PaymentPage -> View bill (make that into a Link tag) from DashBoard

export default App;

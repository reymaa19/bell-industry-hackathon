import './App.scss';
import Temp from './components/ConfirmModal/Temp';
import PieChartWithCenterLabel from "./components/PieDemo";

import PaymentPage from './pages/PaymentPage'

function App() {
  return <>
    {/* <PieChartWithCenterLabel /> */}
    <Temp />
    <PaymentPage />
  </>;
}

//PaymentPage is only temporaryly placed here for visual refernce while styling

export default App;

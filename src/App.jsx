import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PieChartWithCenterLabel from "./components/PieDemo";
import GamePage from "./pages/Game/Game";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PieChartWithCenterLabel />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

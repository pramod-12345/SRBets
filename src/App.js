import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import SportsLandingPage from "./pages/SportsLandingPage";
import MyBets from "./pages/MyBets";
import SportsHome from "./pages/SportsHome"
import CasinoHome from "./pages/CasinoHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sports-landing" element={<SportsLandingPage />} />
          <Route path="/sports-home" element={<SportsHome/>}/>
          <Route path="/casino-home" element={<CasinoHome/>}/>
          <Route path="/my-bets" element={<MyBets />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

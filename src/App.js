import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Matches from "./components/Matches";
import Scoreboard from "./components/Scoreboard";
import Teams from "./components/Teams";
import Statistics from "./components/Statistics";
import Highlight from "./components/Highlight";
import ErrorPage from "./components/ErrorPage";
import Team from "./components/Team";
import Player from "./components/Player";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Matches />} />
                <Route path="/scoreboard" element={<Scoreboard />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/team/:id" element={<Team />} />
                <Route path="/player/:id" element={<Player />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/highlight/:id" element={<Highlight />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;

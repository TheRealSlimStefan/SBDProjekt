import "../styles/Match.css";
import { useNavigate } from "react-router-dom";

const Match = () => {
    const navigate = useNavigate();

    function handleMatchClick(id) {
        navigate(`/highlight/${id}`);
    }

    return (
        <div className="Match" onClick={() => handleMatchClick(1)}>
            <div className="teams">
                <p>Jagielonia Białystok</p>
                <p>Legia Warszawa</p>
            </div>
            <div className="score">
                <p>1</p>
                <p>0</p>
            </div>
            <div className="date">
                <p>Koniec</p>
                <p>09.12.2021</p>
            </div>
        </div>
    );
};

export default Match;

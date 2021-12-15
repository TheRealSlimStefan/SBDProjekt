import "../styles/Match.css";
import { useNavigate } from "react-router-dom";

const Match = ({ id, host, hostGoals, guest, guestGoals }) => {
    const navigate = useNavigate();

    function handleMatchClick(id) {
        navigate(`/highlight/${id}`);
    }

    return (
        <div className="Match" onClick={() => handleMatchClick(id)}>
            <div className="teams">
                <p>{host}</p>
                <p>{guest}</p>
            </div>
            <div className="score">
                <p>{hostGoals}</p>
                <p>{guestGoals}</p>
            </div>
            <div className="date">
                <p>Koniec</p>
                <p>09.12.2021</p>
            </div>
        </div>
    );
};

export default Match;

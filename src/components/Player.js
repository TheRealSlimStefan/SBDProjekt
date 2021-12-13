import "../styles/Player.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Player = ({ name, surname, image }) => {
    const navigate = useNavigate();

    function handleBackClick() {
        navigate(`/`);
    }

    return (
        <div className="Player">
            <nav className="backNavigation">
                <div className="backButton" onClick={() => handleBackClick()}>
                    <AiOutlineArrowLeft />
                </div>
                <div className="player">
                    <p>Przemysław Frankowski</p>
                </div>
            </nav>
            <div className="playerDetails">
                <img
                    src="https://cdn.sofifa.net/players/212/138/18_360.png"
                    alt=""
                />
                <div className="description">
                    <div className="name">
                        <p>Przemysław Frankowski</p>
                    </div>
                    <div className="statistics">
                        <p>Gole: 5</p>
                        <p>Asysty: 3</p>
                        <p>Strzały: 15</p>
                        <p>Strzały celne: 5</p>
                        <p>Żółte kartki: 7</p>
                        <p>Czerwone kartki: 1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;

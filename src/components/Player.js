import "../styles/Player.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Player = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    function handleBackClick() {
        navigate(`/`);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/player/${id}`);
            const body = await response.json();
            setPlayer(body);
            // console.log(body);
            setLoaded(true);
        };
        fetchData();
    }, []);

    return (
        <div className="Player">
            <nav className="backNavigation">
                <div className="backButton" onClick={() => handleBackClick()}>
                    <AiOutlineArrowLeft />
                </div>
                {loaded ? (
                    <div className="player">
                        <p>
                            {player[0][5]} {player[0][6]}
                        </p>
                    </div>
                ) : null}
            </nav>
            <div className="playerDetails">
                <img
                    src="https://cdn2.iconfinder.com/data/icons/soccer-players/100/color-24-512.png"
                    alt=""
                />
                <div className="description">
                    {loaded ? (
                        <div className="name">
                            <p>
                                {player[0][5]} {player[0][6]}
                            </p>
                        </div>
                    ) : null}
                    {loaded ? (
                        <div className="statistics">
                            <p>Gole: {player[0][7]}</p>
                            <p>Asysty: {player[0][8]}</p>
                            <p>Strzały: {player[0][9]}</p>
                            <p>Strzały celne: {player[0][10]}</p>
                            <p>Żółte kartki: {player[0][11]}</p>
                            <p>Czerwone kartki: {player[0][12]}</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Player;

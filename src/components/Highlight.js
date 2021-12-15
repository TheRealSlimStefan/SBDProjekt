import "../styles/Highlight.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PlayerElement from "./PlayerElement";

const Highlight = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [highlight, setHighlight] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [playersHost, setPlayersHost] = useState([]);
    // const [loadedHost, setLoadedHost] = useState(false);
    const [playersGuest, setPlayersGuest] = useState([]);
    // const [loadedGuest, setLoadedGuest] = useState(false);

    const [statistics, setStatistics] = useState(true);
    const [squads, setSquads] = useState(false);
    const [firstSquad, setFirstSquad] = useState(false);
    const [secondSquad, setSecondSquad] = useState(false);

    function handleBackClick() {
        navigate(`/`);
    }

    function handleOptionClick(option) {
        if (option === "statistics") {
            setStatistics(true);
            setSquads(false);
        } else if (option === "squads") {
            setStatistics(false);
            setSquads(true);
        }
    }

    function handleSquadClick(squad) {
        if (squad === "first") {
            setFirstSquad(!firstSquad);
        } else if (squad === "second") {
            setSecondSquad(!secondSquad);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:3001/highlight/${id}`
            );
            const body = await response.json();
            setHighlight(body);
            // console.log(body);
            setLoaded(true);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:3001/highlight/${id}/playersHost`
            );
            const body = await response.json();
            setPlayersHost(body);
            // console.log(body);
            setLoadedHost(true);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `http://localhost:3001/highlight/${id}/playersGuest`
            );
            const body = await response.json();
            setPlayersGuest(body);
            // console.log(body);
            setLoadedGuest(true);
        };
        fetchData();
    }, []);

    return (
        <div className="Highlight">
            {loaded ? (
                <nav className="backNavigation">
                    <div
                        className="backButton"
                        onClick={() => handleBackClick()}
                    >
                        <AiOutlineArrowLeft />
                    </div>
                    <div className="teams">
                        <p>
                            {highlight[0][1]} - {highlight[0][6]}
                        </p>
                    </div>
                </nav>
            ) : null}
            {loaded ? (
                <div className="summary">
                    <div className="date">
                        <p>Koniec, 09.12.2021</p>
                    </div>
                    <div className="score">
                        <div className="first">
                            <img
                                src="https://media.discordapp.net/attachments/905055655860256861/920480540388392960/football-club.png"
                                alt=""
                            />
                            <p>{highlight[0][1]}</p>
                        </div>
                        <p>{highlight[0][2]}</p>
                        <p>-</p>
                        <p>{highlight[0][7]}</p>
                        <div className="second">
                            <img
                                src="https://media.discordapp.net/attachments/905055655860256861/920480540388392960/football-club.png"
                                alt=""
                            />
                            <p>{highlight[0][6]}</p>
                        </div>
                    </div>
                    <nav className="menuOptions">
                        <div
                            className="statistics"
                            onClick={() => handleOptionClick("statistics")}
                        >
                            STATYSTYKI
                        </div>
                        <div
                            className="squads"
                            onClick={() => handleOptionClick("squads")}
                        >
                            SKŁADY
                        </div>
                    </nav>
                    {statistics ? (
                        <div className="statisticsOption">
                            <div className="statistic">
                                <p>{highlight[0][1]}</p>
                                <p>Statystyki</p>
                                <p>{highlight[0][6]}</p>
                            </div>
                            <div className="statistic">
                                <p>{highlight[0][3]}</p>
                                <p>Strzały</p>
                                <p>{highlight[0][8]}</p>
                            </div>
                            <div className="statistic">
                                <p>{highlight[0][4]}%</p>
                                <p>Posiadanie piłki</p>
                                <p>{highlight[0][9]}%</p>
                            </div>
                            <div className="statistic">
                                <p>{highlight[0][5]}</p>
                                <p>Podania</p>
                                <p>{highlight[0][10]}</p>
                            </div>
                        </div>
                    ) : null}
                    {squads ? (
                        <div className="squadsOption">
                            <div
                                className="firstSquadButton"
                                onClick={() => handleSquadClick("first")}
                            >
                                {highlight[0][1]}
                            </div>
                            {firstSquad ? (
                                <div>
                                    {playersHost.map((player) => (
                                        <PlayerElement
                                            id={player[2]}
                                            name={player[3]}
                                            surname={player[4]}
                                        />
                                    ))}
                                </div>
                            ) : null}
                            <div
                                className="secondSquadButton"
                                onClick={() => handleSquadClick("second")}
                            >
                                {highlight[0][6]}
                            </div>
                            {secondSquad ? (
                                <div>
                                    {playersGuest.map((player) => (
                                        <PlayerElement
                                            id={player[2]}
                                            name={player[3]}
                                            surname={player[4]}
                                        />
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
};

export default Highlight;

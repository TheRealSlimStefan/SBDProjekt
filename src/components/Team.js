import "../styles/Team.css";
import { Route, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Player from "./Player";
import TeamElement from "./TeamElement";

const playersJagiellonia = [
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
    {
        name: "Przemysław",
        surname: "Frankowski",
        image: "https://cdn.sofifa.net/players/212/138/18_360.png",
    },
];

const Team = () => {
    const navigate = useNavigate();

    function handleBackClick() {
        navigate(`/`);
    }

    return (
        <div className="Team">
            <nav className="backNavigation">
                <div className="backButton" onClick={() => handleBackClick()}>
                    <AiOutlineArrowLeft />
                </div>
                <div className="team">
                    <p>Jagielonia Białystok</p>
                </div>
            </nav>
            <div className="teamElements">
                {playersJagiellonia.map((player) => {
                    return (
                        <TeamElement
                            name={player.name}
                            surname={player.surname}
                            image={player.image}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Team;

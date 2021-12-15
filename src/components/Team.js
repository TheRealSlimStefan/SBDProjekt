import "../styles/Team.css";
import { Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Player from "./Player";
import TeamElement from "./TeamElement";
import { useParams } from "react-router-dom";

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
    const { id } = useParams();
    const [team, setTeam] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    function handleBackClick() {
        navigate(`/`);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/team/${id}`);
            const body = await response.json();
            setTeam(body);
            console.log(body);
            setLoaded(true);
        };
        fetchData();
    }, []);

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
                {loaded
                    ? team.map((player) => {
                          return (
                              <TeamElement
                                  id={player[5]}
                                  name={player[10]}
                                  surname={player[11]}
                                  image="https://cdn2.iconfinder.com/data/icons/soccer-players/100/color-24-512.png"
                              />
                          );
                      })
                    : null}
            </div>
        </div>
    );
};

export default Team;

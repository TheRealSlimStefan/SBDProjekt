import "../styles/Teams.css";
import { useNavigate } from "react-router-dom";

const teams = [
    {
        id: 1,
        name: "Jagiellonia Białystok",
    },

    {
        id: 2,
        name: "Arka Gdynia",
    },

    {
        id: 3,
        name: "Znicz Pruszków",
    },

    {
        id: 4,
        name: "Lech Poznań",
    },

    {
        id: 5,
        name: "Legia Warszawa",
    },

    {
        id: 5,
        name: "Legia Warszawa",
    },

    {
        id: 5,
        name: "Legia Warszawa",
    },

    {
        id: 5,
        name: "Legia Warszawa",
    },

    {
        id: 5,
        name: "Legia Warszawa",
    },

    {
        id: 5,
        name: "Legia Warszawa",
    },

    {
        id: 5,
        name: "Legia Warszawa",
    },

    {
        id: 5,
        name: "Legia Warszawa",
    },
];

const Teams = () => {
    const navigate = useNavigate();

    function handleTeamClick(id) {
        navigate(`/team/${id}`, { state: { id: id } });
    }

    return (
        <div className="TeamsList">
            {teams.map((team, key) => {
                return (
                    <div
                        className="teamElement"
                        onClick={() => handleTeamClick(team.id)}
                    >
                        <img
                            src="https://jagiellonia.pl/wp-content/uploads/2021/11/Herb_Jagiellonii.png"
                            alt=""
                        />
                        <div className="teamName">
                            <p>{team.name}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Teams;

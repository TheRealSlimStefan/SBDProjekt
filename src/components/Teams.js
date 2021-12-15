import "../styles/Teams.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// const teams = [
//     {
//         id: 1,
//         name: "Jagiellonia Białystok",
//     },

//     {
//         id: 2,
//         name: "Arka Gdynia",
//     },

//     {
//         id: 3,
//         name: "Znicz Pruszków",
//     },

//     {
//         id: 4,
//         name: "Lech Poznań",
//     },

//     {
//         id: 5,
//         name: "Legia Warszawa",
//     },

//     {
//         id: 5,
//         name: "Legia Warszawa",
//     },

//     {
//         id: 5,
//         name: "Legia Warszawa",
//     },

//     {
//         id: 5,
//         name: "Legia Warszawa",
//     },

//     {
//         id: 5,
//         name: "Legia Warszawa",
//     },

//     {
//         id: 5,
//         name: "Legia Warszawa",
//     },

//     {
//         id: 5,
//         name: "Legia Warszawa",
//     },

//     {
//         id: 5,
//         name: "Legia Warszawa",
//     },
// ];

const Teams = () => {
    const navigate = useNavigate();
    const [teams, setTeams] = useState([]);
    const [loaded, setLoaded] = useState(false);

    function handleTeamClick(id) {
        navigate(`/team/${id}`, { state: { id: id } });
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3001/teams");
            const body = await response.json();
            setTeams(body);
            console.log(body);
            setLoaded(true);
        };
        fetchData();
    }, []);

    return (
        <div className="TeamsList">
            {loaded
                ? teams.map((team, key) => {
                      return (
                          <div
                              className="teamElement"
                              onClick={() => handleTeamClick(team[0])}
                          >
                              <img
                                  src="https://media.discordapp.net/attachments/905055655860256861/920480540388392960/football-club.png"
                                  alt=""
                              />
                              <div className="teamName">
                                  <p>{team[1]}</p>
                              </div>
                          </div>
                      );
                  })
                : null}
        </div>
    );
};

export default Teams;

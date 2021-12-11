import "../styles/Scoreboard.css";
import { useNavigate } from "react-router-dom";

//drużyny trzeba pobierać z propsów + jakieś sortowanko tablicy trzeba zrobić
const teams = [
    {
        id: 1,
        name: "Jagiellonia Białystok",
        played: 4,
        wins: 4,
        draws: 0,
        losses: 0,
        scored: 12,
        conceded: 3,
        difference: 9,
        points: 12
    },

    {
        id: 2,
        name: "Arka Gdynia",
        played: 4,
        wins: 2,
        draws: 1,
        losses: 1,
        scored: 10,
        conceded: 7,
        difference: 3,
        points: 7
    },

    {
        id: 3,
        name: "Znicz Pruszków",
        played: 4,
        wins: 2,
        draws: 1,
        losses: 1,
        scored: 7,
        conceded: 5,
        difference: 2,
        points: 7
    },

    {
        id: 4,
        name: "Lech Poznań",
        played: 4,
        wins: 1,
        draws: 0,
        losses: 3,
        scored: 4,
        conceded: 8,
        difference: -4,
        points: 3
    },

    {
        id: 5,
        name: "Legia Warszawa",
        played: 4,
        wins: 0,
        draws: 0,
        losses: 4,
        scored: 0,
        conceded: 20,
        difference: -20,
        points: 0
    }
]

const Scoreboard = () => {
    const navigate = useNavigate();

    function handleRowClick(id) {
        navigate(`/team/${id}`, { state: { id: id }});
    }

    return (
        <div className="Scoreboard">
            <table>
                <tr className="scoreboardHeader">
                    <th>#</th>
                    <th>Drużyna</th>
                    <th>RM</th>
                    <th>W</th>
                    <th>R</th>
                    <th>P</th>
                    <th>BZ</th>
                    <th>BS</th>
                    <th>RB</th>
                    <th>Pkt</th>
                </tr>
                {teams.map((team, key) => {
                    return (
                        <tr className="scoreboardRow" onClick={() => handleRowClick(team.id)}>
                            <td>{key + 1}</td>
                            <td>{team.name}</td>
                            <td>{team.played}</td>
                            <td>{team.wins}</td>
                            <td>{team.draws}</td>
                            <td>{team.losses}</td>
                            <td>{team.scored}</td>
                            <td>{team.conceded}</td>
                            <td>{team.difference}</td>
                            <td>{team.points}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Scoreboard;

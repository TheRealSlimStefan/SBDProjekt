import "../styles/Statistics.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Statistics = () => {
    const navigate = useNavigate();
    const [scorers, setScorers] = useState([]);
    const [assisters, setAssisters] = useState([]);
    const [yellowCards, setYellowCards] = useState([]);
    const [redCards, setRedCards] = useState([]);

    function handleStatisticsElementClick(id) {
        navigate(`/player/${id}`, { state: { id: id } });
    }

    useEffect(() => {
        const createList = (data) => {
            let temp = data;

            for (let i = 5; i < temp.length; i++) {
                if (temp[i][3] === temp[i - 1][3]) {
                    continue;
                }
                else {
                    temp.splice(i, temp.length - i)
                    break;
                }
            }

            return temp;
        }

        const fetchData = async () => {
            const responseGoals = await fetch("http://localhost:3001/statistics/goals");
            const bodyGoals = await responseGoals.json();

            const responseAssists = await fetch("http://localhost:3001/statistics/assists");
            const bodyAssists = await responseAssists.json();

            const responseYellowCards = await fetch("http://localhost:3001/statistics/yellowcards");
            const bodyYellowCards = await responseYellowCards.json();

            const responseRedCards = await fetch("http://localhost:3001/statistics/redcards");
            const bodyRedCards = await responseRedCards.json();

            setScorers(createList(bodyGoals));
            setAssisters(createList(bodyAssists));
            setYellowCards(createList(bodyYellowCards));
            setRedCards(createList(bodyRedCards));
        }
        fetchData();
    }, [])

    function createRankingTable(data) {
        return data.map((player, key) => {
            return (
                <tr
                    className="statisticsElement"
                    onClick={() =>
                        handleStatisticsElementClick(player[0])
                    }
                >
                    <td class="statisticsPosition">{key + 1}</td>
                    <td class="statisticsName">
                        {player[1] + " " + player[2]}
                    </td>
                    <td class="statisticsValue">{player[3]}</td>
                </tr>
            );
        })
    }

    return (
        <div className="Statistics">
            <p>Gole</p>
            <table>
                <tr>
                    <th>#</th>
                    <th>Zawodnik</th>
                    <th>Gole</th>
                </tr>
                {createRankingTable(scorers)}
            </table>

            <p>Asysty</p>
            <table>
                <tr>
                    <th>#</th>
                    <th>Zawodnik</th>
                    <th>Asysty</th>
                </tr>
                {createRankingTable(assisters)}
            </table>

            <p>Żółte kartki</p>
            <table>
                <tr>
                    <th>#</th>
                    <th>Zawodnik</th>
                    <th>Żółte kartki</th>
                </tr>
                {createRankingTable(yellowCards)}
            </table>

            <p>Czerwone kartki</p>
            <table>
                <tr>
                    <th>#</th>
                    <th>Zawodnik</th>
                    <th>Czerwone kartki</th>
                </tr>
                {createRankingTable(redCards)}
            </table>
        </div>
    );
};

export default Statistics;

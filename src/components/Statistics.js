import "../styles/Statistics.css";
import { useNavigate } from "react-router-dom";

const scorers = [
    {
        id: 5,
        name: "imie4",
        surname: "nazwisko4",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 11,
    },

    {
        id: 5,
        name: "imie5",
        surname: "nazwisko5",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 8,
    },

    {
        id: 1,
        name: "Mateusz",
        surname: "Hołownia",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 7,
    },

    {
        id: 10,
        name: "imie10",
        surname: "nazwisko10",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 6,
    },

    {
        id: 3,
        name: "imie3",
        surname: "nazwisko3",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 4,
    },
];

const assisters = [
    {
        id: 10,
        name: "imie10",
        surname: "nazwisko10",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        assists: 14,
    },

    {
        id: 5,
        name: "imie5",
        surname: "nazwisko5",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        assists: 11,
    },

    {
        id: 3,
        name: "imie3",
        surname: "nazwisko3",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        assists: 4,
    },

    {
        id: 5,
        name: "imie4",
        surname: "nazwisko4",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        assists: 4,
    },

    {
        id: 8,
        name: "imie8",
        surname: "nazwisko8",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        assists: 4,
    },
];

const yellowCards = [
    {
        id: 8,
        name: "imie8",
        surname: "nazwisko8",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        yellowCards: 8,
    },

    {
        id: 6,
        name: "imie6",
        surname: "nazwisko6",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        yellowCards: 7,
    },

    {
        id: 10,
        name: "imie10",
        surname: "nazwisko10",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        yellowCards: 7,
    },

    {
        id: 2,
        name: "imie2",
        surname: "nazwisko2",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        yellowCards: 5,
    },

    {
        id: 1,
        name: "Mateusz",
        surname: "Hołownia",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        yellowCards: 2,
    },

    {
        id: 5,
        name: "imie4",
        surname: "nazwisko4",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        yellowCards: 2,
    },

    {
        id: 7,
        name: "imie7",
        surname: "nazwisko7",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        yellowCards: 2,
    },
];

const redCards = [
    {
        id: 10,
        name: "imie10",
        surname: "nazwisko10",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        redCards: 5,
    },

    {
        id: 6,
        name: "imie6",
        surname: "nazwisko6",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        redCards: 4,
    },

    {
        id: 2,
        name: "imie2",
        surname: "nazwisko2",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        redCards: 2,
    },

    {
        id: 3,
        name: "imie3",
        surname: "nazwisko3",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        redCards: 1,
    },

    {
        id: 5,
        name: "imie4",
        surname: "nazwisko4",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        redCards: 1,
    },

    {
        id: 7,
        name: "imie7",
        surname: "nazwisko7",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        redCards: 1,
    },

    {
        id: 8,
        name: "imie8",
        surname: "nazwisko8",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        redCards: 1,
    },
];

const players = [
    {
        id: 1,
        name: "Mateusz",
        surname: "Hołownia",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 7,
        assists: 1,
        yellowCards: 2,
        redCards: 0,
    },

    {
        id: 2,
        name: "imie2",
        surname: "nazwisko2",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 1,
        assists: 3,
        yellowCards: 5,
        redCards: 2,
    },

    {
        id: 3,
        name: "imie3",
        surname: "nazwisko3",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 4,
        assists: 4,
        yellowCards: 0,
        redCards: 1,
    },

    {
        id: 5,
        name: "imie4",
        surname: "nazwisko4",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 11,
        assists: 4,
        yellowCards: 2,
        redCards: 1,
    },

    {
        id: 5,
        name: "imie5",
        surname: "nazwisko5",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 8,
        assists: 11,
        yellowCards: 0,
        redCards: 0,
    },

    {
        id: 6,
        name: "imie6",
        surname: "nazwisko6",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 0,
        assists: 2,
        yellowCards: 7,
        redCards: 4,
    },

    {
        id: 7,
        name: "imie7",
        surname: "nazwisko7",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 0,
        assists: 1,
        yellowCards: 2,
        redCards: 1,
    },

    {
        id: 8,
        name: "imie8",
        surname: "nazwisko8",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 1,
        assists: 4,
        yellowCards: 8,
        redCards: 1,
    },

    {
        id: 9,
        name: "imie9",
        surname: "nazwisko9",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 1,
        assists: 1,
        yellowCards: 1,
        redCards: 0,
    },

    {
        id: 10,
        name: "imie10",
        surname: "nazwisko10",
        image: "https://cdn.legia.com/variants/a3cutnaHreuEKqdSYWt2P22Q/545c15e9cca6f06af6246aeb5cf03b7aca3451e6443595cf6ef7e6b628d6481e.png",
        goals: 6,
        assists: 14,
        yellowCards: 7,
        redCards: 5,
    },
];

const Statistics = () => {
    const navigate = useNavigate();

    function handleStatisticsElementClick(id) {
        navigate(`/player/${id}`, { state: { id: id } });
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
                {scorers.map((player, key) => {
                    return (
                        <tr
                            className="statisticsElement"
                            onClick={() =>
                                handleStatisticsElementClick(player.id)
                            }
                        >
                            <td class="statisticsPosition">{key + 1}</td>
                            <td class="statisticsName">
                                {player.name + " " + player.surname}
                            </td>
                            <td class="statisticsValue">{player.goals}</td>
                        </tr>
                    );
                })}
            </table>

            <p>Asysty</p>
            <table>
                <tr>
                    <th>#</th>
                    <th>Zawodnik</th>
                    <th>Asysty</th>
                </tr>
                {assisters.map((player, key) => {
                    return (
                        <tr
                            className="statisticsElement"
                            onClick={() =>
                                handleStatisticsElementClick(player.id)
                            }
                        >
                            <td class="statisticsPosition">{key + 1}</td>
                            <td class="statisticsName">
                                {player.name + " " + player.surname}
                            </td>
                            <td class="statisticsValue">{player.assists}</td>
                        </tr>
                    );
                })}
            </table>

            <p>Żółte kartki</p>
            <table>
                <tr>
                    <th>#</th>
                    <th>Zawodnik</th>
                    <th>Żółte kartki</th>
                </tr>
                {yellowCards.map((player, key) => {
                    return (
                        <tr
                            className="statisticsElement"
                            onClick={() =>
                                handleStatisticsElementClick(player.id)
                            }
                        >
                            <td class="statisticsPosition">{key + 1}</td>
                            <td class="statisticsName">
                                {player.name + " " + player.surname}
                            </td>
                            <td class="statisticsValue">
                                {player.yellowCards}
                            </td>
                        </tr>
                    );
                })}
            </table>

            <p>Czerwone kartki</p>
            <table>
                <tr>
                    <th>#</th>
                    <th>Zawodnik</th>
                    <th>Czerwone kartki</th>
                </tr>
                {redCards.map((player, key) => {
                    return (
                        <tr
                            className="statisticsElement"
                            onClick={() =>
                                handleStatisticsElementClick(player.id)
                            }
                        >
                            <td class="statisticsPosition">{key + 1}</td>
                            <td class="statisticsName">
                                {player.name + " " + player.surname}
                            </td>
                            <td class="statisticsValue">{player.redCards}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default Statistics;

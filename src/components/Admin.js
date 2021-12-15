import "../styles/Admin.css";
import { useState } from "react";

const Admin = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [nationality, setNationality] = useState("");
    const [position, setPosition] = useState("");
    const [age, setAge] = useState("");
    const [assists, setAssists] = useState("");
    const [goals, setGoals] = useState("");
    const [shots, setShots] = useState("");
    const [shotsOnTarget, setShotsOnTarget] = useState("");
    const [yellowCards, setYellowCards] = useState("");
    const [redCards, setRedCards] = useState("");
    const [clubId, setClubId] = useState("");

    const [soccerClubName, setSoccerClubName] = useState("");
    const [winnings, setWinnings] = useState("");
    const [draws, setDraws] = useState("");
    const [loses, setLoses] = useState("");

    function handleClubIdChange(e) {
        setClubId(e.target.value);
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }

    function handleNationalityChange(e) {
        setNationality(e.target.value);
    }

    function handlePositionChange(e) {
        setPosition(e.target.value);
    }

    function handleAgeChange(e) {
        setAge(e.target.value);
    }

    function handleAssistsChange(e) {
        setAssists(e.target.value);
    }

    function handleGoalsChange(e) {
        setGoals(e.target.value);
    }

    function handleShotsChange(e) {
        setShots(e.target.value);
    }

    function handleShotsOnTargetChange(e) {
        setShotsOnTarget(e.target.value);
    }

    function handleYellowCardsChange(e) {
        setYellowCards(e.target.value);
    }

    function handleRedCardsChange(e) {
        setRedCards(e.target.value);
    }

    function handleSoccerClubNameChange(e) {
        setSoccerClubName(e.target.value);
    }

    function handleWinningsChange(e) {
        setWinnings(e.target.value);
    }

    function handleDrawsChange(e) {
        setDraws(e.target.value);
    }

    function handleLosesChange(e) {
        setLoses(e.target.value);
    }

    function addPlayer() {
        const player = {
            clubId,
            name,
            surname,
            nationality,
            position,
            assists,
            age,
            goals,
            shots,
            shotsOnTarget,
            yellowCards,
            redCards,
        };

        fetch("http://localhost:3001/addPlayer", {
            method: "POST", // or 'PUT'
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(player),
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function addSoccerClub() {
        const soccerClub = {
            soccerClubName,
            winnings,
            draws,
            loses,
        };

        fetch("/", {
            method: "POST", // or 'PUT'
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(soccerClub),
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    return (
        <div className="Admin">
            <div className="player">
                <button onClick={() => addPlayer()}>Dodaj piłkarza</button>
                <input
                    onChange={(e) => handleClubIdChange(e)}
                    value={clubId}
                    type="number"
                    placeholder="id_clubu..."
                />
                <input
                    onChange={(e) => handleNameChange(e)}
                    value={name}
                    type="text"
                    placeholder="imie..."
                />
                <input
                    onChange={(e) => handleSurnameChange(e)}
                    value={surname}
                    type="text"
                    placeholder="nazwisko..."
                />
                <input
                    onChange={(e) => handleNationalityChange(e)}
                    value={nationality}
                    type="text"
                    placeholder="narodowość..."
                />
                <input
                    onChange={(e) => handlePositionChange(e)}
                    value={position}
                    type="text"
                    placeholder="pozycja..."
                />
                <input
                    onChange={(e) => handleAgeChange(e)}
                    value={age}
                    type="number"
                    placeholder="wiek..."
                />
                <input
                    onChange={(e) => handleGoalsChange(e)}
                    value={goals}
                    type="number"
                    placeholder="gole..."
                />
                <input
                    onChange={(e) => handleAssistsChange(e)}
                    value={assists}
                    type="number"
                    placeholder="asysty..."
                />
                <input
                    onChange={(e) => handleShotsChange(e)}
                    value={shots}
                    type="number"
                    placeholder="strzały..."
                />
                <input
                    onChange={(e) => handleShotsOnTargetChange(e)}
                    value={shotsOnTarget}
                    type="number"
                    placeholder="strzały na bramkę..."
                />
                <input
                    onChange={(e) => handleYellowCardsChange(e)}
                    value={yellowCards}
                    type="number"
                    placeholder="żółte kartki..."
                />
                <input
                    onChange={(e) => handleRedCardsChange(e)}
                    value={redCards}
                    type="number"
                    placeholder="czerwone karki..."
                />
            </div>
            <div className="soccerClub">
                <button onClick={() => addSoccerClub()}>Dodaj klub</button>
                <input
                    onChange={(e) => handleSoccerClubNameChange(e)}
                    value={soccerClubName}
                    type="text"
                    placeholder="nazwa klubu..."
                />
                <input
                    onChange={(e) => handleWinningsChange(e)}
                    value={winnings}
                    type="text"
                    placeholder="wygrane..."
                />
                <input
                    onChange={(e) => handleDrawsChange(e)}
                    value={draws}
                    type="text"
                    placeholder="remisy..."
                />
                <input
                    onChange={(e) => handleLosesChange(e)}
                    value={loses}
                    type="text"
                    placeholder="przegrane..."
                />
            </div>
        </div>
    );
};

export default Admin;

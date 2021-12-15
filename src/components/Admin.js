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
    const [stadium, setStadium] = useState("");
    const [winnings, setWinnings] = useState("");
    const [draws, setDraws] = useState("");
    const [losses, setLosses] = useState("");

    const [coachClubId, setCoachClubId] = useState("");
    const [coachRole, setCoachRole] = useState("");
    const [coachName, setCoachName] = useState("");
    const [coachSurname, setCoachSurname] = useState("");

    const [refereeRole, setRefereeRole] = useState("");
    const [refereeName, setRefereeName] = useState("");
    const [refereeSurname, setRefereeSurname] = useState("");

    const [stadiumName, setStadiumName] = useState("");
    const [stadiumCity, setStadiumCity] = useState("");

    const [matchHomeClubId, setMatchHomeClubId] = useState("");
    const [matchAwayClubId, setMatchAwayClubId] = useState("");
    const [matchTournamentId, setMatchTournamentId] = useState("");
    const [matchStadiumId, setMatchStadiumId] = useState("");
    const [matchHomeResult, setMatchHomeResult] = useState("");
    const [matchAwayResult, setMatchAwayResult] = useState("");

    function handleMatchHomeClubIdChange(e) {
        setMatchHomeClubId(e.target.value);
    }

    function handleMatchAwayClubIdChange(e) {
        setMatchAwayClubId(e.target.value);
    }

    function handleMatchTournamentIdChange(e) {
        setMatchTournamentId(e.target.value);
    }

    function handleMatchStadiumIdChange(e) {
        setMatchStadiumId(e.target.value);
    }

    function handleMatchHomeResultChange(e) {
        setMatchHomeResult(e.target.value);
    }

    function handleMatchAwayResultChange(e) {
        setMatchAwayResult(e.target.value);
    }

    function handleStadiumNameChange(e) {
        setStadiumName(e.target.value);
    }

    function handleStadiumCityChange(e) {
        setStadiumCity(e.target.value);
    }

    function handleRefereeRoleChange(e) {
        setRefereeRole(e.target.value);
    }

    function handleRefereeNameChange(e) {
        setRefereeName(e.target.value);
    }

    function handleRefereeSurnameChange(e) {
        setRefereeSurname(e.target.value);
    }

    function handleCoachClubIdChange(e) {
        setCoachClubId(e.target.value);
    }

    function handleCoachRoleChange(e) {
        setCoachRole(e.target.value);
    }

    function handleCoachNameChange(e) {
        setCoachName(e.target.value);
    }

    function handleCoachSurnameChange(e) {
        setCoachSurname(e.target.value);
    }

    function handleStadiumChange(e) {
        setStadium(e.target.value);
    }

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

    function handleLossesChange(e) {
        setLosses(e.target.value);
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
            stadium,
            winnings,
            draws,
            losses,
        };

        fetch("http://localhost:3001/addClub", {
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

    function addCoach() {
        const coach = {
            coachClubId,
            coachRole,
            coachName,
            coachSurname,
        };

        fetch("http://localhost:3001/addCoach", {
            method: "POST", // or 'PUT'
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(coach),
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function addReferee() {
        const referee = {
            refereeRole,
            refereeName,
            refereeSurname,
        };

        fetch("http://localhost:3001/addReferee", {
            method: "POST", // or 'PUT'
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(referee),
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function addStadium() {
        const stadium = {
            stadiumName,
            stadiumCity,
        };

        fetch("http://localhost:3001/addStadium", {
            method: "POST", // or 'PUT'
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(stadium),
        })
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function addMatch() {
        const match = {
            matchHomeClubId,
            matchAwayClubId,
            matchTournamentId,
            matchStadiumId,
            matchHomeResult,
            matchAwayResult,
        };

        fetch("http://localhost:3001/addMatch", {
            method: "POST", // or 'PUT'
            headers: {
                "content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(match),
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
            <div className="match">
                <div className="buttonContainer">
                    <button onClick={() => addMatch()}>Dodaj mecz</button>
                </div>
                <div className="inputsContainer">
                    <input
                        onChange={(e) => handleMatchTournamentIdChange(e)}
                        value={matchTournamentId}
                        type="number"
                        placeholder="id turnieju..."
                    />
                    <input
                        onChange={(e) => handleMatchStadiumIdChange(e)}
                        value={matchStadiumId}
                        type="number"
                        placeholder="id stadionu..."
                    />
                    <input
                        onChange={(e) => handleMatchHomeClubIdChange(e)}
                        value={matchHomeClubId}
                        type="number"
                        placeholder="id drużyny gospodarzy..."
                    />
                    <input
                        onChange={(e) => handleMatchAwayClubIdChange(e)}
                        value={matchAwayClubId}
                        type="number"
                        placeholder="id drużyny gości..."
                    />
                    <input
                        onChange={(e) => handleMatchHomeResultChange(e)}
                        value={matchHomeResult}
                        type="text"
                        placeholder="wynik drużyny gospodarzy..."
                    />
                    <input
                        onChange={(e) => handleMatchAwayResultChange(e)}
                        value={matchAwayResult}
                        type="text"
                        placeholder="wynik drużyny gości..."
                    />
                </div>
            </div>
            <div className="player">
                <div className="buttonContainer">
                    <button onClick={() => addPlayer()}>Dodaj piłkarza</button>
                </div>
                <div className="inputsContainer">
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
            </div>
            <div className="soccerClub">
                <div className="buttonContainer">
                    <button onClick={() => addSoccerClub()}>Dodaj klub</button>
                </div>
                <div className="inputsContainer">
                    <input
                        onChange={(e) => handleSoccerClubNameChange(e)}
                        value={soccerClubName}
                        type="text"
                        placeholder="nazwa klubu..."
                    />
                    <input
                        onChange={(e) => handleStadiumChange(e)}
                        value={stadium}
                        type="text"
                        placeholder="stadion..."
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
                        onChange={(e) => handleLossesChange(e)}
                        value={losses}
                        type="text"
                        placeholder="przegrane..."
                    />
                </div>
            </div>
            <div className="coach">
                <div className="buttonContainer">
                    <button onClick={() => addCoach()}>Dodaj trenera</button>
                </div>
                <div className="inputsContainer">
                    <input
                        onChange={(e) => handleCoachNameChange(e)}
                        value={coachName}
                        type="text"
                        placeholder="imie..."
                    />
                    <input
                        onChange={(e) => handleCoachSurnameChange(e)}
                        value={coachSurname}
                        type="text"
                        placeholder="nazwisko..."
                    />
                    <input
                        onChange={(e) => handleCoachRoleChange(e)}
                        value={coachRole}
                        type="text"
                        placeholder="rola..."
                    />
                    <input
                        onChange={(e) => handleCoachClubIdChange(e)}
                        value={coachClubId}
                        type="text"
                        placeholder="id klubu..."
                    />
                </div>
            </div>
            <div className="referee">
                <div className="buttonContainer">
                    <button onClick={() => addReferee()}>Dodaj sędziego</button>
                </div>
                <div className="inputsContainer">
                    <input
                        onChange={(e) => handleRefereeNameChange(e)}
                        value={refereeName}
                        type="text"
                        placeholder="imie..."
                    />
                    <input
                        onChange={(e) => handleRefereeSurnameChange(e)}
                        value={refereeSurname}
                        type="text"
                        placeholder="nazwisko..."
                    />
                    <input
                        onChange={(e) => handleRefereeRoleChange(e)}
                        value={refereeRole}
                        type="text"
                        placeholder="rola..."
                    />
                </div>
            </div>
            <div className="referee">
                <div className="buttonContainer">
                    <button onClick={() => addStadium()}>Dodaj stadion</button>
                </div>
                <div className="inputsContainer">
                    <input
                        onChange={(e) => handleStadiumNameChange(e)}
                        value={stadiumName}
                        type="text"
                        placeholder="nazwa stadionu..."
                    />
                    <input
                        onChange={(e) => handleStadiumCityChange(e)}
                        value={stadiumCity}
                        type="text"
                        placeholder="miasto..."
                    />
                </div>
            </div>
        </div>
    );
};

export default Admin;

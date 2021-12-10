import "../styles/Highlight.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Highlight = () => {
    const navigate = useNavigate();

    function handleBackClick() {
        navigate(`/`);
    }

    return (
        <div className="Highlight">
            <nav className="backNavigation">
                <div className="backButton" onClick={() => handleBackClick()}>
                    <AiOutlineArrowLeft />
                </div>
                <div className="teams">
                    <p>Jagiellonia Białystok - Legia Warszawa</p>
                </div>
            </nav>
            <div className="summary">
                <div className="date">
                    <p>Koniec, 09.12.2021</p>
                </div>
                <div className="score">
                    <div className="first">
                        <img
                            src="https://jagiellonia.pl/wp-content/uploads/2021/11/Herb_Jagiellonii.png"
                            alt=""
                        />
                        <p>Jagiellonia Białystok</p>
                    </div>
                    <p>1</p>
                    <p>-</p>
                    <p>1</p>
                    <div className="second">
                        <img
                            src="https://www.logofootball.net/wp-content/uploads/Legia-Warszawa-FC-Logo.png"
                            alt=""
                        />
                        <p>Legia Warszawa</p>
                    </div>
                </div>
                <nav className="menuOptions">
                    <div className="statistics">STATYSTYKI</div>
                    <div className="squads">SKŁADY</div>
                </nav>
                <div className="statisticsOption">
                    <div className="statistic">
                        <p>Jagiellonia</p>
                        <p>Statystyki</p>
                        <p>Legia</p>
                    </div>
                    <div className="statistic">
                        <p>15</p>
                        <p>Strzały</p>
                        <p>9</p>
                    </div>
                    <div className="statistic">
                        <p>4</p>
                        <p>Strzały na bramkę</p>
                        <p>6</p>
                    </div>
                    <div className="statistic">
                        <p>32%</p>
                        <p>Posiadanie piłki</p>
                        <p>68%</p>
                    </div>
                    <div className="statistic">
                        <p>297</p>
                        <p>Podania</p>
                        <p>610</p>
                    </div>
                    <div className="statistic">
                        <p>62%</p>
                        <p>Celność podań</p>
                        <p>79%</p>
                    </div>
                    <div className="statistic">
                        <p>10</p>
                        <p>Faule</p>
                        <p>7</p>
                    </div>
                    <div className="statistic">
                        <p>0</p>
                        <p>Żółte kartki</p>
                        <p>0</p>
                    </div>
                    <div className="statistic">
                        <p>0</p>
                        <p>Czerwone kartki</p>
                        <p>0</p>
                    </div>
                    <div className="statistic">
                        <p>2</p>
                        <p>Spalone</p>
                        <p>2</p>
                    </div>
                    <div className="statistic">
                        <p>5</p>
                        <p>Rzuty rożne</p>
                        <p>4</p>
                    </div>
                </div>
                <div className="squadsOption"></div>
            </div>
        </div>
    );
};

export default Highlight;

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
            <nav>
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
            </div>
        </div>
    );
};

export default Highlight;

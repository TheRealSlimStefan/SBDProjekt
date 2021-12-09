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
            <div className="summary"></div>
        </div>
    );
};

export default Highlight;

import "../styles/PlayerElement.css";
import { useNavigate } from "react-router-dom";

const PlayerElement = ({ name, surname, id }) => {
    const navigate = useNavigate();

    function handlePlayerElementClick() {
        navigate(`/player/${id}`);
    }

    return (
        <div
            className="PlayerElement"
            onClick={() => handlePlayerElementClick()}
        >
            <img
                src="https://cdn2.iconfinder.com/data/icons/soccer-players/100/color-24-512.png"
                alt=""
            />
            <p>
                {name} {surname}
            </p>
        </div>
    );
};

export default PlayerElement;

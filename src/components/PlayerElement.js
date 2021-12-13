import "../styles/PlayerElement.css";
import { useNavigate } from "react-router-dom";

const PlayerElement = ({ name, surname, image }) => {
    const navigate = useNavigate();

    function handlePlayerElementClick(id) {
        navigate(`/player/${id}`, { state: { id: id } });
    }

    return (
        <div
            className="PlayerElement"
            onClick={() => handlePlayerElementClick()}
        >
            <img src={image} alt="" />
            <p>
                {name} {surname}
            </p>
        </div>
    );
};

export default PlayerElement;

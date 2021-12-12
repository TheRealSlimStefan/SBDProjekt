import "../styles/TeamElement.css";
import { useNavigate } from "react-router-dom";

const TeamElement = ({ name, surname, image }) => {
    const navigate = useNavigate();

    function handleTeamElementClick(id) {
        navigate(`/player/${id}`, { state: { id: id } });
    }

    return (
        <div className="TeamElement" onClick={() => handleTeamElementClick(1)}>
            <img src={image} alt="" />
            <div className="teamName">
                <p>{name}</p>
                <p>{surname}</p>
            </div>
        </div>
    );
};

export default TeamElement;

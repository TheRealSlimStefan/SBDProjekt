import "../styles/Team.css";
import { Route, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Team = () => {
    const { state } = useLocation();
    const { navigate } = useNavigate();
    const { id } = state;

    return (
            <h1>Team { id }</h1>
    )
}

export default Team;
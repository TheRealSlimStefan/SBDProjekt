import "../styles/Match.css";
import { Route, useNavigate, useLocation } from "react-router-dom";

const Team = () => {
    const { state } = useLocation();
    const { id } = state;

    return (
        <h1>Team { id }</h1>
    )
}

export default Team;
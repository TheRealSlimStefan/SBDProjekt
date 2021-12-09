import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Mecze</NavLink>
                </li>
                <li>
                    <NavLink to="/scoreboard">Tabela</NavLink>
                </li>
                <li>
                    <NavLink to="/teams">Zespoły</NavLink>
                </li>
                <li>
                    <NavLink to="/statistics">Statystyki</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

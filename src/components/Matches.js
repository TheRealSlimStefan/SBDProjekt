import "../styles/Matches.css";
import Match from "./Match";
import { useEffect } from "react";

const Matches = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3001/");
            const body = await response.json();
            console.log(body);
        };
        fetchData();
    }, []);

    return (
        <div className="Matches">
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
            <Match />
        </div>
    );
};

export default Matches;

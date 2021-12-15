import "../styles/Matches.css";
import Match from "./Match";
import { useEffect, useState } from "react";

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3001/");
            const body = await response.json();
            setMatches(body);
            // console.log(body);
            setLoaded(true);
        };
        fetchData();
    }, []);

    return (
        <div className="Matches">
            {loaded
                ? matches.map((match) => (
                      <Match
                          id={match[0]}
                          host={match[1]}
                          hostGoals={match[2]}
                          guest={match[3]}
                          guestGoals={match[4]}
                      />
                  ))
                : null}
        </div>
    );
};

export default Matches;

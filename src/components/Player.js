import "../styles/Player.css";

const Player = ({ name, surname, image }) => (
    <div className="Player">
        <img src={image} alt="" />
        <p>
            {name} {surname}
        </p>
    </div>
);

export default Player;

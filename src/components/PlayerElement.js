import "../styles/PlayerElement.css";

const PlayerElement = ({ name, surname, image }) => (
    <div className="PlayerElement">
        <img src={image} alt="" />
        <p>
            {name} {surname}
        </p>
    </div>
);

export default PlayerElement;

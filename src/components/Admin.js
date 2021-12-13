import "../styles/Admin.css";

const Admin = () => (
    <div className="Admin">
        <div className="player">
            <button onClick={() => {}}>Dodaj piłkarza</button>
            <input type="text" placeholder="name..." />
            <input type="text" placeholder="surname..." />
            <input type="text" placeholder="nationality..." />
            <input type="number" placeholder="age..." />
        </div>
    </div>
);

export default Admin;

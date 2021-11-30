import "./App.css";
import {
    BrowserRouter as Router,
    NavLink,
    Routes,
    Route,
} from "react-router-dom";

const Home = () => <h1>Strona startowa</h1>;
const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt</h1>;
const ErrorPage = () => <h1>Strona nie istnieje</h1>;

function App() {
    return (
        <Router>
            <div>
                <header>
                    <ul>
                        <li>
                            <NavLink to="/">Start</NavLink>
                        </li>
                        <li>
                            <NavLink to="/news">Aktualności</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Kontakt</NavLink>
                        </li>
                    </ul>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </section>
            </div>
        </Router>
    );
}

export default App;

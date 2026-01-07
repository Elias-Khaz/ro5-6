import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();

        const hasSymbol = /[^a-zA-Z0-9]/.test(password);

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        if (!hasSymbol) {
            setError("Password must contain a symbol")
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        navigate("/login");
    }

    return (
        <div className="auth-container">
            <h2>Register</h2>

            <form onSubmit={handleRegister}>
                <input 
                type="text" 
                placeholder="Username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
                />

                <input 
                type="password" 
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
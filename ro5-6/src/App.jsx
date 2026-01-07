import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import JokeGame from "./components/JokeGame";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/game" element={<JokeGame />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

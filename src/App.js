import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/Menu";
import Container from "./Components/Container";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wallet from "./Components/Wallet";

function App() {
  return (
   <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/wallet" element={<Wallet />} />
          </Routes>
        <Container />
      </div>
    </Router>
  );
}

export default App;

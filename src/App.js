
import "./App.css";
import Menu from "./Components/Menu";
import Container from "./Components/Container";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wallet from "./Components/Wallet";
import Footer from "./Components/Footer";

function App() {
  return (
   <Router>
        <div className="App">
       <div className="App-content">
         <Menu />
         <Routes>
           <Route path="/wallet" element={<Wallet />} />
           </Routes>
         <Container />
       </div>
       <Footer />
     </div>
    </Router>
  );
}

export default App;

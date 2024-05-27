import "./App.css";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./Components/Settings/SettingsPage";
import About_us from "./Components/footer_section/about_us/About_us";
import BlogPage from "./Components/footer_section/BlogPage/BlogPage"
import ContactUs from "./Components/footer_section/ContactUs/contact_us";

import Weather from "./Weather-Project/Weather";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content"></div>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/about" element={<About_us/>}/>
          <Route path="/weather" element={<Weather/>}/>
          <Route path="/contacts" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./Components/Settings/SettingsPage";
import About_us from "./Components/footer_section/about_us/About_us";
import BlogPage from "./Components/footer_section/BlogPage/BlogPage"
<<<<<<< HEAD
import UserProfile from ".//Components/UserProfile/UserProfile";
=======
import FAQPage from "./Components/footer_section/FAQPage/FAQPage";
import Services from "./Components/footer_section/services/Services";
import ContactUs from "./Components/footer_section/ContactUs/contact_us";
>>>>>>> 407a8adc2cb4928dde8d1c75e834602a45911744

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
<<<<<<< HEAD
          <Route path="/profile-page" element={<UserProfile />} />
=======
          <Route path="/faq" element={<FAQPage />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<ContactUs />} />
>>>>>>> 407a8adc2cb4928dde8d1c75e834602a45911744
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

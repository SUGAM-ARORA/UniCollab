import "./App.css";
import React from 'react';
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./Components/Settings/SettingsPage";
import About_us from "./Components/footer_section/about_us/About_us";
import BlogPage from "./Components/footer_section/BlogPage/BlogPage";
// import Myapp from './src/Components/live-chat/examples/apps/chat-app/web/react-vite-tailwind/src/Myapp';

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
          {/* <Route path="/Myapp" element={<Myapp />} /> */}
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

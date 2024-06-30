import "./App.css";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./Components/Settings/SettingsPage";
import About_us from "./Components/footer_section/about_us/About_us";
import BlogPage from "./Components/footer_section/BlogPage/BlogPage"
import FAQPage from "./Components/footer_section/FAQPage/FAQPage";
import Services from "./Components/footer_section/services/Services";
import ContactUs from "./Components/footer_section/ContactUs/contact_us";
import Readmore from "./Components/Readmore";
import Login from "./Components/Login";
import Pricing from "./Components/footer_section/Pricing/pricing";
import MyProjects from "./Components/menu_section/my_projects/MyProjects";
import NewProject from "./Components/menu_section/new_project/NewProject";
import Error from "./Components/404_page/Error";
import Profiles from "./Components/Profiles";
import Profile from "./Components/Profile/profile";
import Licensing from "./Components/footer_section/Legal/Licensing";
import TermsConditions from "./Components/footer_section/Legal/TermsandConditions";
import PrivacyPolicy from "./Components/footer_section/Legal/PrivacyPolicy";
import Careers from "./Components/Careers/CareersPage";
import EmailVerification from "./Components/auth/resetPassword/EmailVerification";
import OTPVerification from "./Components/auth/resetPassword/OTPVerification";
import ResetPassword from "./Components/auth/resetPassword/ResetPassword";
import Freelancer from "./Components/FreeLancer/Freelancer";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content"></div>
        <Routes>
        <Route path="*" element={<Error />} />
          <Route path="/" element={<Container />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/termsandconditions" element={<TermsConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/licensing" element={<Licensing />} />
          <Route path="/readmore/:id" element={<Readmore/>}/>
          <Route path="/profile/:id" element={<Profiles/>}/>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/new/project" element={<NewProject />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/verifyEmail" element={<EmailVerification />} />
          <Route path="/otpVerification/:email" element={<OTPVerification />} />
          <Route path="/resetPassword/:email" element={<ResetPassword />} />
          <Route path="/freelancer" element={<Freelancer />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

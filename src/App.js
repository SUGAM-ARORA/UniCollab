import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./configs/router";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Settings from "./Components/Settings/SettingsPage";
import About_us from "./Components/footer_section/about_us/About_us";
import BlogPage from "./Components/footer_section/BlogPage/BlogPage";
import FAQPage from "./Components/footer_section/FAQPage/FAQPage";
import Services from "./Components/footer_section/services/Services";
import ContactUs from "./Components/footer_section/ContactUs/contact_us";
import Readmore from "./Components/Readmore";
import Login from "./Components/Login";
import testimonials from "./Components/Testimonials/Testimonials";
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
import Helmet from "react-helmet";
import Freelancer from "./Components/FreeLancer/Freelancer";
import ChatbotIcon from './Components/ChatbotIcon';
import GoToTop from './Components/gototop';

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Welcome to UniCollab, the ultimate platform for student collaboration. Connect with peers from various universities and colleges to innovate and elevate your projects. UniCollab: where ideas flow, knowledge is shared, and learning transcends classrooms." />
        <meta name="language" content="English" />
        <meta name="keywords" content="Collab, Education, Students, Student Collaboration, University Collaboration, College Projects, Innovative Learning, Peer Networking, Academic Collaboration, Project Sharing, Knowledge Sharing, Student Innovation, Collaborative Learning, University Networking, Inter-University Projects, Academic Networking, Collaborative Projects, Student Platform" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Sugma Arora" />
        <meta property="og:title" content="Unicollab" />
        <meta property="og:description" content="Welcome to UniCollab, the ultimate platform for student collaboration. Connect with peers from various universities and colleges to innovate and elevate your projects. UniCollab: where ideas flow, knowledge is shared, and learning transcends classrooms." />
        <meta property="og:image" content="https://github.com/SUGAM-ARORA/UniCollab/blob/main/image.png" />
        <meta property="og:url" content="https://uni-collab.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="App">
        <div className="App-content"></div>
        <div>
          <RouterProvider router={router} />
        </div>
        <GoToTop />
        <Footer />
        <ChatbotIcon />
        <a href="/feedback" style={{ position: 'fixed', bottom: '20px', left: '30px', zIndex: '1000' }}>
  <button
    style={{
      backgroundColor: '#ff21bc',
      fontSize: '17px', // Optional: sets text size
      width: '180px',  // Adjust width as needed
      height: '45px',  // Adjust height as needed
      padding: '0',    // Reset padding if needed
      border: 'none',  // Remove border if any
      borderRadius: '5px', // Optional: adds rounded corners
    }}
  >
    Help Us Improve!
  </button>
</a>

      </div>
    </>
  );
}

export default App;
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import { createBrowserRouter} from "react-router-dom";
import Settings from "../Components/Settings/SettingsPage";
import About_us from "../Components/footer_section/about_us/About_us";
import BlogPage from "../Components/footer_section/BlogPage/BlogPage";
import FAQPage from "../Components/footer_section/FAQPage/FAQPage";
import RateUs from "../Components/RateUs";
import Services from "../Components/footer_section/services/Services";
import ContactUs from "../Components/footer_section/ContactUs/contact_us";
import Readmore from "../Components/Readmore";
import Login from "../Components/Login";
import Pricing from "../Components/footer_section/Pricing/pricing";
import MyProjects from "../Components/menu_section/my_projects/MyProjects";
import NewProject from "../Components/menu_section/new_project/NewProject";
import Error from "../Components/404_page/Error";
import Profiles from "../Components/Profiles";
import Profile from "../Components/Profile/profile";
import Licensing from "../Components/footer_section/Legal/Licensing";
import TermsConditions from "../Components/footer_section/Legal/TermsandConditions";
import PrivacyPolicy from "../Components/footer_section/Legal/PrivacyPolicy";
import Careers from "../Components/Careers/CareersPage";
import EmailVerification from "../Components/auth/resetPassword/EmailVerification";
import OTPVerification from "../Components/auth/resetPassword/OTPVerification";
import ResetPassword from "../Components/auth/resetPassword/ResetPassword";
import Freelancer from "../Components/FreeLancer/Freelancer";
import Feedbackform from "../Components/feedback/feedbackform";
import ShoppingCart from "../Components/cart/cart";
import Contributors from "../Components/Contributors";


const router = createBrowserRouter([
    { path: "*", element: <Error /> },
    { path: "/", element: <Container /> },
    { path: "/login", element: <Login /> },
    { path: "/settings", element: <Settings /> },
    { path: "/about", element: <About_us /> },
    { path: "/blogs", element: <BlogPage /> },
    { path: "/faq", element: <FAQPage /> },
    { path: "/rateus", element: <RateUs /> },
    { path: "/services", element: <Services /> },
    { path: "/contacts", element: <ContactUs /> },
    { path: "/termsandconditions", element: <TermsConditions /> },
    { path: "/privacypolicy", element: <PrivacyPolicy /> },
    { path: "/licensing", element: <Licensing /> },
    { path: "/readmore/:id", element: <Readmore /> },
    { path: "/profile/:id", element: <Profiles /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/projects", element: <MyProjects /> },
    { path: "/new/project", element: <NewProject /> },
    { path: "/profile", element: <Profile /> },
    { path: "/careers", element: <Careers /> },
    { path: "/verifyEmail", element: <EmailVerification /> },
    { path: "/otpVerification/:email", element: <OTPVerification /> },
    { path: "/resetPassword/:email", element: <ResetPassword /> },
    { path: "/freelancer", element: <Freelancer /> },
    { path: "/feedback", element: <Feedbackform /> },
    { path: "/cart", element: <ShoppingCart /> },
    { path: "/contributors", element: <Contributors /> },

  ]);

  export default router;
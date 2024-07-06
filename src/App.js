
import "./App.css";
import Footer from "./Components/Footer";
import { RouterProvider } from "react-router-dom";
import router from "./configs/router";

function App() {
  return (
    <div className="App">
      <div className="App-content"></div>
      <div>
          <RouterProvider router={router} />
      </div>
      <Footer />
      <ChatbotIcon />
    </div>
  );
}

export default App;

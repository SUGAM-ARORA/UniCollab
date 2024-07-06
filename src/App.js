import "./App.css";
import Footer from "./Components/Footer";
import { RouterProvider } from "react-router-dom";
import router from "./configs/router";

// Define the routes

function App() {
  return (
    <div className="App">
      <div className="App-content"></div>
      <div>
          <RouterProvider router={router} />
      </div>

      <Footer />
    </div>
  );
}

export default App;

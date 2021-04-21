import { BrowserRouter as Router } from "react-router-dom";

import HeaderPage from "./components/main/header-page";
import FooterPage from "./components/main/footer-page";
import RouterConfig from "./router/routerConfig";

import "./content/styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderPage />
        <RouterConfig />
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/main/header";
import Footer from "./components/main/footer";
import RouterConfig from "./router/routerConfig";


import "./content/styles/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <RouterConfig />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

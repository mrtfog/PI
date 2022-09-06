import './App.css';
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={LandingPage} />
    </div>
  );
}

export default App;

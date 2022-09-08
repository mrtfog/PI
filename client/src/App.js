import './App.css';
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import Home from './components/Home/Home';
import { Route } from "react-router-dom";
import NavBar from './layout/NavBar/NavBar'

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={LandingPage} />
        
        <Route path="/home" component={NavBar} />
        <Route exact path="/home" component={Home} />
    </div>
  );
}

export default App;

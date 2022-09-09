import './App.css';
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import Home from './components/Home/Home';
import { Route } from "react-router-dom";
import NavBar from './layout/NavBar/NavBar'
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={LandingPage} />
        
        <Route path="/home" component={NavBar} />
        <Route exact path="/home" component={Home} />

        <Route path="/videogames" component={NavBar} />
        <Route
          exact path="/videogames/:id"
          render={({ match }) => < Detail id={match.params.id} />}
        />

        <Route path="/results" component={NavBar} />
        <Route
          exact path="/results/:name"
          component={Search} 
        />
    </div>
  );
}

export default App;

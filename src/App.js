import "./App.css";

import Home from "./Home";

import Gallery from "./Gallery";
import Photo from "./Photo";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


 

function App() {
 

  return (
    <>
    <Router>
     
    <NavBar />

      <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/paint" component={Gallery} />
            <Route path="/photo" component={Photo} />
            
          </Switch>
        </div>

      </Router>

      

      </>
  );
}


export default App;

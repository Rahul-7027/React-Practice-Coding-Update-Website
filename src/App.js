import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Home from "./component/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./component/Contact";
import Blog from "./component/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

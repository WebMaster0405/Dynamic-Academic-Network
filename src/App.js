import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import EnglishTour from "./pages/english-tour";
import WhoWe from "./pages/who-we";
import TakeTour from "./pages/take-tour";
import News from "./pages/news"
import Footer from "./component/footer";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div style={{ height: '600px', width: '100%' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/english-tour" component={EnglishTour} />
            <Route path="/who-we-are" component={WhoWe} />
            <Route path="/take-tour" component={TakeTour} />
            <Route path="/news" component={News} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>

  );
}
export default App;

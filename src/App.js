import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import EnglishTour from "./pages/Englishtour";
import TakeTour from "./pages/Taketour";
import News from "./pages/News";
import Teachers from "./component/Home/Teachers";
import SignIn from "./pages/Sign/SignIn";
import Whoarewe from "./pages/Who";
// import Who from "./pages/Who";
import Footer from "./component/footer";
import './App.css';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div style={{ height: '100%', width: '100%' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/english-tour" component={EnglishTour} />  
            <Route exact path="/take-tour" component={TakeTour} />
            <Route exact path="/news" component={News} />
            <Route exact path="/whowe" component={Whoarewe} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/university_ranking" component={Teachers} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}
export default App;

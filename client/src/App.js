import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';

import Home from './Components/Home/Home';
//import Internship from "./Components/Internship/Internship";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import WhatWeDo  from './Components/Home/WorksComp/WhatWeDo';
//import AboutUs from './Components/AboutUs/AboutUs';
import ActivityChild from './Components/Home/Activity/ActivityChild';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/work/' component={WhatWeDo}/>
         <Route exact path="/ActivityChild" component={ActivityChild}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

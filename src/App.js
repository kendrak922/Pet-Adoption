import React,{Component} from "react";
import Home from "./Pages/home-pg.js";
import Contact from "./Pages/contact-pg.js";
import Animal from "./Pages/animal-pg.js";
import  Form from "./Pages/adopt-form-pg.js";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import "./App.css"


class App extends Component{ 
render(){
  return(
  <BrowserRouter>
  <div>
    <Nav />
      <Switch>
       <Route path="/" component={Home} exact/>
       <Route path="/animal" component={Animal}/>
       <Route path="/form" component={Form}/>
       <Route path="/contact" component={Contact}/>
     </Switch>
  </div> 
</BrowserRouter>
);
}
}
export default App;
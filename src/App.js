import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Resume from "./components/Resume";


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route component={Home} path='/' exact /> 
      <Route component={About} path='/about'/> 
      <Route component={Posts} path='/posts'/> 
      <Route component={Project} path='/project'/> 
      <Route component={Contact} path='/Contact'/> 
      <Route component={Resume} path='/resume'/> 

    </Switch>
    
    </BrowserRouter>
  );
}

export default App;

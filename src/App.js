import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import Services from './component/services/Services';
import Header from './component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';

function App() {
  return (
    <div className="App">
    
     <Router>
     <Header></Header>
     
       <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route path="/Home">
              <Home></Home>
         </Route>
         <Route path="/About">
           <About></About>
         </Route>
         <Route path="/Services">
           <Services></Services>
         </Route>
         <Route path="/Contact">
           <Contact></Contact>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;

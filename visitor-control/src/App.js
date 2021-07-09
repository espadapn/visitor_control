
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Visitors from './component/Visitors';
import Appointment from './component/Appointment';


function App() {
  return (
    <Router>
      <Navbar/>

      <Route path="/" exact>
      <Home/>
      </Route>

      <Route path="/visitors">
      <Visitors/>
      </Route>

      <Route path="/appointment">
      <Appointment/>
      </Route>
      
       
    </Router>
  )
  
}

export default App;

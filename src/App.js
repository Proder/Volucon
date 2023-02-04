import Navbar from './components/navbar';
import Landing from './components/Landing';
import Login from './components/login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes> 
          <Route exact path="/login"
          element={<Login/>}/>
          <Route exact path="/Signup"
          element={<Signup/>} />
          <Route exact path="/"
          element={<Landing/>} />
      </Routes>
    </div>
  );
}

export default App;

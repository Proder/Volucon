import Navbar from './components/navbar';
import Landing from './components/Landing';
import Login from './components/login';
import Signup from './components/Signup';
import Dashboard from './components/dashboard';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>  
          <Route exact path="/"
          element={<Login/>}/>
          <Route exact path="/Signup"
          element={<Signup/>} />
          <Route exact path="/dashboard"
          element={<Dashboard/>} />
          <Route exact path="/profile"
          element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;

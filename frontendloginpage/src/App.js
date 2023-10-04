import { useState } from 'react';
import './App.css';
// import Login from './Login';
// import Registration from './Registration';
import Dashboard from './LoginPage/Dashboard';
import Preferences from './LoginPage/Preferences';
import Registration from './LoginPage/Registration';
import Login from './LoginPage/Login';
import Home from './LoginPage/Home';
import { BrowserRouter as Router,Route,Switch, Routes} from 'react-router-dom';

function App() {
  const [token , setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      {/* <Login/>
      <br></br>
      <Registration/> */}
      <div className='wrapper'>
        {/* <h1>Application .JS</h1> */}
        <Router>
          <Routes>          
              <Route path='/' element={<Home/>}/>
              <Route path='/Home' element={<Login/>} />
              {/* <Route path='/dashboard' element={<h1>Dashboard</h1>} /> */}
              {/* <Route path='/login' element/> */}
              <Route path='/preference' element={<h1>Preferences</h1>}/>
              <Route path='/Registration' element={<Registration></Registration>}/>          
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;

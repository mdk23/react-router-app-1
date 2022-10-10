 
import './App.css';

import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Error from './components/Error';
import UserProfile from './components/UserProfile';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <br/>
          <nav>
            <Link to='/'> Home Page</Link> <br/>
            <Link to='/profile'> Profile Page</Link><br/>
            <Link to='/about'> About Page</Link>
          </nav>
          <br/>
          
          <Routes>
              <Route path='/'  element={<Home/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/profile/:username' element={<UserProfile/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='*' element={<Error/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

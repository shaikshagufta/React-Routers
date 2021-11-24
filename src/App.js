
import { useState } from 'react';
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Notfound from './pages/Notfound.js';
import Post from './pages/Post';
import Profile from './pages/Profile';

function App() {

  const [login, setlogin] = useState(false)

  return (
    <BrowserRouter >
      <div className="App">
        <Header />


        <button onClick={() => setlogin(!login)}>{login ? "logout" : "login"}</button>

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/profile'>
            {login ? <Profile /> : <Redirect to='/' />}
          </Route>
          <Route path='/post/:id' component={Post} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

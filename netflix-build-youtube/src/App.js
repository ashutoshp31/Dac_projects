import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      const unsubscribe= auth.onAuthStateChanged((userAuth) => {
        /* onAuthStateChanged is a listener*/
        if(userAuth){
          //Loggedin
         
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
          }))
        }
        else{
          //logged out
          dispatch(logout());
        }
       });
       return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">

      <Router>

        {/*A <Switch> looks through its children <Route>s abd 
          renders the first one that matches the current URL. */}

        {!user ?
          (<LoginScreen />)
          : (<Switch>
            <Route path = '/profile'>
              <ProfileScreen/>
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>)}
      </Router>
    </div>
  );
}

export default App;

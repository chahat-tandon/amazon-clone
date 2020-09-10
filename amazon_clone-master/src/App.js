import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import { Checkout } from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function App() {
  const [{},dispatch] = useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged(res=>{
      if(res){
        dispatch({
          type:'SET_USER',
          user:res
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[dispatch])
  return (
    <Router>

    <div className="App">
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/checkout">
          <Header>  </Header>

          <Checkout></Checkout>
        </Route>
        <Route>
          <Header>  </Header>

          <Home></Home>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

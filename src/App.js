import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Nav/> 
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path="/category" component={Category}/>
        <Route path="/adminarea" component={Adminarea}/>
    </div>

  );
}

<Switch>
<Route exact path="/" component={Home} data={data}/>
<Route path="/category" component={Category}/>
<Route path="/login" component={Login}/>
<PrivateRoute authed={fakeAuth.isAuthenticated} path='/products' component = {Products} />
</Switch>

export default App;

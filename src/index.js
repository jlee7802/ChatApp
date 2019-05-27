import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, BrowserRouter, Redirect} from 'react-router-dom';

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/MainApp'
import Category from './pages/Category'
import Group from './pages/Group'
import Chat from './pages/Chat'

class APIGateway extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Login}/> 
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/dashboard/:id/:name" render={(props) => <Dashboard {...props} userId={props.match.params.id} userName={props.match.params.name}/>}/>
      <Route path="/category" component={Category}/>
      <Route path='/group' component={Group}/>
      <Route path='/chat/:id' render={(props) => <Chat {...props} groupId={props.match.params.id}/>}/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

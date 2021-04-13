import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container/Container';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <PrivateRoute path="/contacts" component={ContactsView} redirectTo="/login" />
        </Switch>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
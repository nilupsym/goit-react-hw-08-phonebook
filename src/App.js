import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container/Container';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "home-page" */));
const RegisterView = lazy(() => import('./views/RegisterView' /* webpackChunkName: "register-page" */));
const LoginView = lazy(() => import('./views/LoginView' /* webpackChunkName: "login-page" */));
const ContactsView = lazy(() => import('./views/ContactsView' /* webpackChunkName: "contacts-page" */));
class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute path="/register" restricted component={RegisterView} redirectTo="/contacts" />
            <PublicRoute path="/login" restricted component={LoginView} redirectTo="/contacts" />
            <PrivateRoute path="/contacts" component={ContactsView} redirectTo="/login" />
          </Switch>
        </Suspense>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
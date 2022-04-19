import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import NotFound from 'App/Common/UIComponents/NotFound';
import NavBar from 'App/Layout/NavBar';
import NonLoggedIn from 'App/Layout/NonLogged';
import TopNavBar from 'App/Layout/TopNavBar';
import * as customLocalStorage from './utilities/storage/customLocalStorage';
import routes from './App/Router';
import { theme } from './theme';

const TitleComponent = ({ title }) => {
  const defaultTitle = 'Enerlly';
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
    </Helmet>
  );
};

function App() {
  const userToken = customLocalStorage.getItem('userToken', '', 'str');
  // This Function is sorting step by the designation
  const AuthRoute = ({ component: Component, title, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        userToken.length > 0 ? (
          <React.Fragment>
            <TitleComponent title={title} />
            <Component {...props} />
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
  let Navigation;
  if (userToken.length > 0) {
    if (
      window.location.pathname === '/enforced-reset-password' ||
      window.location.pathname === '/plan-status'
    ) {
      Navigation = TopNavBar;
    } else {
      Navigation = NavBar;
    }
  } else {
    Navigation = NonLoggedIn;
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation>
          <Switch>
            {routes.map((route) =>
              route.authRequired ? (
                <AuthRoute
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  title={route.title}
                  component={route.component}
                />
              ) : (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  title={route.title}
                  component={route.component}
                />
              ),
            )}
            <Route path="/health">
              <h3>Web app is healthy</h3>
            </Route>
            <Route path="">
              <NotFound />
            </Route>
          </Switch>
        </Navigation>
      </Router>
    </ThemeProvider>
  );
}

export default App;

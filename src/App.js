import React, { useEffect } from "react";
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from 'redux/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "antd/dist/antd.css";
import './App.scss';

import { userLogin } from 'redux/actions/app'

import { getAppError } from 'redux/selectors'

import MainPage from 'containers/MainPage';
import PostNews from 'containers/PostNews';
import ViewDetails from 'containers/ViewDetails';
import ViewAll from 'containers/ViewAll';
import AdminPage from 'containers/AdminPage';

import PageHeader from 'components/PageHeader';
import { GoogleAuthProvider, useGoogleAuth } from 'components/GoogleAuth';

import { BE_API_DEFAULT_ROUTE } from 'constants/app';



function AppContainer() {
  const dispatch = useDispatch()
  const appError = useSelector(getAppError)
  const googleAuth = useGoogleAuth();

  /*fetch(`${BE_API_DEFAULT_ROUTE.local}/user/authenticate`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ IdToken: googleAuth?.googleUser?.tokenId })
  }).then(response => response.json())
    .then(data => console.log('token invoke', data));*/


  useEffect(() => {
    dispatch(userLogin(googleAuth.googleUser))
  }, [googleAuth]);

  return (<>
    <PageHeader {...googleAuth} />
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage BE_API_DEFAULT_ROUTE={BE_API_DEFAULT_ROUTE} />
        </Route>
        <Route path="/dang-tin">
          <PostNews BE_API_DEFAULT_ROUTE={BE_API_DEFAULT_ROUTE} />
        </Route>
        <Route path="/view-details/:id">
          <ViewDetails BE_API_DEFAULT_ROUTE={BE_API_DEFAULT_ROUTE} />
        </Route>
        <Route exact path="/view-all">
          <Redirect to="/view-all/1" />
        </Route>
        <Route path="/view-all/:id">
          <ViewAll BE_API_DEFAULT_ROUTE={BE_API_DEFAULT_ROUTE} />
        </Route>
        <Route path="/admin">
          <AdminPage BE_API_DEFAULT_ROUTE={BE_API_DEFAULT_ROUTE} />
        </Route>
      </Switch>
    </Router>
  </>)
}

function App() {
  return (
    <Provider store={store}>
      <GoogleAuthProvider>
        <AppContainer />
      </GoogleAuthProvider>
    </Provider>
  );
}

export default App;
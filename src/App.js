import React from "react";
import { Provider } from 'react-redux';
import store from 'redux/store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "antd/dist/antd.css";
import './App.scss';

import MainPage from 'containers/MainPage';
import PostNews from 'containers/PostNews';
import ViewDetails from 'containers/ViewDetails';

import PageHeader from 'components/PageHeader';
import { GoogleAuthProvider, useGoogleAuth } from 'components/GoogleAuth';

import { BE_API_ROUTE } from 'constants/app';

function AppContainer() {
  const googleAuth = useGoogleAuth();
  console.log("🚀 ~ file: index.js ~ line 15 ~ PageHeader ~ googleUser", googleAuth);
  // fetch(`${BE_API_ROUTE.local}/user/authenticate`, {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ IdToken: googleAuth.googleUser.tokenId })
  // }).then(response => response.json())
  //   .then(data => console.log('data', data));



  return (<>
    <PageHeader {...googleAuth} />
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage BE_API_ROUTE={BE_API_ROUTE} />
        </Route>
        <Route path="/dang-tin">
          <PostNews />
        </Route>
        <Route path="/view-details/:id">
          <ViewDetails BE_API_ROUTE={BE_API_ROUTE} />
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
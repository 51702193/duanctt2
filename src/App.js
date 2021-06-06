import React from "react";
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
import { GoogleAuthProvider } from 'components/GoogleAuth';

import { BE_API_ROUTE } from 'constants/app';

function App() {
  return (
    <GoogleAuthProvider>
      <PageHeader />
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
    </GoogleAuthProvider>
  );
}

export default App;
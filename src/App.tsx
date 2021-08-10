import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Statistics from 'views/Statistics';
import Money from 'views/Money';
import NoMatch from './views/NoMatch';
import Tags from 'views/Tags';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="/money">
          <Route path="*">
            <Money/>
          </Route>
        </Redirect>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;

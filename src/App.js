import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux'

import { storeCreator } from './store';

import Nav from './components/Nav/Nav'
import Teams from './components/Teams/Teams'
import Team from './components/Team/Team'

console.log(createHistory);

const history = createHistory({basename:'/nfldataviewer'})
console.log(history);
const store = storeCreator({}, history);
// runSaga();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/" component={Teams} />
              <Route path="/teams" component={Teams} />
              <Route path="/team/:teamName" component={Team}/>
              <Route render={() => "Page Not Found"}/>
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

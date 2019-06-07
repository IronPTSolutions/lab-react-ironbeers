import React from 'react';
import Header from './misc/Header';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import BeerDetail from './BeerDetail';

function App() {
  return (
    <div className="App">
      <Header/>

      <main className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:beerId" component={BeerDetail} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />

          <Redirect to="/"/>
        </Switch>
      </main>
    </div>
  );
}

export default App;

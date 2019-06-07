import React from 'react';
import Section from './misc/Section';

const Home = () => (
  <article className="Home">
    <Section to="/beers" title="All Beers" description="go to all beers"/>
    <Section to="/random-beer" title="Random Beer" description="go to random beers" />
    <Section to="/new-beer" title="New beer" description="go to new beer" />
  </article>
);

export default Home
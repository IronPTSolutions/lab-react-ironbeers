import React from 'react';
import BeerService from '../services/BeerService';
import Beer from './Beer';

class Beers extends React.Component {
  state = {
    beers: [],
    search: ''
  }

  fetchBeers = () => {
    BeerService.list().then(response => {
      this.setState({ beers: response.data})
    })
  }

  searchBeers = () => {
    BeerService.search(this.state.search).then(response => {
      this.setState({ beers: response.data })
    })
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    }, () => {
      this.searchBeers()
    })
  }

  componentDidMount() {
    this.fetchBeers()
  }

  render() {
    return (
      <article className="Beers">
        <input className="form-control mb-3" value={this.state.search} onChange={this.handleChange} placeholder="Search..."/>

        {this.state.beers.map(beer => <Beer { ...beer } key={beer._id}/>)}
      </article>
    );
  }
}

export default Beers
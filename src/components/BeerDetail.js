import React from 'react'
import BeerService from '../services/BeerService';
import Beer from './Beer';

class BeerDetail extends React.Component {
  state = {
    beer: null
  }

  fetchBeer = () => {
    BeerService.detail(this.props.match.params.beerId).then(response => {
      this.setState({ beer: response.data })
    })
  }

  componentDidMount() {
    this.fetchBeer()
  }

  render() {
    return (
      <article className="BeerDetail">
        
        {this.state.beer && <Beer { ...this.state.beer } detail={true}/>}
      </article>
    )
  }
}

export default BeerDetail
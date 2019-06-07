import React from 'react';
import BeerService from '../services/BeerService';
import { Redirect } from 'react-router-dom'

class NewBeer extends React.Component {
  state = {
    data: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    },
    redirect: false
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    BeerService.create(this.state.data).then(
      response => this.setState({ redirect: true })
    )
  }

  render() {
    const { data, redirect } = this.state

    if (redirect) {
      return (
        <Redirect to="/beers"/>
      )
    }

    return (
      <article className="NewBeer">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input required type="text" className="form-control" id="name" onChange={this.handleChange} value={data.name} name="name"/>
          </div>

          <div className="form-group">
            <label htmlFor="tagline">Tagline</label>
            <input required type="text" className="form-control" id="tagline" onChange={this.handleChange} value={data.tagline} name="tagline"/>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            
            <textarea name="description" className="form-control" id="description" onChange={this.handleChange} value={data.description} rows={7}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="first_brewed">First Brewed</label>
            <input required type="text" className="form-control" id="first_brewed" onChange={this.handleChange} value={data.first_brewed} name="first_brewed" />
          </div>

          <div className="form-group">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input required type="text" className="form-control" id="brewers_tips" onChange={this.handleChange} value={data.brewers_tips} name="brewers_tips" />
          </div>

          <div className="form-group">
            <label htmlFor="attenuation_level">Attenuation level</label>
            <input required type="number" className="form-control" id="attenuation_level" onChange={this.handleChange} value={data.attenuation_level} name="attenuation_level" />
          </div>

          <div className="form-group">
            <label htmlFor="contributed_by">Contributed by</label>
            <input required type="text" className="form-control" id="contributed_by" onChange={this.handleChange} value={data.contributed_by} name="contributed_by" />
          </div>

          <button type="submit" className="btn btn-primary">Create</button>
        </form>
      </article>
    )
  }
}

export default NewBeer
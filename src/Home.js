import React, { Component } from 'react'
import SearchContainer from './Components/SearchContainer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Giphy Search</h1>
        <h3>search for gifs</h3>
        <SearchContainer giphs={this.props.giphs}/>
      </div>
    )
  }
}
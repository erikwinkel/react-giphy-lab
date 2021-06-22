import React, { Component } from 'react'
import Search from './Search'
import Results from './Results'

export default class SearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: '',
            searchResults: []
        }
    }

    search = (e) => {
        e.preventDefault()
        if(this.state.searchTerm){
            const newSearchTerm = this.state.searchTerm.toLowerCase()
            const newSearch = this.props.giphs.filter(giph => {
                return giph.url.includes(newSearchTerm) || giph.source.includes(newSearchTerm)
            })
    
            this.setState({
                searchResults: newSearch
            })
        }
    }

    changeSearch = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <Search value={this.searchTerm} onChange={this.changeSearch} onClick={this.search}/>
                <Results searchResults={this.state.searchResults}/>
            </div>
        )
    }
}
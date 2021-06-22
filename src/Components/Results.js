import { Component } from "react";

export default class Results extends Component {
    render() {
        let gifs = this.props.searchResults.map((gif,index) => {
            return <p key={index}>{gif.url}</p>
        })
        
        return (
            <div>
                {gifs}
            </div>
        )
    }
}
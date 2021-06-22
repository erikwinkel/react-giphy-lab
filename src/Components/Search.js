import { Component } from "react";

export default class Search extends Component {
    render() {
        return (
            <form>
                <input type="text" value={this.props.value} onChange={this.props.onChange}></input>
                <button onClick={this.props.onClick}>Search</button>
            </form>
        )
    }
}
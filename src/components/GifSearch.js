import React, {Component} from 'react'

class GifSearch extends Component {

    state = {
        query: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetch(this.state.query)
        
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={event => this.setState({query: event.target.value})} value={this.state.query} />
                </form>
            </div>
        )
    }
}

export default GifSearch;
import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

    state = {
        gifs: []
    }


    render() {
        return(
            <div>
            <GifSearch fetch= {this.fetchGifs}/>
            <GifList gifs= {this.state}/>
            </div>
        )
    }

    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=gYzLSCg6HgN8XX79JMhR2rejoMZLcFzl&limit=3`)
            .then(response => response.json())
            .then(({data}) => {
                this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
              })
    }

    componentDidMount() {
        this.fetchGifs();
    }
}
export default GifListContainer
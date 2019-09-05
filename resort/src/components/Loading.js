import React, { Component } from 'react'
import loadingGif from '../images/gif/giphy.gif';

export default class Loading extends Component {
    render() {
        return (
            <div  className="loading">
                <img src={loadingGif} alt="loading"/> 
            </div>
        )
    }
}

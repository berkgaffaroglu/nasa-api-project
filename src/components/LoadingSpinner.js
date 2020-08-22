import React, { Component } from 'react'

export class LoadingSpinner extends Component {
    render() {
        return (
            <div className="text-center" style={{margin:"20%"}}>
                
            <div className="spinner-border" >
                
                <span className="sr-only">Loading...</span>
            </div>
            <br />
            <strong className="mt-2">This can took a while, please wait.</strong>
            </div>
        )
    }
}

export default LoadingSpinner

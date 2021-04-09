import React, { Component } from 'react'
import {localize} from "./utils"
export class LoadingSpinner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            language: props.language
        }
    }
    render() {
        var language = this.state.language
        return (
            
            <div className="text-center" style={{margin:"20%"}}>
                
            <div className="spinner-border" >
                
                <span className="sr-only">{localize(language,"Yükleniyor...", "Loading...")}</span>
            </div>
            <br />
            <strong className="mt-2">{localize(language,"Bu biraz zaman alabilir, lütfen bekleyin.", "This can took a while, please wait.")}</strong>
            </div>
        )
    }
}

export default LoadingSpinner

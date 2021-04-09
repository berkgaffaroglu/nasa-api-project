import React, { Component } from 'react'
import moment from 'moment-timezone';
import { Image } from 'react-bootstrap'
import { LoadingSpinner } from './LoadingSpinner';
import {localize} from "./utils"
export class APOD extends Component {
    constructor(props) {
        super(props)

        this.state = {
            APOD: [],
            language: props.language,
            apiKey: props.api_key,
            render: false
        }

    }
    componentDidMount() {
        this.fetchAPOD()
    }

    handleDay = (date) => {
        var year = date.split('-')[0]
        var month = date.split('-')[1]
        var day = parseInt(date.split('-')[2])
        return `${year}-${month}-${day - 1}`
    }

    async fetchAPOD() {
        var currentDate = new Date()
        var utctz = moment(currentDate, 'MM/DD/YYYY HH:mm:ss').format('YYYY-MM-DD');
        var onedaybefore = this.handleDay(utctz)
        let APODResponse = await fetch(`https://api.nasa.gov/planetary/apod?date=${onedaybefore}&api_key=${this.state.apiKey}`);
        let data = await APODResponse.json();
        this.setState({
            APOD: data,
            render:true
        })


    }



    // media_type = (video,image)

    render() {
        var language = this.state.language
        var media_element = <div></div>
        if (this.state.APOD.media_type === 'image') {
            media_element = <a target="_blank" rel="noreferrer" href="https://apod.nasa.gov/apod/astropix.html"><Image alt={this.state.APOD.title} className="card-img-top" src={this.state.APOD.hdurl}></Image></a>
        }
        else if (this.state.APOD.media_type === 'video') {
            media_element = <iframe id="ytplayer" className="card-img-top" title="video_player" type="text/html"
                src={this.state.APOD.url}
                frameBorder="0" />
        }
        
        if(this.state.render) {

        return (
            <div className="mb-5">
                <h1 className="text-center text-uppercase"><b>{localize(language, "Günün Astronomik Fotografı", "Astronomical Picture of the Day")}</b></h1>
                <h4 className="text-center text-muted">{localize(language, "*NASA, her gün yeni bir astronomik fotoğraf paylaşmaktadır. Bu kısım her gün yenilenmektedir.", "*Everyday, NASA publishes a new astonomical picture. This section is updated everyday.")}</h4>
                <hr />
                <div className="card">
                    {media_element}
                    <div className="card-body mb-5">
                        <a target="_blank" rel="noreferrer" href="https://apod.nasa.gov/apod/astropix.html"><h5 className="card-title">{this.state.APOD.title}</h5></a>
                        <p className="card-text">{this.state.APOD.explanation}</p>
                        <p className="card-text"><small className="text-muted">{this.state.APOD.date}</small></p>
                        <a className="btn btn-success" target="_blank" rel="noreferrer" href="https://apod.nasa.gov/apod/astropix.html">{localize(language, 'Siteye göz at','Check the site')}</a>
                    </div>

                </div>
            </div>
        )
        } else {
            return (

                <LoadingSpinner language={language} />

            )
        }
    }
}

export default APOD

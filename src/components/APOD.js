import React, { Component } from 'react'
import moment from 'moment-timezone';
import { Image } from 'react-bootstrap'
export class APOD extends Component {
    constructor(props) {
        super(props)

        this.state = {
            APOD: [],
            apiKey: props.api_key,
        }
        
    }
    componentDidMount() {
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
        var tz = 'Europe/Istanbul';
        var utctz = moment.tz(currentDate, 'MM/DD/YYYY HH:mm:ss', tz).utc().format('YYYY-MM-DD');
        var onedaybefore = this.handleDay(utctz)
        try {
            let APODResponse = await fetch(`https://api.nasa.gov/planetary/apod?date=${utctz}&api_key=${this.state.apiKey}`);
            let data = await APODResponse.json();
            this.setState({
                APOD: data
            })
        } catch{
            let APODResponse = await fetch(`https://api.nasa.gov/planetary/apod?date=${onedaybefore}&api_key=${this.state.apiKey}`);
            let data = await APODResponse.json();
            this.setState({
                APOD: data 
            })
        }

    }



    // media_type = (video,image)

    render() {
        
        var media_element = <div></div>
        if (this.state.APOD.media_type === 'image') {
            media_element = <a target="_blank" href="https://apod.nasa.gov/apod/astropix.html"><Image alt={this.state.APOD.title} className="card-img-top" src={this.state.APOD.hdurl}></Image></a>
        }
        else if (this.state.APOD.media_type === 'video') {
            media_element = <iframe id="ytplayer" className="card-img-top" title="video_player" type="text/html"
                src={this.state.APOD.url}
                frameBorder="0" />
        }


        return (
            <>
                <h1 style={{ fontFamily: "Oswald" }} className="text-center"><b>Astronomical Picture of the Day</b></h1>
                <hr />
                <div className="card mb-4">
                    {media_element}
                    <div className="card-body">
                        <a target="_blank" href="https://apod.nasa.gov/apod/astropix.html"><h5 className="card-title">{this.state.APOD.title}</h5></a>
                        <p className="card-text">{this.state.APOD.explanation}</p>
                        <p className="card-text"><small className="text-muted">{this.state.APOD.date}</small></p>
                    </div>
                    
                </div>
            </>
        )
    }
}

export default APOD

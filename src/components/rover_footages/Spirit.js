import React, { Component } from 'react'
import { LoadingSpinner } from '../LoadingSpinner';
import { Alert } from 'react-bootstrap';
import {localize} from "../utils"

export class Spirit extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            opportunityFootage: [],
            language: props.language,
            apiKey: props.api_key,
            render: false,
            hasErrors: false,
        }
    }

    componentDidMount() {
        this.lastImage()
    }


    async lastImage() {

        try {
            // if there is no photos today throw a TypeError call goBack(currentSol)
            var spiritResponse = await (fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=180&api_key=${this.state.apiKey}`))
            var data = await spiritResponse.json()
            this.setState({
                spiritFootage: data,
                render: true,
            })
        }
        catch (err){
            console.log(err) //temp
        }


    }

    render() {

        var spiritFootageList = this.state.spiritFootage
        var language = this.state.language
        if (this.state.render) {

            return (
                <div className="mb-5">
                    <h1 className="text-center mt-4 mb-4">
                        {localize(language,<>Spirit Rover'ının Mars'ta <b>180. Gününde</b> Çektiği Fotoğraflar</>,<>Raw Footages From <b>Spirit</b> at   <span className="sol_footage">SOL 180</span></>)}
                    <hr/></h1>
                    <center>

                        <div className="row justify-content-center content-curiosity">
                            {
                                spiritFootageList.photos.map(
                                    function (footage, index) {
                                        return (
                                            <div className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5">
                                                <div className="card">
                                                    <a href={footage.img_src} rel="noreferrer" target="_blank"><img src={footage.img_src} alt={index} className="card-img-top footage-card" /></a>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </center>






                </div >
            )

        } else if (this.state.hasErrors) {
            return (
                <Alert variant="danger" className="mt-4">
                    <Alert.Heading>Sorry, there was an error.</Alert.Heading>
                    <p>Please refresh the page or try again later.</p>
                </Alert>
            )
        } else {
            return (

                <LoadingSpinner language={this.state.language} />

            )
        }
    }
}

export default Spirit

import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
function Home() {
    return (

        <div className="jumbotron jumbotron-fluid bg-dark text-white home-jumbotron p-5" style={{ fontFamily: "MavenPro" }}>
            <div className="container">
                <h1 className="display-4">Nasa API Project</h1>
                <p className="lead">I have written this project using only Reactjs. For this particular project, I used
                <a target="_blank" className="text-warning" href="https://api.nasa.gov/"><span> NASA's public API</span></a> to get all the data that I need.
                        <br />
                        In this application, you can see
                        <LinkContainer className="text-warning" to="apod/"><Link> APOD (Astronomy Picture of the Day)</Link>
                    </LinkContainer> or raw footages that are served by
                        <LinkContainer className="text-success" to="roverfootage/curiosity/"><Link> Curiosity</Link></LinkContainer>
                        , <LinkContainer className="text-success" to="roverfootage/spirit/"><Link> Spirit</Link></LinkContainer> and
                        <LinkContainer className="text-success" to="roverfootage/opportunity/"><Link> Opportunity</Link></LinkContainer> (mars discovery rovers).
                        You can go back to my portfolio just by clicking the button below.
                        </p>
                <a href="http://berkgaffaroglu.com/" target="_blank" className="btn btn-lg btn-success ml-2 mt-3">MY PORTFOLIO</a>
            </div>
        </div>
    )
}

export default Home

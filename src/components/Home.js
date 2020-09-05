import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import {AiOutlineGithub} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
function Home() {
    return (

        <div className="jumbotron jumbotron-fluid bg-white text-dark pl-3 pr-3" style={{ fontFamily: "MavenPro" }}>
            <div className="container">
                <h1 className="display-4 mb-3">Nasa API Project</h1>
                <p className="lead">Hi! My name is Berk Gaffaroğlu. I have written this project using only Reactjs. For this particular project, I used
                <a target="_blank" className="text-danger" href="https://api.nasa.gov/"><span> NASA's public API</span></a> to get all the data that I need.
                        In this application, you can see
                        <LinkContainer className="text-info" to="/apod"><Link> APOD (Astronomy Picture of the Day)</Link>
                    </LinkContainer> or raw footages that are served by
                        <LinkContainer className="text-info" to="/roverfootage/curiosity"><Link> Curiosity</Link></LinkContainer>
                        , <LinkContainer className="text-info" to="/roverfootage/spirit"><Link> Spirit</Link></LinkContainer> and
                        <LinkContainer className="text-info" to="/roverfootage/opportunity"><Link> Opportunity</Link></LinkContainer> (mars discovery rovers).
                        You can either go back to my portfolio or the code for this project using the buttons below.
                        </p>
                <a href="http://berkgaffaroglu.com/" target="_blank" className="btn btn-lg btn-info ml-2 mt-3"><span className="text-white"><MdAccountCircle/> MY PORTFOLIO</span></a>
                <a href="https://github.com/berkgaffaroglu/nasa-api-project/" target="_blank" className="btn btn-lg btn-danger ml-2 mt-3"><span className="text-white"><AiOutlineGithub/> THE CODE</span></a>

            </div>
        </div>
    )
}

export default Home

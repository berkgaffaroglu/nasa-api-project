import {React, Component} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import {AiOutlineGithub} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
import {localize} from "./utils"
import { withRouter } from "react-router";
export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            language: props.language
        }
    }

    render(){

        var language = this.state.language
        const description = localize(
            language,
            <>
            Merhabalar! Benim ismim Berk Gaffaroğlu. Bu projeyi Reactjs kullanarak geliştirdim. Bu proje için herkese açık olan
            <a target="_blank" rel="noreferrer" className="text-danger" href="https://api.nasa.gov/"><span> NASA API</span></a>'ını ihtiyacım olan verileri alabilmek
            için kullandım.
            Bu uygulamada <LinkContainer className="text-info" to="/apod"><Link> Günün Astronomik Fotoğrafı</Link></LinkContainer>'nı,  
            <LinkContainer className="text-info" to="/roverfootage/curiosity"><Link> Curiosity</Link></LinkContainer>, 
            <LinkContainer className="text-info" to="/roverfootage/spirit"><Link> Spirit</Link></LinkContainer> ve
            <LinkContainer className="text-info" to="/roverfootage/opportunity"><Link> Opportunity</Link></LinkContainer> adlı Mars Rover'larının çektikleri görüntülere göz atabilirsiniz.
            İsterseniz aşağıdaki butonlardan portföyüme geri gidebilir veya bu projenin kodlarına göz atabilirsiniz.
            </>
            ,
            <>
                Hi! My name is Berk Gaffaroğlu. I have written this project using only Reactjs. For this particular project, I used
                <a target="_blank" rel="noreferrer" className="text-danger" href="https://api.nasa.gov/"><span> NASA's public API</span></a> to get all the data that I need.
                        In this application, you can see
                        <LinkContainer className="text-info" to="/apod"><Link> APOD (Astronomy Picture of the Day)</Link>
                    </LinkContainer> or raw footages that are served by
                        <LinkContainer className="text-info" to="/roverfootage/curiosity"><Link> Curiosity</Link></LinkContainer>
                        , <LinkContainer className="text-info" to="/roverfootage/spirit"><Link> Spirit</Link></LinkContainer> and
                        <LinkContainer className="text-info" to="/roverfootage/opportunity"><Link> Opportunity</Link></LinkContainer> (mars discovery rovers).
                        You can either go back to my portfolio or the code for this project using the buttons below.
            </>)

        return(
        <div className="jumbotron jumbotron-fluid bg-light text-dark pl-3 pr-3" style={{marginBottom: "600px"}}>
            <div className="container">
                <h1 className="display-4 mb-3">Nasa API {localize(language,'Projesi','Project')}</h1>
                <p className="lead" style={{fontSize:"30px"}}>
                {description}
                </p>
                
                <a rel="noreferrer" href="http://berkgaffaroglu.com/" target="_blank" className="btn btn-lg btn-info ml-2 mt-3"><span className="text-white"><MdAccountCircle/> {localize(language, "PORTFÖYÜM", "MY PORTFOLİO")}</span></a>
                <a href="https://github.com/berkgaffaroglu/nasa-api-project/" rel="noreferrer" target="_blank" className="btn btn-lg btn-danger ml-2 mt-3"><span className="text-white"><AiOutlineGithub/> {localize(language, "KOD", "THE CODE")}</span></a>

            </div>
        </div>
        )
    }
}

export default Home

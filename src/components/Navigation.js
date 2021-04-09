import React, { Component } from 'react'
import { Nav, Navbar, DropdownButton } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { withRouter } from 'react-router-dom'
import { RiSpaceShipFill } from 'react-icons/ri'
import { localize } from "./utils"


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: props.language,
            activeKey: null,
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        })
    }
    handleChange(event) {

        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.value != "") {
            this.props.history.push(`/search/${this.state.value}`);
        } else {
            event.preventDefault();
        }
    }
    updateLanguage(lang_code) {
        this.props.changeLanguage(lang_code)
        this.setState({ language: lang_code })
    }
    render() {
        var language = this.state.language

        const language_button = language == 'EN' ? <button className="btn btn-lg btn-outline-success text-white float-right mr-5" style={{width:"150px"}} onClick={() => this.updateLanguage('TR')}>Türkçe</button> : <button className="btn btn-lg btn-outline-danger text-white mr-5 w-10" style={{width:"150px"}} onClick={() => this.updateLanguage('EN')}>English</button>
        return (
            <>
                <Navbar bg="dark" className="p-2 mb-5" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav pull-left ml-1" />
                    <LinkContainer exact to='/' className="p-4" style={{ fontSize: "28px" }}><Navbar.Brand><b><RiSpaceShipFill style={{ color: "#ff600a" }} /> {localize(language, " NASA PROJESİ", " NASA PROJECT")}</b></Navbar.Brand></LinkContainer>
                    
                    <Navbar.Collapse id="basic-navbar-nav" style={{ fontSize: "24px" }}>
                        <Nav>
                            <LinkContainer exact to='/'><Nav.Link className="custom-navlink mr-2">{localize(language, "Anasayfa", "Home")}</Nav.Link></LinkContainer>
                            <LinkContainer to='/apod'><Nav.Link className="custom-navlink mr-2">{localize(language, "Günün Astronomi Fotoğrafı", "Astronomy Picture of the Day")}</Nav.Link></LinkContainer>
                            <LinkContainer to='/roverfootage/curiosity'><Nav.Link className="custom-navlink mr-2">Curiosity</Nav.Link></LinkContainer>
                            <LinkContainer to='/roverfootage/opportunity'><Nav.Link className="custom-navlink mr-2">Opportunity</Nav.Link></LinkContainer>
                            <LinkContainer to='/roverfootage/spirit'><Nav.Link className="custom-navlink mr-3">Spirit</Nav.Link></LinkContainer>
                            
                        </Nav>
                        
                    </Navbar.Collapse>
                    {language_button}
                </Navbar>
            </>


        )
    }
}

export default withRouter(Navigation)
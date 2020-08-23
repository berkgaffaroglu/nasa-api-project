import React, { Component } from 'react'
import { Nav, Form, Button, FormControl, Navbar, NavDropdown, Dropdown, DropdownButton } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { withRouter } from 'react-router-dom'
import {RiSpaceShipFill} from 'react-icons/ri'


class Navigation extends Component {
    constructor(state) {
        super(state);
        this.state = {
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

    render() {

        return (
            <>
                <Navbar bg="white" className="p-2 mb-5" variant="light" expand="lg">
                    <LinkContainer exact to='/'><Navbar.Brand><b><RiSpaceShipFill/> NASA PROJECT</b></Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <LinkContainer exact to='/'><Nav.Link style={{ marginBottom: "100px" }} className="custom-navlink">Home</Nav.Link></LinkContainer>
                            <LinkContainer to='apod/'><Nav.Link className="custom-navlink">APOD</Nav.Link></LinkContainer>

                            <DropdownButton variant="light" title="Rover">
                                <LinkContainer to='roverfootage/curiosity'><Nav.Link className="custom-navlink">Curiosity</Nav.Link></LinkContainer>
                                <LinkContainer to='roverfootage/opportunity'><Nav.Link className="custom-navlink">Opportunity</Nav.Link></LinkContainer>
                                <LinkContainer to='roverfootage/spirit'><Nav.Link className="custom-navlink">Spirit</Nav.Link></LinkContainer>
                            </DropdownButton>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </>


        )
    }
}

export default withRouter(Navigation)
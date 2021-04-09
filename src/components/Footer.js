import React, { Component, PureComponent } from 'react'
import { GiPowerLightning } from 'react-icons/gi'
import { localize } from './utils'
export class Footer extends Component {
    render() {

        var language = this.props.language
        return (

            <footer className="footer bg-dark text-white text-center p-2">
                <div>
                    <h1 style={{ fontSize: "20px" }} className="footer-text text-white"><GiPowerLightning /> 
                        {
                            localize(
                                language,
                                <><a className="text-danger" rel="noreferrer" href="https://reactjs.org/" target="_blank"> React.js</a> ile geliştirildi. © 2021 Tüm hakları saklıdır. </>,
                                <> Powered by <a className="text-danger" rel="noreferrer" href="https://reactjs.org/" target="_blank">React.js</a> © 2021 All rights reserved. </>
                            )
                        }

                    </h1>
                </div>
            </footer>
        )
    }
}

export default Footer

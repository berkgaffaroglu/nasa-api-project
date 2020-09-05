import React, { PureComponent } from 'react'
import {GiPowerLightning} from 'react-icons/gi'
export class Footer extends PureComponent {
    render() {
        return (
            <footer style={{backgroundColor:"white"}} className="footer fixed-bottom text-white text-center">
            <div>
                <h1  style={{ fontFamily: "AnticSlab" },{fontSize:"15px"}} className="footer-text"><GiPowerLightning/> Powered by <a style={{color:"#fc002a"}} href="https://reactjs.org/" target="_blank">React.js</a></h1>
            </div>
        </footer>
        )
    }
}

export default Footer

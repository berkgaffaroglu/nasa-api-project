import React, { PureComponent } from 'react'
import {GiPowerLightning} from 'react-icons/gi'
export class Footer extends PureComponent {
    render() {
        return (
            <footer className="footer fixed-bottom bg-dark text-white text-center p-2">
            <div>
                <h1  style={{ fontFamily: "AnticSlab" },{fontSize:"15px"}} className="text-white"><GiPowerLightning/> Powered by <a style={{color:"#fc002a"}} href="https://reactjs.org/" target="_blank">React.js</a></h1>
            </div>
        </footer>
        )
    }
}

export default Footer

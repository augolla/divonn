import React from 'react'
import {BsGear} from 'react-icons/bs'
import './Header.css'

class Header extends React.Component {
    render(){
        return(
            <div style={{height:"800px"}} id='Divonn/construction'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h4 className="navbar-brand" style={{ fontWeight: '800px', color:'#009387'}}>Divonn</h4>

                    {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Overview <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Enterprise <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Entertainment <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resources <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        
                    </div> */}
                </nav>
                <div className='gear'><BsGear size='5rem' color='#F84B81'/></div>
                <h1 style={{ color:'#009387',fontWeight:'700'}}>Under Construction</h1>
                <h4>Our site is currently undergoing maintenance.Sorry for the inconvinience</h4>
                <h4>We will be back shortly.</h4>
            </div>
        )
    }
}



export default Header
import React, { Component } from 'react';
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container px-5">
                    <a className="navbar-brand" href="index.html">404 - Not Found</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">    
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="tintuc.html">Write review</a></li>
                            <li className="nav-item"><a className="nav-link" href="chitiet.html"></a></li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="tintuc.html"><i className="fa fa-user" aria-hidden="true"/> Sign Up</a></li>
                            <li className="nav-item"><a className="nav-link" href="chitiet.html"><i className="fas fa-sign-in-alt" /> Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
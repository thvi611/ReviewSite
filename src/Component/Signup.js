import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
           <div className="background-signup">
                <div className="d-flex justify-content-center h-100 col">
                <div className="cardSU" >
                    <div className="card-header">
                    <div className="d-flex justify-content-center">
                    <h3>Sign Up</h3>
                    </div>
                    <div className="d-flex justify-content-center links">
                    <p>Please fill in this form to create an account.</p>
                    </div>
                    </div>
                    <div className="card-body">
                    <form>
                        <div className="form-group">
                        <div className="links">
                        Name<input type="text" className="form-control" placeholder="Enter Name" />
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="links">
                        Account Name<input type="text" className="form-control" placeholder="Enter Account Name" />
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="links">
                        Password<input type="password" className="form-control" placeholder="Password" />
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="links">
                        Confirm password<input type="password" className="form-control" placeholder="Confirm Password" />
                        </div>
                        </div>
                        <div className="row align-items-center remember">
                        <input type="checkbox" />By creating an account you agree to our &nbsp;<a href="/" className="term">Terms & Privacy</a>
                        </div>  
                    </form>
                    </div>
                    <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                    <div className="form-group">
                        <input type="submit" value="OK" className="btn center ok_btn" />
                    </div>
                    </div>
                    </div>
                </div>
                </div>
           </div>
        );
    }
}

export default Signup;
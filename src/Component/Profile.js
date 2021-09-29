import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
           <div>
                <div className="d-flex justify-content-center h-100 col">
                <div className="cardP" >
                    <div className="card-header">
                    <div className="d-flex justify-content-center">
                    <h3>Profile</h3>
                    </div>
                    </div>
                    <div className="card-body">
                    <form>
                        <div className="form-group">
                        <div className="links">
                        Display Name<input type="text" className="form-control" placeholder="Enter Name" />
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="links">
                        Email<input type="text" className="form-control" placeholder="Enter Email" />
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="links">
                        Phone<input type="text" className="form-control" placeholder="Phone number" />
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="links">
                        Country<input type="text" className="form-control" placeholder="Country" />
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="links">
                        User ID<input type="text" className="form-control" placeholder="Enter ID" />
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

export default Profile;
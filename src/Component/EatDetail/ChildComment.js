import React, { Component } from 'react';

class ChildComment extends Component {
    render() {
        return (
            <div>
                <hr />
                <div className="media-block">
                <a className="media-left" href="/#"><img alt="Avatar" class="avatar" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" /></a>
                    <div className="media-body">
                    <div className="mar-btm">
                        <a href="/#" className="btn-link text-semibold media-heading box-inline">Xuan Trong</a>
                        <p className="text-muted text-sm"> - From VietNam</p>
                    </div>
                    <p>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <div className="pad-ver">
                        <div className="btn-group">
                        <a className="btn btn-sm btn-default btn-hover-success active" href="/#"><i className="fa fa-thumbs-up" /></a>
                        <a className="btn btn-sm btn-default btn-hover-danger" href="/#"><i className="fa fa-thumbs-down" /></a>
                        </div>
                        <a className="btn btn-sm btn-default btn-hover-primary" href="/#">Comment</a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChildComment;
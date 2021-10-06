import React, { Component } from 'react';
import ChildComment from './ChildComment';


class CommentPost extends Component {
    constructor(props) {
      super(props);
      this.state ={
        isOpen: true
      }
    }
    showChildComment = () =>{
      if(this.state.isOpen){
          return (
            <div>
              <ChildComment/>
              <ChildComment/>
            </div>
          );    
      }
    }
    onChange = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
    render() {
        return (
          <div className="container bootdey">
            <div className="col-md-12 bootstrap snippets">
              <div className="panel">
                <div className="panel-body">
                  {/* Newsfeed Content */}
                  {/*===================================================*/}
                  <div className="media-block">
                    <a className="media-left" href="#"><img src="avatar.png" alt="Avatar" class="avatar" src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" /></a>
                    <div className="media-body">
                      <div className="mar-btm">
                        <a href="#" className="btn-link text-semibold media-heading box-inline">Takudo.</a>
                         <p className="text-muted text-sm"><i className="flag flag-japan"></i> - From Japan </p>
                      </div>
                      <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                      <div className = "row">
                        <img className="img-responsive thumbnail p-2" src="https://via.placeholder.com/200x180" alt="Image" />
                        <img className="img-responsive thumbnail p-2" src="https://via.placeholder.com/200x180" alt="Image" />
                        <img className="img-responsive thumbnail p-2" src="https://via.placeholder.com/200x180" alt="Image" />
                      </div>
                      <div className="pad-ver">
                        <div className="btn-group">
                          <a className="btn btn-sm btn-default btn-hover-success" href="#"><i className="fa fa-thumbs-up" /></a>
                          <a className="btn btn-sm btn-default btn-hover-danger" href="#"><i className="fa fa-thumbs-down" /></a>
                        </div>
                        <a className="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
                        {<a className="btn btn-sm" onClick={() => this.onChange()}>collapse all</a>}
                      </div>
                      <hr />
                      {/* Comments */}
                      <div>
                        {this.showChildComment()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default CommentPost;
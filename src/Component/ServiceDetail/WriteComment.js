import React, { Component } from 'react';

class WriteComment extends Component {
    render() {
        return (
            <div className="container bootdey">
                <div className="col-md-12 bootstrap snippets">
                    <div className="panel">
                        <div className="panel-body">
                        <textarea className="form-control" rows={2} placeholder="Write your comment" />
                        <div className="mar-top clearfix">
                            <button className="btn btn-sm btn-primary pull-right" type="submit"> Post</button>
                            <a className="btn btn-trans btn-icon fa fa-upload" href="#" />
                            <a name="" id="" class="btn btn-primary " href="#" role="button"><i class="fa fa-upload" aria-hidden="true"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WriteComment;
import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="form-group ">
                <div className="btn-group col search-bar">
                    <input type="text" className="form-control "  placeholder="Where to?"/>
                    <div className="btn btn-info search" ><i className="fa fa-search" aria-hidden="true"></i>   Tìm</div>
                </div>
            </div>   
        );
    }
}

export default SearchBar;
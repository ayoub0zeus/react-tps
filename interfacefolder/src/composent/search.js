import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="my-3">
        <div className="input-group mb-3 mx-3">
          <div className="input-group-prepend" style={{ width: '85%' }}>
            <input type="text" className="form-control form-control-lg" placeholder="Search..." aria-label="Search..."/>
          </div>
          <div className="input-group-append" style={{ width: '15%' }}>
            <a href="search.html">
              <button className="btn btn-lg">
                <i className="fa-solid fa-search" style={{ color: '#ef9b0f' }}></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}



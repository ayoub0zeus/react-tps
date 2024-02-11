import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="my-3">
        <div className="input-group mb-3 ">
        <div className="input-group-prepend mx-2" style={{ width: "10%" }}>
          <a href="#">
            <button className="btn btn-lg">
              <i className="fa-solid fa-arrow-left" style={{ color: "#ef9b0f" }} ></i>
            </button>
          </a>
        </div>
          <div className="input-group-prepend" style={{ width: "70%" }}>
            <input type="text" className="form-control form-control-lg" placeholder="Search..." aria-label="Search..."
            />
          </div>
          <div className="input-group-append" style={{ width: "10%" }}>
            <button className="btn btn-lg">
              <i className="fa-solid fa-sliders"  style={{ color: "#ef9b0f" }} ></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

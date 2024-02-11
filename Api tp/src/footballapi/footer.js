import React from "react";
import './footballapi.css'
export default class Footer extends React.Component {
  render() {
    return (
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container-fluid">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <h3>©Univa </h3>
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            {" "}
            , Inc. All Rights Reserved.
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-around list-unstyled d-flex">
          <i className="fa-brands fa-2x fa-twitter" />
          <i className="fa-brands fa-2x fa-facebook" />
          <i className="fa-solid fa-2x fa-blog" />
        </ul>
      </footer>
    );
  }
}

import React, { Component } from 'react';
export default class Nav extends Component {
  render() {
    const iconsData = [
      { id: 1, href: '#home', iconClass: 'fas fa-home fa-2x', text: 'Home' },
      { id: 2, href: '#search', iconClass: 'fas fa-search fa-2x', text: 'Search' },
      { id: 3, href: '#bookmark', iconClass: 'fas fa-bookmark fa-2x', text: 'Bookmark' },
      { id: 4, href: '#setting', iconClass: 'fas fa-cog fa-2x', text: 'Setting' },
    ];
    return (
      <nav className="nav nav--icons">
        <ul>
          {iconsData.map((icon) => (
            <li key={icon.id}>
              <a href={icon.href}>
                {/* <span>{icon.text}</span> */}
                <i className={icon.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
import React from 'react';
import { Link } from 'react-router';


class SidebarCrateItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let name = this.props.crate.name;
    let truncatedName = name.length > 25 ? `${name.substring(0,25)} ...` : name;
    let cssClass = this.props.crateRender === name ? "sidebar-crate-selected" : "sidebar-crate-item"

    return (
      <li className={cssClass}>
        <Link className="crate-text" onClick={this.props.requestCrateAlbums.bind(this, this.props.crate.id)}>
          { truncatedName }
        </Link>
        <button className="crate-button"
                onClick={this.props.requestDeleteCrate.bind(this, this.props.crate.id)}>
          x
        </button>
      </li>
    );
  }
}

export default SidebarCrateItem;

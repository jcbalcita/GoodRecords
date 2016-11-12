import React from 'react';

class CratingButtonItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleDeleteClick(e) {
    e.preventDefault();
    this.props.requestDeleteCrating(this.props.crating.id);
  }

  handleFetch(e) {
    e.preventDefault();
    this.props.requestCrateAlbums(this.props.crate.id);
  }

  render() {
    if (this.props.crate) {
      return (
        <li className="crating-buttons">
          <button id="cratingfetch" onClick={this.handleFetch}>{this.props.crate.name}</button>
          <button id="cratingdelete" onClick={this.handleDeleteClick}>x</button>
        </li>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default CratingButtonItem;

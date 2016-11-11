import React from 'react';

class CratingButtonItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleDeleteClick(e) {
    e.preventDefault();
    this.props.requestDeleteCrating({ 'crate_id': this.props.crate.id, 'album_id': this.props.albumId })
  }

  handleFetch(e) {
    e.preventDefault();
    this.props.requestCrateAlbums(this.props.crate.id);
  }

  render() {
    return (
      <li className="crating-buttons">
        <button id="cratingfetch" onClick={this.handleFetch}>{this.props.crate.name}</button>
      </li>
    );
  }
}

export default CratingButtonItem;

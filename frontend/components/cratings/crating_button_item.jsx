import React from 'react';

class CratingButtonItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick(e) {
    e.preventDefault();

    this.props.requestDeleteCrating({ 'crate_id': this.props.crate.id, 'album_id': this.props.albumId })
  }

  render() {
    return (
      <li onClick={this.handleAddClick}>
        {this.props.crate.name}
      </li>
    );
  }
}

export default CratingButtonItem;

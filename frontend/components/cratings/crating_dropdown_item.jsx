import React from 'react';

class CratingDropDownItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick(e) {
    e.preventDefault();
    this.props.requestAddCrating({ 'crate_id': this.props.crate.id, 'album_id': this.props.albumId })
  }

  render() {
    if (this.props.crate) {
      return (
        <li className="dropdown-item" onClick={this.handleAddClick}>
          {this.props.crate.name}
        </li>
      );
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default CratingDropDownItem;

import React from 'react';
import { Link } from 'react-router';


class Status extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();

    if (this.props.type === "remove" && this.props.status){
      this.props.requestRemoveStatus(this.props.id, this.props.album.id)
    } else if (this.props.type !== "remove" && this.props.status) {
      this.props.requestUpdateStatus(this.props.id, this.props.status, this.props.album.id)
    } else if (this.props.type !== "remove" && this.props.status) {
      this.props.requestNewStatus(this.props.status, this.props.album.id)
    }
  }

  render() {
    let buttonText = this.props.type !== "remove" ? `add to: ${this.props.type}` : `remove from lists`


    return (
      <button className="status-button" onClick={this.handleClick}>{buttonText}</button>
    );
  }
}

export default Status;

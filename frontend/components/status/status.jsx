import React from 'react';
import { Link } from 'react-router';


class Status extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();

    if (this.props.type === "remove" && this.props.hasStatus) {
      this.props.requestRemoveStatus(this.props.id, this.props.albumId);
    } else if (this.props.type !== "remove" && this.props.hasStatus) {
      this.props.requestUpdateStatus(this.props.id, this.props.type, this.props.albumId);
    } else if (this.props.type !== "remove" && !this.props.hasStatus) {
      this.props.requestNewStatus(this.props.type, this.props.albumId);
    }
  }

  render() {
    const buttonTexts = {
      "remove": "Remove from my shelves",
      "owned": "Add to My Collection",
      "wishlist": "Add to My Wishlist",
      "want to listen": "Want to Listen"
    }

    let buttonText = buttonTexts[this.props.type];

    const cssClass = () => {
      if (this.props.type === this.props.status) {
        return "status-button-freeze";
      } else if (this.props.type === "remove" && !this.props.hasStatus) {
        return "status-button-gray"
      } else {
        return "status-button"
      }
    }

    let functionality = cssClass().length > 13

    return (
      <button className={cssClass()}
              onClick={this.handleClick}
              disabled={functionality}>
        {buttonText}
      </button>
    );
  }
}

export default Status;

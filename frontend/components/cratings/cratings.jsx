import React from 'react';
import CratingDropDownItem from './crating_dropdown_item';
import CratingButtonItem from './crating_button_item';

class Cratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (!this.props.crates && !this.props.albumCrates) {
      return (
        <div className="cratings-container">
          Hello.
        </div>
      );
    } else if (this.props.crates && !this.props.albumCrates) {
      const dropDownItems = this.props.crates.map((crate, idx) =>
        <CratingDropDownItem key={idx} crate={crate} albumId={this.props.albumId} requestAddCrating={this.props.requestAddCrating} />
      );

      return (
        <div className="cratings-container">
          <ul className="cratings-dropdown">
            { dropDownItems }
          </ul>
          <br/>
          You haven't placed this album in any of your lists.
        </div>
      );
    } else {
      let dropDowns = [];
      let buttons = [];



      const dropDownItems = this.props.crates.map((crate, idx) =>
        <CratingDropDownItem key={idx} crate={crate} albumId={this.props.albumId} requestAddCrating={this.props.requestAddCrating} />
      );

      const buttonItems = this.props.albumCrates.map((albumCrate, idx) =>
        <CratingButtonItem key={idx} crate={ albumCrate } albumId={this.props.albumId} requestDeleteCrating={this.props.requestDeleteCrating} />
      );

      return (
        <div className="cratings-container">
          <ul className="dropdown">
            <span>Add to your lists!</span>
            <div className="dropdown-content">
              { dropDownItems }
            </div>
          </ul>
          <br/>
          { buttonItems }
        </div>
      )
    }
  }
}

export default Cratings;

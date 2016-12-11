import React from 'react';
import CratingDropDownItem from './crating_dropdown_item';
import CratingButtonItem from './crating_button_item';

class Cratings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.crates) {
      return (
        <div className="cratings-container">
        </div>
      );
    } else if (this.props.userCrates && !this.props.cratings) {
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

      let cratedIds = this.props.cratings.map(crating => crating.crate.id);
      let allCrateIds = this.props.crates.map(crate => crate.id);
      let dropDowns = [];
      let buttons = [];

      this.props.cratings.forEach(crating => {
        if (allCrateIds.includes(crating.crate.id)) {
          buttons.push(crating);
        } else {
          const index = cratedIds.indexOf(crating.crate.id);
          cratedIds.splice(index);
        }
      });

      this.props.crates.forEach(crate => {
        if (!cratedIds.includes(crate.id)) {
          dropDowns.push(crate);
        }
      });

      const dropDownItems = dropDowns.map((crate, idx) =>
        <CratingDropDownItem key={idx} crate={crate} albumId={this.props.albumId} requestAddCrating={this.props.requestAddCrating} />
      );

      const buttonItems = buttons.map((crating, idx) =>
        <CratingButtonItem
          key={idx}
          crate={crating.crate}
          crating={crating}
          albumId={this.props.albumId}
          requestDeleteCrating={this.props.requestDeleteCrating}
          requestCrateAlbums={this.props.requestCrateAlbums} />
      );

      const dropdownClass = dropDownItems.length > 0 ? "dropdown" : "dropdown-empty"

      return (
        <div className="cratings-container">
          <ul className={dropdownClass}>
            <div className="addlist">Add to your lists! ↓</div>
            <div className="dropdown-content">
              { dropDownItems }
            </div>
          </ul>
          <br/>
          <div className="button-item-container">
            <br/>{ buttonItems }
          </div>
        </div>
      );
    }
  }
}

export default Cratings;

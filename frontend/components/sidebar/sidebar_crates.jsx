import React from 'react';
import { Link, withRouter, Route, Router } from 'react-router';
import SidebarCrateItemContainer from './sidebar_crate_item_container';

class SidebarCrates extends React.Component {

  constructor(props) {
    super(props);

    this.handleAddCrate = this.handleAddCrate.bind(this);
    this.updateName = this.updateName.bind(this);

    this.state = { name: '' }
  }

  componentWillReceiveProps() {
    if (this.state.name !== '') {
      this.setState({name: ''});
    }
  }

  componentDidMount() {
    this.props.requestCrates();
  }

  updateName(e) {
    this.setState({name: e.target.value});
  }

  handleAddCrate(e) {
    e.preventDefault();

    this.props.requestAddCrate(this.state);
  }

  render() {
    if (this.props.crates) {
      let cratesArray = Object.keys(this.props.crates).map(idx => this.props.crates[idx]);
      const crateItems = cratesArray.map((crate, idx) =>
        <SidebarCrateItemContainer crate={crate} key={idx} />
      );
      return (
        <div className="sidebar-crate-container">

          Create your own lists:
          <br/><br/>
          <form className="crate-form" onSubmit={this.handleAddCrate}>
            <input className="new-crate" type="text" placeholder="Add a list!" value={this.state.name} onChange={this.updateName}></input>
            <input className="submit-crate" type="submit" value="+"></input>
          </form>
          <br/>

          <ul className="sidebar-crate-item-container">
            { crateItems }
          </ul>

        </div>
      )
    }
  }
 }

export default withRouter(SidebarCrates);

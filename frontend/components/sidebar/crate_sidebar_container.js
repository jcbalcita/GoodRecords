import { connect } from 'react-redux';

import { requestAddCrate,
         requestDeleteCrate } from '../../actions/crate_actions';

import CrateSidebar from './crate_sidebar';


const mapStateToProps = state => ({
  crates: state.crates.userCrates,
  currentShelf: state.albums.shelf
});

const mapDispatchToProps = dispatch => ({
  requestAddCrate: crate => dispatch(requestAddCrate(crate)),
  requestDeleteCrate: id => dispatch(requestDeleteCrate(id))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(CrateSidebar);

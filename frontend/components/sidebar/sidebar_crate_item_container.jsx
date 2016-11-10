import { connect } from 'react-redux';
import { requestDeleteCrate,
         requestCrateAlbums } from '../../actions/crate_actions';

import SidebarCrateItem from './sidebar_crate_item';


const mapStateToProps = (state, ownProps) => ({
  crate: ownProps.crate,
  crateRender: state.albums.crateRender
});

const mapDispatchToProps = dispatch => ({
  requestDeleteCrate: id => dispatch(requestDeleteCrate(id)),
  requestCrateAlbums: id => dispatch(requestCrateAlbums(id))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(SidebarCrateItem);

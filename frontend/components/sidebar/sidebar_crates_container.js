import { connect } from 'react-redux';
import { requestCrates,
         requestAddCrate,
         requestDeleteCrate } from '../../actions/crate_actions';
import SidebarCrates from './sidebar_crates';

const mapStateToProps = state => ({
  crates: state.crates.userCrates
});

const mapDispatchToProps = dispatch => ({
   requestCrates: () => dispatch(requestCrates()),
   requestAddCrate: name => dispatch(requestAddCrate(name)),
   requestDeleteCrate: id => dispatch(requestDeleteCrate(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCrates);

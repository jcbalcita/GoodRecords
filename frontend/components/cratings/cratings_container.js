import { connect } from 'react-redux';
import { requestAddCrating,
         requestDeleteCrating,
         requestCrateAlbums } from '../../actions/crate_actions';

import Cratings from './cratings';

const mapStateToProps = state => {
  let userCrates = [];
  let albumCrates = [];

  if (state.crates.userCrates) {
    userCrates = Object.keys(state.crates.userCrates).map(idx => state.crates.userCrates[idx]);
  }
  if (state.crates.albumCrates) {
    albumCrates = Object.keys(state.crates.albumCrates).map(idx => state.crates.albumCrates[idx]);
  }

  return {
    crates: userCrates,
    albumCrates: albumCrates,
    albumId: state.album.id
  };
};

const mapDispatchToProps = dispatch => ({
  requestAddCrating: crating => dispatch(requestAddCrating(crating)),
  requestDeleteCrating: crating => dispatch(requestDeleteCrating(crating)),
  requestCrateAlbums: id => dispatch(requestCrateAlbums(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cratings);

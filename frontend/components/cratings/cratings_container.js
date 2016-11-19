import { connect } from 'react-redux';
import { requestAddCrating,
         requestDeleteCrating,
         requestCrateAlbums,
         requestCratings,
         processDeleteCrating } from '../../actions/crate_actions';

import Cratings from './cratings';

const mapStateToProps = state => {
  let userCrates = [];
  let albumCratings = [];

  if (state.crates.userCrates) {
    userCrates = Object.keys(state.crates.userCrates).map(idx => state.crates.userCrates[idx]);
  }
  if (state.crates.albumCratings) {
    albumCratings = Object.keys(state.crates.albumCratings).map(idx => state.crates.albumCratings[idx]);
  }

   return {
     crates: userCrates,
     cratings: albumCratings,
     albumId: state.album.id,
   };
};

const mapDispatchToProps = dispatch => ({
  requestAddCrating: crating => dispatch(requestAddCrating(crating)),
  requestDeleteCrating: id => dispatch(requestDeleteCrating(id)),
  requestCrateAlbums: id => dispatch(requestCrateAlbums(id)),
  requestCratings: albumId => dispatch(requestCratings(albumId)),
  processDeleteCrating: id => dispatch(processDeleteCrating(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cratings);

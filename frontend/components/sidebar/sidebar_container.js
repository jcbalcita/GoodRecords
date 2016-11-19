import { connect } from 'react-redux';
import { requestAllAlbums,
         requestUserAlbums } from '../../actions/album_actions';
import { requestCrates,
         receiveCrates } from '../../actions/crate_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  section: state.albums.specificRender
});

const mapDispatchToProps = dispatch => {
  return ({
      requestAllAlbums: () => dispatch(requestAllAlbums()),
      requestUserAlbums: status => dispatch(requestUserAlbums(status)),
      requestCrates: () => dispatch(requestCrates()),
      receiveCrates: crates => dispatch(receiveCrates(crates))
    });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

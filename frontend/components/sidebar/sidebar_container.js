import { connect } from 'react-redux';
import { requestAllAlbums,
         requestUserAlbums } from '../../actions/album_actions';
import Sidebar from './sidebar';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
   requestAllAlbums: () => dispatch(requestAllAlbums()),
   requestUserAlbums: status => dispatch(requestUserAlbums(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

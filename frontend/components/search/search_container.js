import { connect } from 'react-redux';
import { requestSearchResults } from '../../actions/album_actions';
import Search from './search';

const mapStateToProps = state => ({
  albums: state.albums
});

const mapDispatchToProps = dispatch => ({
  requestSearchResults: searchTerm => dispatch(requestSearchResults(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

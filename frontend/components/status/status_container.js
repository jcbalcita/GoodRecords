import { connect } from 'react-redux';
import Status from './status';
import { requestNewStatus,
         requestUpdateStatus,
         requestRemoveStatus } from '../../actions/album_actions';

const mapStateToProps = ({ album }, ownProps) => ({
    albumId: album.id,
    id: album.status_id,
    type: ownProps.type,
    status: album.status,
    hasStatus: Boolean(album.status)
});

const mapDispatchToProps = dispatch => ({
  requestNewStatus: (status, albumId) => dispatch(requestNewStatus(status, albumId)),
  requestUpdateStatus: (id, status, albumId) => dispatch(requestUpdateStatus(id, status, albumId)),
  requestRemoveStatus: (id, albumId) => dispatch(requestRemoveStatus(id, albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Status);

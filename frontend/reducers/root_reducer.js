import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import AlbumsReducer from './albums_reducer';
import AlbumDetailReducer from './album_detail_reducer';
import ReviewsReducer from './reviews_reducer';
import CratesReducer from './crates_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  albums: AlbumsReducer,
  album: AlbumDetailReducer,
  reviews: ReviewsReducer,
  crates: CratesReducer
});

export default RootReducer;

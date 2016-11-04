import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import AlbumsMiddleware from './albums_middleware';
import createLogger from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  AlbumsMiddleware,
  logger
);

export default RootMiddleware;

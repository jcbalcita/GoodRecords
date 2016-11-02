import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import createLogger from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  logger
);

export default RootMiddleware;

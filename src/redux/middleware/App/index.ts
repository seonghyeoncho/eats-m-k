import { StoreMiddleware } from './StoreMiddleware';
import { LocationMiddleware } from './LocationMiddleware';

export const appMiddleware = [StoreMiddleware, LocationMiddleware];
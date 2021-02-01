import { StoreMiddleware } from './StoreMiddleware';
import { LocationMiddleware } from './LocationMiddleware';
import { DataMiddleware } from './DataMiddleware';
import { OrderMiddleware } from './OrderMiddleware';

export const appMiddleware = [StoreMiddleware, LocationMiddleware, DataMiddleware, OrderMiddleware];
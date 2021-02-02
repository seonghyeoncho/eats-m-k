import { StoreMiddleware } from './StoreMiddleware';
import { LocationMiddleware } from './LocationMiddleware';
import { DataMiddleware } from './DataMiddleware';
import { OrderMiddleware } from './OrderMiddleware';
import { SelectMiddleware } from './SelectMiddleware';

export const appMiddleware = [StoreMiddleware, LocationMiddleware, DataMiddleware, OrderMiddleware, SelectMiddleware];
import { StoreMiddleware } from './StoreMiddleware';
import { LocationMiddleware } from './LocationMiddleware';
import { DataMiddleware } from './DataMiddleware';
import { OrderMiddleware } from './OrderMiddleware';
import { SelectMiddleware } from './SelectMiddleware';
import { OptionMiddleware } from './OptionMiddleware';
import { EventMiddleware } from './EventMiddleware';
import { GlobalLoadingMiddleware } from './GlobalLoadingMiddleware';

export const appMiddleware = [ 
    StoreMiddleware, 
    LocationMiddleware, 
    DataMiddleware, 
    OrderMiddleware, 
    SelectMiddleware, 
    OptionMiddleware, 
    EventMiddleware, 
    GlobalLoadingMiddleware,
];
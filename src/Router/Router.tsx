import React, { useEffect } from 'react';
import { BrowserRouter as Router, BrowserRouterProps, Route, Switch} from 'react-router-dom'
import OrderListView from '../pages/OrderListView/OrderListView';
import CompleteView from '../pages/CompleteView/CompleteView';
import ReceiptView from '../pages/ReceiptPage/ReceiptView';
import Home from '../pages/HomePage/Home';
import DetailView from '../pages/DetailMenuPage/DetailView';
import BucketViewContainer from '../pages/BucketPage/BucketViewContainer';
import OrderListD from '../pages/OrderListView/OrderListD';
import queryString from 'query-string';
import { LocationAction, StoreAction } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { cleanup } from '@testing-library/react';

const AppRouter = () =>{
    
    return(
        <Router>
            <Switch>

                <Route exact path="/menu" 
                    component={(props:BrowserRouterProps) => <Home {...props}/>}
                />

                {/* <Route exact path="/orderlist" 
                    component={(props:BrowserRouterProps)=><OrderListView {...props}/>}
                />

                <Route exact path="/orderlistd" 
                    component={(props:BrowserRouterProps)=><OrderListD {...props}/>}
                />

                <Route exact path="/bucket"
                    component={(props:BrowserRouterProps)=><BucketViewContainer {...props}/>}
                />

                <Route exact path="/orderstatus"
                    component={(props:BrowserRouterProps)=><ReceiptView {...props}/>}
                />

                <Route exact path="/detail" 
                    component={(props:BrowserRouterProps)=><DetailView {...props}/>}
                />

                <Route exact path="/complete"
                    component={(props:BrowserRouterProps)=><CompleteView {...props}/>}
                />  */}

            </Switch>
        </Router>
    );

}

export default AppRouter;
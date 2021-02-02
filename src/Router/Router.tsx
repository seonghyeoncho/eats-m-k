import React from 'react';
import { BrowserRouter as Router, BrowserRouterProps, Route, Switch} from 'react-router-dom'
import OrderListView from '../pages/OrderListView/OrderListView';
import CompleteView from '../pages/CompleteView/CompleteView';
import ReceiptView from '../pages/ReceiptPage/ReceiptView';
import Home from '../pages/HomePage/Home';
import BucketViewContainer from '../pages/BucketPage/BucketPageContainer';
import OrderListD from '../pages/OrderListView/OrderListD';
import DetailPageContainer from '../pages/DetailPage/DetailPageContainer';

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" 
                    component={(props:BrowserRouterProps) => <Home {...props}/>}
                />
                <Route exact path="/orderlist" 
                    component={(props:BrowserRouterProps)=><OrderListView {...props}/>}
                />
                <Route exact path="/orderlistd" 
                    component={(props:BrowserRouterProps)=><OrderListD {...props}/>}
                />
                <Route exact path="/bucket"
                    component={(props:BrowserRouterProps)=><BucketViewContainer {...props}/>}
                />
                <Route exact path="/receipt"
                    component={(props:BrowserRouterProps)=><ReceiptView {...props}/>}
                />
                <Route exact path="/detail" 
                    component={(props:BrowserRouterProps)=><DetailPageContainer {...props}/>}
                />
                <Route exact path="/complete"
                    component={(props:BrowserRouterProps)=><CompleteView {...props}/>}
                /> 
            </Switch>
        </Router>
    );
};

export default AppRouter;
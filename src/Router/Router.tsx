import React from 'react';
import { BrowserRouter as Router, BrowserRouterProps, Route, Switch} from 'react-router-dom'
import OrderListView from '../pages/ComfirmPage/ComfirmPage';
import CompletePage from '../pages/CompletePage/CompletePage';
import ReceiptPageContainer from '../pages/ReceiptPage/ReceiptPageContainer';
import Home from '../pages/HomePage/Home';
import BucketPageContainer from '../pages/BucketPage/BucketPageContainer';
import OrderListD from '../pages/ComfirmPage/OrderListD';
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
                    component={(props:BrowserRouterProps)=><BucketPageContainer {...props}/>}
                />
                <Route exact path="/receipt"
                    component={(props:BrowserRouterProps)=><ReceiptPageContainer {...props}/>}
                />
                <Route exact path="/detail" 
                    component={(props:BrowserRouterProps)=><DetailPageContainer {...props}/>}
                />
                <Route exact path="/complete"
                    component={(props:BrowserRouterProps)=><CompletePage {...props}/>}
                /> 
            </Switch>
        </Router>
    );
};

export default AppRouter;
import React from 'react';
import { BrowserRouter as Router, BrowserRouterProps, Route, Switch} from 'react-router-dom'
import OrderListView from '../components/organisms/OrderList/OrderListView';
import CompleteView from '../components/organisms/Complete/CompleteView';
import BucketViewContainer from '../components/organisms/Bucket/BucketViewContainer';
import OrderStatus from '../components/atoms/OrderStatus/OrderStatus';
import OrderListD from '../components/organisms/OrderList/OrderListD';
import Home from '../pages/HomePage/Home';
import DetailView from '../pages/DetailMenuPage/DetailView';

const AppRouter = () =>{
    
    return(
        <Router>
            <Switch>

                <Route exact path="/menu" 
                    component={(props:BrowserRouterProps)=><Home {...props}/>}
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

                <Route exact path="/orderstatus"
                    component={(props:BrowserRouterProps)=><OrderStatus {...props}/>}
                />

                <Route exact path="/detail" 
                    component={(props:BrowserRouterProps)=><DetailView {...props}/>}
                />

                <Route exact path="/complete"
                    component={(props:BrowserRouterProps)=><CompleteView {...props}/>}
                /> 

            </Switch>
        </Router>
    );

}

export default AppRouter;
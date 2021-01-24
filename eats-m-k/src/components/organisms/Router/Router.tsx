import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../Home/Home';
import DetailView from '../MenuDetail/DetailView';
import OrderListView from '../OrderList/OrderListView';
import CompleteView from '../Complete/CompleteView';
import BucketViewContainer from '../Bucket/BucketViewContainer';
import OrderStatus from '../../atoms/OrderStatus/OrderStatus';
import OrderListD from '../OrderList/OrderListD';


const AppRouter = () =>{
    
    return(

        <Router>

                <Switch>

                    <Route exact path="/menu" 

                        component={(props:any)=><Home {...props}/>}

                    />

                    <Route exact path="/orderlist" 

                        component={(props:any)=><OrderListView {...props}/>}

                    />

                    <Route exact path="/orderlistd" 

                        component={(props:any)=><OrderListD {...props}/>}

                    />
                    <Route exact path="/bucket"
                        component={(props:any)=><BucketViewContainer {...props}/>}
                    />
                    <Route exact path="/orderstatus"
                        component={(props:any)=><OrderStatus {...props}/>}
                    />

                    <Route exact path="/detail" 

                        component={(props:any)=><DetailView {...props}/>}

                    />

                    <Route exact path="/complete"
                        component={(props:any)=><CompleteView {...props}/>}
                    /> 

                </Switch>
            
        </Router>
   
    );

}

export default AppRouter;
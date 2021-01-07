import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../Home/Home';
import DetailView from '../../DetailView';

import OrderListView from '../../OrderListView';
import CompleteView from '../../../containers/CompleteView';
import BucketViewContainer from '../../../containers/BucketViewContainer';


//파이어 베이스에서 데이터를 받아오는 형태라서 계속 리슨함. api로 한번만 받아오기를 해야할 듯.

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
                    <Route exact path="/bucket"
                        component={()=><BucketViewContainer/>}
                    />

                    <Route exact path="/detail" 

                        component={(props:any)=><DetailView {...props}/>}

                    />
                    <Route exact path="/complete"
                        component={()=><CompleteView />}
                    />
                

                </Switch>
            
        </Router>
   
    );

}

export default AppRouter;
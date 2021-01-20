import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../Home/Home';
import DetailView from '../MenuDetail/DetailView';

import OrderListView from '../OrderList/OrderListView';
import CompleteView from '../Complete/CompleteView';
import BucketViewContainer from '../Bucket/BucketViewContainer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import { getMenuThunk } from '../../../modules/getMenus/thunks';
import { useCookies } from 'react-cookie';
import OrderStatus from '../OrderStatus';
import BucketPreview from '../MenuDetail/BukcetPreview';
import OrderListD from '../OrderList/OrderListD';



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

                    <Route exact path="/orderlistd" 

                        component={(props:any)=><OrderListD {...props}/>}

                    />
                    <Route exact path="/bucket"
                        component={(props:any)=><BucketViewContainer {...props}/>}
                    />
                    <Route exact path="/orderstatus"
                        component={()=><OrderStatus/>}
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
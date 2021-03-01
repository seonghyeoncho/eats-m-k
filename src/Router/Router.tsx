import React from 'react';
import { BrowserRouter as Router, BrowserRouterProps, Route, Switch} from 'react-router-dom'
import ComfirmPageContainer from '../pages/ComfirmPage/ComfirmPageContainer';
import CompletePage from '../pages/CompletePage/CompletePage';
import ReceiptPageContainer from '../pages/ReceiptPage/ReceiptPageContainer';
import BucketPageContainer from '../pages/BucketPage/BucketPageContainer';
import DetailPageContainer from '../pages/DetailPage/DetailPageContainer';
import HomeContainer from '../pages/HomePage/HomeContainer';

const AppRouter = () => {
    
    
    return(
        <>
            
            <Router>
                <Switch>
                    <Route exact path="/" 
                        component={(props:BrowserRouterProps) => <HomeContainer {...props}/>}
                    />
                    <Route exact path="/comfirm/" 
                        component={(props:BrowserRouterProps)=><ComfirmPageContainer {...props}/>}
                    />
                    <Route exact path="/bucket/"
                        component={(props:BrowserRouterProps)=><BucketPageContainer {...props}/>}
                    />
                    <Route exact path="/receipt/"
                        component={(props:BrowserRouterProps)=><ReceiptPageContainer {...props}/>}
                    />
                    <Route exact path="/detail/" 
                        component={(props:BrowserRouterProps)=><DetailPageContainer {...props}/>}
                    />
                    <Route exact path="/complete/"
                        component={(props:BrowserRouterProps)=><CompletePage {...props}/>}
                    /> 
                </Switch>
            </Router>
        </>
    );
};

export default AppRouter;
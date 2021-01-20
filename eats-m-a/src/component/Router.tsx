import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Auth from './Auth';
import Settings from './Settings';

const AppRouter = () => {
    const [logined, setLogined] = useState<boolean>(false);
    

    return(

        <Router>
            {
                logined ? 
                    <>

                        <Route exact path='/'
                            component={()=><App/>}
                        />
                        <Route exact path="/setting"
                            component={()=><Settings/>}
                        />
                    </>
                :

                    <Route exact path="/"
                        component={(props:any)=><Auth setLogined={setLogined} history={props.history}/>}
                    />

            }

        </Router>

    );
}
export default AppRouter;
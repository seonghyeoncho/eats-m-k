import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Menu from './Menu';

//component={()=><Test test={test} {...props}/>} 이런 방식으로 하면 다 넘겨줄 수 있지 않을까?
//뒤로 돌아가기위해서 다시 Link를 쓸 수 있다
//또 모르겠다면 React Router props를 검색해보면 답이 나온다




const AppRouter = () =>{

   
    const [myTable, setMyTable] = useState<number>();

    return(

        <Router>
            <Switch>
                <Route exact path="/menu" component={Menu}/>
            </Switch>

        </Router>
   
    );

}

export default AppRouter;
import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App';





const AppRouter = () =>{

   
    const [myTable, setMyTable] = useState<number>();
    const list:number[] = [];

    const List = () => {
        for(let i = 1; i<=6; i++) list.push(i);
    }

    const setMyTableNumber = (t:number) => {

        setMyTable(t);

    }

    List();
    

    return(
        
       <Router>
           <Switch>
               {
                   myTable ? 

                        <Route exact path="/">
                            <App myTable={myTable}/>
                        </Route>

                    :
                        
                        <Route exact path ="/">
                            <div>
                                
                                <div>가게 이름 : 멘동</div>

                                <div>현재 계신 테이블을 선택해주세요</div>
                                
                                <div>

                                    {list.map((t:any)=>
                                        <button key={t} onClick={()=>setMyTableNumber(t)}>
                                            {t}
                                        </button>
                                    )}

                                </div>
                                
                            </div>

                        </Route>
                    
               }
           </Switch>
       </Router>
   
    );

}

export default AppRouter;
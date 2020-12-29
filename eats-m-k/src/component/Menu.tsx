import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import '../scss/App.scss';
import SpecificMenu from './SpecificMenu';
import queryString from 'query-string';




const Menu = (props:any) => {

  const query = queryString.parse(props.location.search);
  console.dir(props.history)

  const [store,setStore] = useState<any>(query.store);
  const [menu, setMenu] = useState<any>([]);
  const [test,setTest] = useState<any>([]);
  const [select,setSelect] = useState<string>();
  const [totalPrice,setTotalPrice] = useState<number>(0);
  const [myTable, setMyTable] = useState<any>(query.table);

  
 
  
  const getMenus = async() => {

    const menus = dbService.collection('store').doc(`${store}`);

    await menus.get().then((doc) => {
        const data = doc.data();

        for(let i in data){

          const menuObj:{menu:string, price:number, n:number}={

            menu : i,
            price : data[i].price,
            n:0

          }

          setMenu((prev:any)=>[menuObj,...prev]);

        }

    }); 

  } 
  

  useEffect(() => {

    getMenus();

  },[]);
  

  return(

    <Router>

        <Route exact path="/menu">
            <Home menu={menu} store={store} myTable={myTable} test={test} setTest={setTest}  setSelect={setSelect} currentPrice={totalPrice} setTotalPrice={setTotalPrice}/>
        </Route>

        <Route exact path="/detail" component={()=><SpecificMenu menu={menu} select={select} setTest={setTest} currentPrice={totalPrice} setTotalPrice={setTotalPrice} store={store} table={myTable}/>} />
            
    </Router>

  );

}

export default Menu;

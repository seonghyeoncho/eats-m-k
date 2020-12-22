import React, { useEffect, useState } from 'react';
import Menus from './Menus';
import Orders from '../component/Orders';

import '../scss/App.scss';


import { dbService } from '../firebase';



const App = ({myTable}:any) => {

  const [store,setStore] = useState<string>("멘동");
  const [tableNumber, setTableNumber] = useState<number>(myTable);
  const [totalPrice,setTotalPrice] = useState<number>(0);
  const [menu, setMenu] = useState<any>([]);
  const [test,setTest] = useState<any>([]);
  
  
  const getMenus = async() => {

    const menus = dbService.collection('store').doc(`${store}`);

    await menus.get()
      .then((doc) => {
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

  const onSubmit = (event : any) => {

    event.preventDefault();
    
    dbService.collection(`${store}`).doc(`${tableNumber}`)
      .set({
        test,
        orderAt: Date.now()

      },{merge:true})
      .then(function() {
        console.log("Document successfully written!");
        setTest([]);
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });

      setTotalPrice(0);

  }
  
  const cancleOrder = (m:string, n:number) => {

    menu.map((doc:any)=>{
      console.log(doc.menu,m);
      if(doc.menu === m){
        const sumPrice = totalPrice-(n)*(doc.price);
        setTotalPrice(sumPrice);
        doc.n = 0;
        
      }
    });

    setTest(test.filter((test:any) => test.menu !== m));
    
  }

  const numberWithCommas = ( x:number ) => {

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  }


  useEffect(() => {

    getMenus();

  },[]);
  
  console.log(menu);
  console.log(test);

  return(
    <div className="App">

      <div>
        <div className="contianer-info">
          <div>가게 이름 : {store}</div>
          <div>No.{tableNumber}</div>
        </div>
      </div>
      
      <div className="container-menu">

        <div>
          <div>메뉴</div>

          <div>
            <Menus
              menu={menu}
              setTotalPrice={setTotalPrice}
              setTest={setTest}
              currentPrice={totalPrice}
            />
          </div>
        </div>

        <div>
          <div>
            <h1>주문 내역</h1>
            <Orders 
              test={test}
              cancleOrder={cancleOrder}
            />
          </div>
        </div>
        
        <div className="container-order">

          <button className="order-bt" onClick={onSubmit}>
            {numberWithCommas(totalPrice)}원 주문하기
          </button>

        </div>
        
      </div>
        
    </div>

    
  );
}

export default App;


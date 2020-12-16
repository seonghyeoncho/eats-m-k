import React, { useEffect, useState } from 'react';
import '../scss/App.scss';
import { dbService } from '../firebase';

/*
qr로만 접근 가능한 웹. 들어와서 어떤 가게인지 몇번 테이블인지 받아올 수 있도록 해야함

다 받아오고 나서 메뉴를 표시  굳이 라우터가 필요없을것 같기도 하고



*/
const App = () => {

  const [store,setStore] = useState<String>("멘동");
  const [tableNumber, setTableNumber] = useState<number>(3);
  const [totalPrice,setTotalPrice] = useState<number>(0);
  const [menu, setMenu] = useState<any>([]);
  const [orderMenu,setOrderMenu] = useState<any>([]);
  
  const getMenus = async() => {

    const menus = await dbService.collection("멘동").get();
    
    
    menus.forEach((document : any) => {

      const menuObj = {

        ...document.data(),
        id: document.id,      

      }

      setMenu((prev:any):any => [menuObj, ...prev]);

    });
    
    
   

  }

  const onSubmit = (event : any) => {

    event.preventDefault();


  }
  const onAddOrder = (price : number, menu : any) => {
  
    console.log(menu);
    
  
      
    const sumPrice = (totalPrice) + (price);
    setTotalPrice(sumPrice);
       
  }
  const onMinusPrice = (price : number) => {
    const sumPrice = (totalPrice) - (price);
    setTotalPrice(sumPrice);
  }

  function numberWithCommas(x:number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  useEffect(() => {
    getMenus();

  },[]);

  
  
  return(
    <div className="App">
      <div>
        <div className="contianer-info">
          <div>가게 이름 : {store}</div>
          <div>No.{tableNumber}</div>
        </div>
      </div>
      
      

      <div className="container-menu">
        <div>메뉴</div>
        
        {menu.map((menu:any) => 
        
          <div key={menu.id}>
          
            <h1>이름 : {menu.id}<p/>가격 : {numberWithCommas(menu.price)}원</h1>
            <button onClick={() => {onAddOrder(menu.price, menu)}} >주문표에 추가</button>
            <button onClick={() => {onMinusPrice(menu.price)}}>삭제하기</button>

          </div>
          
        
        )}
        {/* 주문내역은 각 메뉴 개수 금액 등등 추가해야함 */}
        <h1>주문 내역</h1>
        {menu.map((menu:any) => 
          <div key={menu.id}>
            <div>{menu.id}x{menu.order}</div>
            

          </div>
        )}
        
        <h1>총 주문금액  : {numberWithCommas(totalPrice)}원</h1>
        <div className="container-oder">

          <button className="oder-bt" onClick={onSubmit}>주문하기</button>

        </div>
        
      </div>
        
    </div>

    
  );
}

export default App;

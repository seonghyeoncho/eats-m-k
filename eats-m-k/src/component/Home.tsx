import React, { useState } from 'react';
import Menus from './Menus';
import Orders from './Orders';
import { dbService } from '../firebase';
import queryString from 'query-string';




const Home = (props:any) => {
    
    
    const test = props.test;
    
    const cancleOrder = (m:string, n:number) => {

        props.menu.map((doc:any)=>{
          console.log(doc.menu,m);
          if(doc.menu === m){
            const sumPrice = props.currentPrice-(n)*(doc.price);
            props.setTotalPrice(sumPrice);
            doc.n = 0;
            
          }
        });
    
        props.setTest(props.test.filter((test:any) => test.menu !== m));
        
    }
    
    const numberWithCommas = ( x:number ) => {
    
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    }

    const onSubmit = (event : any) => {

        event.preventDefault();
        
        dbService.collection(`${props.store}`).doc(`${props.myTable}`)
          .set({
            test,
            orderAt: Date.now(),
            check:false
    
          })
          .then(function() {
            console.log("Document successfully written!");
            props.setTest([]);
          })
          .catch(function(error) {
              console.error("Error writing document: ", error);
          });
    
          props.setTotalPrice(0);
    
    }


    return(
        <div className="Home">

            <div>
                <div className="contianer-info">
                    <div>가게 이름 : {props.store}</div>
                    <div>No.{props.myTable}</div>
                </div>
            </div>
                    
            <div className="container-menu">

                <div>
                    <div>메뉴</div>
                    <hr/>

                    <div>
                        <Menus
                            menu={props.menu}
                            setTotalPrice={props.setTotalPrice}
                            setTest={props.setTest}
                            currentPrice={props.currentPrice}
                            setSelect={props.setSelect}
                        />
                    </div>
                </div>

                    <div>
                        <div>
                            <h1>주문 내역</h1>
                            <hr/>
                            <Orders 
                                test={props.test}
                                cancleOrder={cancleOrder}
                            />
                        </div>
                    </div>
                        
                    <div className="container-order">

                        {   
                            props.currentPrice !== 0 ?
                            
                            <button className="order-bt" onClick={onSubmit}>
                                {numberWithCommas(props.currentPrice)}원 주문하기
                            </button>
                            :
                            <></>
                        }

                    </div>
                        
            </div>
                    
        </div>
    );

}


export default Home;
import react from 'react';
interface Props {
    orderState:boolean
    status:boolean
}
const OrderStatusButton = ({orderState,status}:Props) => {


    let text:string = '';
    if(status && orderState){
        text = '접수완료';

    } else if(!status && orderState){

        text = '주문완료';

    } else {
        text = '주문중';
    }

    return<button>{text}</button>
}
export default OrderStatusButton;
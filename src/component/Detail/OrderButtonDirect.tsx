import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux';
import { addBucketMenu } from '../../redux/actions/DataAction';
import { Option } from '../../redux/Types'

interface Props {
    select: {
        menu:string,
        price:number,
        optoins: Option[],
        count:number,
        itemTotalPrice: number
    };
}

const OrderButtonDirect = ({select}:Props) => {

    const { bucket, orderStatus } = useSelector((state:RootState) => ({
        bucket:state.Data.data.bucket,
        orderStatus:state.Data.data.orderStatus
    }));
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(addBucketMenu(bucket, select));
    };
    return(
        <div>
            <div onClick={onClick}>
                {/* <Link to={`/orderlistd/?store=${store}&table=${table}`}>
                    <div className={`bt ${orderStatus?'add':''}`}>{orderStatus? '추가 주문하기':'주문하기'}</div>
                </Link> */}
            </div>
        </div>
    );
}

export default OrderButtonDirect;
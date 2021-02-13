import React from 'react';
import { Option } from '../../../redux/Types';
import OptionsItem from './OptionsItem';

interface Props {
    options: Option[];
};

const Options = ({ options }:Props) => {
    return (
        <div className="options">
            {

                options.map((op:any):JSX.Element | undefined => {
                    var count = 0;
                    count = op.options.filter((state:any) => state.state === true).length;
                    if(count !== 0){
                        return (
                            <div  className="item" key={op.name}>
                                <div className="item-ca">
                                    {`${op.name}`}  
                                </div>
                                <OptionsItem options={op.options}/>
                            </div>
                        )
                    }
                    return <></>;
                })
            }
        </div>
    );
}

export default Options;
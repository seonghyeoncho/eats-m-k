import React from 'react';
import loadingGIf from '../../image/gifs/graphic_loading.gif'
import './GlobalLoading.scss';

const GlobalLoading = () => {
    return (
        <div className="loading-con">
            <div className='loading-img'>
                <img src={loadingGIf} alt='loading-img'/>
            </div>
        </div>
    );
};

export default GlobalLoading;
'use strict';

import React from 'react';

const Banner = React.createClass({

    shouldComponentUpdate(nextProps, nextState) {
        //return this.props.value !== nextProps.value;
        return true;
    },
    render(){
        return (
            <div className="swiper-banner">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <a  target="_blank">
                            <img  src="/images/152216690.png"/>
                        </a>
                    </div>
                </div>
                <div className="swiper-pagination swiper-page"></div>
            </div>
        )
    }
});

export  default  Banner;
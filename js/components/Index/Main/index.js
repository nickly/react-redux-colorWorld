'use strict';

import React     from 'react';
import lodash_ from 'lodash';

const  Main = React.createClass({
    propTypes:{
        mainNav: React.PropTypes.array.isRequired,
    },
    shouldComponentUpdate(nextProps, nextState) {
        return (!lodash_.eq(this.props.mainNavData,nextProps.mainNavData));
     },
     render(){
        const  mainNavItem = this.props.mainNav.map((item,index)=>{
              return (
                  <div key={index}>
                      <div className="csj_navTitle">
                          <span className={item.title=='数字彩'?'csj_navTitleIcon  csj_navTitleIcon_num':'csj_navTitleIcon'}>{item.title}<i>{item.description}</i></span>
                      </div>
                      <div className="csj_iconList">
                          <ul>
                              {
                                  item.child.map((childItem,childIndex)=>{
                                        return(
                                            <li  className="lis" key={childIndex}>
                                                <a href={childItem.link}>
                                                    <span className="image"><img  src={childItem.img} /></span>
                                                    <span className="font">{childItem.title}</span>
                                                    <span className="close"><i>{childItem.description}</i></span>
                                                </a>
                                            </li>
                                        )
                                  })
                              }
                          </ul>
                      </div>
                  </div>
              )
         })

         return(
            <div>{mainNavItem}</div>
         )
     }

})

export  default  Main;
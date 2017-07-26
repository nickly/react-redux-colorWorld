'use strict';

import  React         from 'react';
import  ReactDOM,{ render }   from 'react-dom';

const Loading = React.createClass({

    render(){

        let loadingIsShow = true;
        let isLoadingObject = {};

        for(let key in this.props){
            if(typeof  this.props[key] === 'string') {
                if (this.props[key] == '') {
                    isLoadingObject[key] = false;
                }else{
                    isLoadingObject[key] = true;
                }
            }else if(typeof  this.props[key] === 'boolean'){
                if(this.props[key] == false){
                    isLoadingObject[key] = false;
                 }else{
                    isLoadingObject[key] = true;
                }
            }else if(typeof  this.props[key] === 'number') {
                if (this.props[key] == 0) {
                    isLoadingObject[key] = false;
                }else{
                    isLoadingObject[key] = true;
                }
            }else if(typeof  this.props[key] === 'object'){

                if(this.props[key].length != 'undefined'){
                    if(this.props[key].length == 0){
                        isLoadingObject[key] = false;
                    }else{
                        isLoadingObject[key] = true;
                    }
                }else{
                    if(!this.props[key]){
                        isLoadingObject[key] = false;
                    }else{
                        isLoadingObject[key] = true;
                    }
                }
            }
        }

        for (let key  in isLoadingObject){
            if(isLoadingObject[key]==false){
                loadingIsShow = false
            }
        }


        return(
           <div className={loadingIsShow ? 'loader-section  loader-hide':'loader-section  loader-show'}>
            <div className="loader-container">
                <div className="loader-inner ball-triangle-path">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="loader-font">正在加载中...</div>
            </div>
           </div>
        )
    }
});

export default Loading;


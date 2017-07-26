'use strict';

import  React                            from 'react';
import  ReactDOM,{ render }   from 'react-dom';

//高阶组件;
const  HighOrderComponent = (propsFunc) =>{
    return (Component)=>{
        return  class  extends React.Component {
            render (){
                return <Component {...propsFunc(this.props)}/>
            }
        }
    }
}

export default  HighOrderComponent;

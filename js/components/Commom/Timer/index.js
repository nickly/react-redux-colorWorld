'use strict';

import  React                            from 'react';
import  ReactDOM,{ render }   from 'react-dom';
import  lodash_                         from 'lodash';
import  String                            from '../../../extensions/String'

const  Timer  = React.createClass({
    propTypes:{
        //属性;
        awardTimes: React.PropTypes.object.isRequired,
        //方法;
        getNextAwardTime: React.PropTypes.func.isRequired,
        getAwardData: React.PropTypes.func.isRequired,
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return (!lodash_.eq(this.props.awardTimes, nextProps.awardTimes));
    },
    render(){


        if(this.props.awardTimes.next !== undefined){

            let  clock = this.props.awardTimes.next.awardTimeInterval/1000;

            let  clearInterval = window.setInterval(()=>{

                   if(this.props.awardTimes.current.periodNumber == parseInt(ReactDOM.findDOMNode(this.refs.nextAward).innerHTML)){
                         this.props.getAwardData();
                   }

                    if (clock <= 0) {

                         ReactDOM.findDOMNode(this.refs.time).innerHTML = '正在开奖';
                         window.clearInterval(clearInterval);
                         this.props.getNextAwardTime();

                    } else {

                        clock--;
                        ReactDOM.findDOMNode(this.refs.nextAward).innerHTML = this.props.awardTimes.next.periodNumber;
                        ReactDOM.findDOMNode(this.refs.time).innerHTML = ("" + clock).SecondsTommss();
                    }

            },1000)
          }

       return <span  className="lp_result" ><i ref="time">00:00</i><i ref="nextAward" style={{display:'none'}}></i></span>
     }
});

export  default  Timer;

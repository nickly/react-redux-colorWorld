'use strict';

import  React                            from 'react';
import  ReactDOM,{ render }   from 'react-dom';
import  lodash_                         from 'lodash';

import  Data                              from '../../../extensions/Date';

//日历组件;
import  DatePicker                    from 'react-mobile-datepicker';
import  Timer                             from '../../Commom/Timer';


const  Toolbar  = React.createClass({

    propTypes:{
        //Toolbar属性;
        startDate: React.PropTypes.string.isRequired,
        isOpen:React.PropTypes.bool.isRequired,

        //Toolbar方法;
        onSelect: React.PropTypes.func.isRequired,
        onCancel: React.PropTypes.func.isRequired,
        openSelect: React.PropTypes.func.isRequired,
        loadHistoryData: React.PropTypes.func.isRequired,

        //传给Timer属性集;
        awardTimes: React.PropTypes.object.isRequired,
        getNextAwardTime: React.PropTypes.func.isRequired,
        getAwardData: React.PropTypes.func.isRequired,
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return (this.props.startDate !== nextProps.startDate  || this.props.isOpen !== nextProps.isOpen || !lodash_.eq(this.props.awardTimes,nextProps.awardTimes));
    },
    onSelectHandle(time,nextProps){
        this.props.onSelect(time.format('MM/dd'));
        this.props.loadHistoryData(time.format('YYYY-MM-dd'));
        this.props.onCancel();
    },
    onCancelHandle(){
        this.props.onCancel();
    },
    openSelectHandle(){
        this.props.openSelect();
    },
     render(){

         let  nextIssueNo;

         const  datePickerProps = {
             data: this.props.startDate,    //接收从最顶级组件转过来的属性;
             isOpen: this.props.isOpen,
             theme: 'android',
             onSelect: this.onSelectHandle,
             onCancel:this.onCancelHandle,
             dateFormat:['YYYY','MM','DD']
         }

         const  timerProps = {
             awardTimes: this.props.awardTimes,
             getNextAwardTime: this.props.getNextAwardTime,
             getAwardData: this.props.getAwardData
         }

         if(this.props.awardTimes.next ==undefined){
             nextIssueNo = 0;
         }else{
             nextIssueNo = this.props.awardTimes.next.periodNumber;
         }

         return(
                 <div className={nextIssueNo == 0 ? 'csj_lotteryPeriod  csj_hide' : 'csj_lotteryPeriod'}>
                     <div>
                         <span className="lp_time" id="react-box" onClick={this.openSelectHandle}>{this.props.startDate}</span>
                         <DatePicker  {...datePickerProps}  />
                         <span  className="lp__text">距{nextIssueNo}期开奖：</span>
                         <Timer  {...timerProps} />
                     </div>
                     <a target="_blank" href="{this.props.VideoUrl}" className="lp_direct"><i className="dir_sp">开奖直播</i></a>
                 </div>
             )
     }
});

export  default  Toolbar;


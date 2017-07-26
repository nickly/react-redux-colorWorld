'use strict';

import  React                            from 'react';
import  ReactDOM,{ render }   from 'react-dom';

import  lodash_                         from 'lodash';

const  ResultTable  = React.createClass({

    propTypes:{
        //属性;
        optionData: React.PropTypes.object.isRequired,
        historyData: React.PropTypes.array.isRequired,
        //方法;
    },
    shouldComponentUpdate(nextProps, nextState) {
        return (!lodash_.eq(this.props.optionData,nextProps.optionData) || !lodash_.eq(this.props.historyData,nextProps.historyData));
    },
    render(){

        //console.log(this.props.historyData)

        const  openCodeList = (item,isAllFalse)=>{

             if(isAllFalse){
                 return  item.map((awardItem,awardIndex)=>{
                     return (
                         <span key={awardIndex}>
                                  <i className={awardItem!=10   ? 'num0'+awardItem : 'num'+awardItem}></i>
                          </span>
                     )
                 })
             }else{
                 return  item.map((awardItem,awardIndex)=>{
                     if(this.props.optionData[awardItem]){
                         return (
                             <span key={awardIndex}>
                                  <i className={awardItem!=10   ? 'num0'+awardItem : 'num'+awardItem}></i>
                               </span>
                         )
                     }else{
                         return (
                             <span key={awardIndex}>
                                  <i>{awardItem}</i>
                              </span>
                         )
                     }
                 })
             }
        }

        const  isAllFalse = (optionData)=>{
             for (let key in optionData){
                 if(optionData[key]){
                     return false
                 }
             }
            return true
        }

        const  historyList = this.props.historyData.map((item,index)=>{
             return(
                 <tr  className=""  key={index}>
                     <td>
                         <span className="paddingSpan">{item.Period}</span>
                     </td>
                     <td>
                         <span className="paddingSpan">{item.DrawingTime.DateFormat('hh:mm')}</span>
                     </td>
                     <td>
                          <span className="lotteryNumber_pk10"  style={{paddingTop:'1px'}}>
                              {openCodeList(item.OpenCodeList,isAllFalse(this.props.optionData))}
                           </span>
                     </td>
                 </tr>
             )
        })

        return(
            <div className="csj_historyKaiJiang">
                <div className="hkj_table hkj_pk10Table">
                    <table>
                        <thead>
                        <tr className="tdBgColorF6">
                            <th width="20%"  className="paddingSpan">期数</th>
                            <th width="15%"  className="paddingSpan">时间</th>
                            <th  ><div className="pk10_btnBlock">
                                <span  className="paddingSpan2"><i  className="" >号码</i></span>
                                <span  className="paddingSpan2"><i  className="" >大小</i></span>
                                <span  className="paddingSpan2"><i  className="" >单双</i></span>
                                <span  className="paddingSpan2"><i  className="" >对子</i></span>
                            </div></th>
                        </tr>
                        </thead>
                        <tbody>
                            {historyList}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});

export  default  ResultTable;

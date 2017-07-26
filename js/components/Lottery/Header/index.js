'use strict';

import  React                            from 'react';
import  ReactDOM,{ render }   from 'react-dom';
import  lodash_                         from 'lodash';

import  ToolBar                         from  '../Toolbar'

const  Header  = React.createClass({
    propTypes:{
        lotteryData: React.PropTypes.array.isRequired,
        code:React.PropTypes.string.isRequired,
        chooseIsShow:React.PropTypes.bool.isRequired,
        onChangeShow:React.PropTypes.func.isRequired,

        //传给Toolbar组件的属性集;
        startDate: React.PropTypes.string.isRequired,
        isOpen:React.PropTypes.bool.isRequired,
        onSelect: React.PropTypes.func.isRequired,
        onCancel: React.PropTypes.func.isRequired,
        openSelect: React.PropTypes.func.isRequired,
        loadHistoryData: React.PropTypes.func.isRequired,

        //传给Timer组件的属性集;
        awardTimes: React.PropTypes.object.isRequired,
        getNextAwardTime: React.PropTypes.func.isRequired,
        getAwardData: React.PropTypes.func.isRequired,
    },
    shouldComponentUpdate(nextProps, nextState) {
        return (!lodash_.eq(this.props.lotteryData,nextProps.lotteryData) || this.props.code !== nextProps.code || this.props.chooseIsShow !== nextProps.chooseIsShow  ||  !lodash_.eq(this.props.startDate,nextProps.startDate) || this.props.isOpen !== nextProps.isOpen || !lodash_.eq(this.props.awardTimes,nextProps.awardTimes));
    },
    onChangeShowHandle(){
        this.props.onChangeShow();
    },
    render(){

        let title;
        let functionalColor;

        //传给Toolbar组件的属性集;
        const  toolBarProps = {
            startDate: this.props.startDate,
            isOpen: this.props.isOpen,
            onSelect: this.props.onSelect,
            onCancel: this.props.onCancel,
            openSelect: this.props.openSelect,
            loadHistoryData: this.props.loadHistoryData,

            //传给Timer组件的属性集;
            awardTimes: this.props.awardTimes,
            getNextAwardTime:this.props.getNextAwardTime,
            getAwardData: this.props.getAwardData,
        }

        const color = this.props.lotteryData.map((item,index)=>{
             if(item.code == this.props.code){
                 title = item.title+"-"+item.funcData[0].title;
                 functionalColor = item.funcData.map((funcDataItem,funcDataIndex)=>{
                     return  (<a href={funcDataItem.href}  className={funcDataItem.class}  key={funcDataIndex}>{funcDataItem.title}</a>)
                  })
             }
             return  (<a href={item.href}  className={item.class}  key={index}>{item.title}</a>)
        })

        return(
         <div>
            <div className="csj_header"  ref="header">
                <div className="csj_redNav">
                    <a className="csj_navback" href="/" ></a>
                    <span className="csj_titleNav" ><i className={this.props.chooseIsShow ? "csj_titleNav_xjt  hover" : "csj_titleNav_xjt"}  onClick={this.onChangeShowHandle}>{title}</i></span>
                    <a href="" className="csj_rightEdit" target="_blank">反馈</a>
                </div>
                <ToolBar  {...toolBarProps} />
            </div>

            <div className={this.props.chooseIsShow ? "csj_lotteryFunctionChoose  csj_lotteryFunctionChoose_show" : "csj_lotteryFunctionChoose"}>
                <div className="lfc_title"><span className="csj_lfcIcon">切换功能</span></div>
                <div className="lfc_content">
                    {functionalColor}
               </div>
               <div className="lfc_title"><span className="csj_lfcIcon2">切换彩种</span></div>
               <div className="lfc_content">
                   {color}
               </div>
            </div>

         </div>
        )
    },
    componentDidMount(){
        let  headerHeight =ReactDOM.findDOMNode(this.refs.header).offsetHeight;
        this.props.setBodyPaddingTop(headerHeight);
    }


});

export  default  Header;

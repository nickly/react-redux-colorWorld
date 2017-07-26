'use strict';

import  React                            from 'react';
import  { connect }                    from 'react-redux';
import  { bindActionCreators } from 'redux';
import  moment                        from 'moment';

import  HighOrderComponent from '../../../components/Commom/HighOrderComponent';
import  Loading                         from '../../../components/Commom/Loading';
import  Header                           from '../../../components/Lottery/Header';
import  Banner                           from '../../../components/Commom/Banner';
import  HistoryOption                from '../../../components/Lottery/HistoryOption';
import  ResultTable                    from '../../../components/Lottery/ResultTable';

import  dataservice                     from  '../../../api/dataservice';

import  $                                      from 'webpack-zepto';


const  mapStateToProps = function (state) {
    return{
        lotteryData: state.loadLotteryData_Reducer.lotteryData,
        chooseIsShow: state.chooseIsShow_Reducer.chooseIsShow,
        isOpen: state.openSelect_Reducer.isOpen,
        startDate: state.onSelect_Reducer.startDate,
        awardTimes: state.loadAwardTimes_Reducer.awardTimes,
        heightHeight: state.setBodyPaddingTop_Reducer.headerHeight,
        isHide:state.onHideForOption_Reducer.isHide,
        historyData: state.loadHistoryData_Reducer.historyData,
        optionData: state.optionData_Reducer.optionData,
    }
}

const actions ={
    receiveUserData(data) {
        return {
            type: 'Receive_User_Data',
            data: data
        };
    },
    loadLotteryData(lotteryData){
       return{
           type:'Load_LotteryData',
           lotteryData
       }
    },
    loadingMoment(startDate){
        return {
            type: 'Loading_Moment',
            startDate
        }
    },
    loadAwardTimes(){
        return (dispatch,getState)=>{
            $.ajax({
                url: 'http://m.api.1399p.com/api/pk10/GetAwardTimes',
                method:'GET',
                dataType : 'jsonp',
                success : (data)=>{
                    dispatch({
                        type: 'Load_NextIssueNo',
                        awardTimes: JSON.parse(data.Result)
                    })
                },
                error:(e)=>{
                    console.log("error");
                }
            })
        }
    },
    loadHistoryData(startDateParam){
        return (dispatch,getState)=>{
            $.ajax({
                url: 'http://m.api.1399p.com/api/pk10/History',
                method:'GET',
                data:{
                    date: startDateParam
                },
                dataType : 'jsonp',
                success : (data)=>{
                    dispatch({
                        type: 'Load_HistoryData',
                        historyData:data.Result
                    })
                },
                error:(e)=>{
                    console.log("error");
                }
            })
        }
    },
    loadAwardData(historyData){
        return (dispatch,getState)=>{
            $.ajax({
                url: 'http://m.api.1399p.com/api/pk10/GetAwardData',
                method:'GET',
                dataType : 'jsonp',
                success:(data)=>{
                    let  openCodeListArray = data.Result.current.award.split(',');
                    dispatch({
                        type: 'Load_AwardData',
                        historyData: getState().loadHistoryData_Reducer.historyData.splice(0,0,{'DrawingTime': data.Result.current.date+"T"+data.Result.current.time, 'OpenCodeList': openCodeListArray,'Period':data.Result.current.period}),
                    })
                },
                error:(e)=>{
                    console.log("error");
                }
            })
        }
    },
    onChangeShow(){
        return {
            type: 'On_ChangeShow'
        }
    },
    onSelect(startDate){
        return {
            type : 'On_Select',
            startDate
        }
    },
    onCancel(){
        return {
            type: 'On_Cancel'
        }
    },
    openSelect(){
        return {
            type: 'Open_Select'
        }
    },
    setBodyPaddingTop(headerHeight){
        return{
            type: 'Set_Body_PaddingTop',
            headerHeight
        }
    },
    onHideForOption(){
        return{
            type: 'On_HideForOption'
        }
    },
    numberChoose(hoverNum,optionData){
        return{
             type: 'Number_Choose',
             hoverNum,
             optionData: optionData
        }
    },
    bsSideChoose(hoverNum,optionData){
        return {
            type: 'BsSide_Choose',
            hoverNum,
            optionData: optionData
        }
    },
    loadOptionData(optionData){
        return {
            type: 'Load_OptionData',
            optionData
        }
    },
    recovery(optionData){
        return {
            type: 'Recovery',
            optionData
        }
    }
}

const  mapDispatchToProps = function (dispatch) {
    return  {
        actions: bindActionCreators(actions, dispatch)
    };
}


const PK10Container =  React.createClass({

    componentWillMount(){

        this.props.actions.loadingMoment(moment().format('MM/DD'));
        this.props.actions.loadLotteryData(dataservice.lotteryData());
        this.props.actions.loadAwardTimes();
        this.props.actions.loadHistoryData();

        let  optionObj = {}
        for (let  i=1; i < 11; i++){optionObj[i] = false}
        optionObj['大']=false;
        optionObj['小']=false;
        optionObj['单']=false;
        optionObj['双']=false;
        this.props.actions.loadOptionData(optionObj);
    },
    render() {

        const  loadingProps = {
            //传给Loading组件得属性;
            awardTimes: this.props.awardTimes,
            historyData: this.props.historyData,
        }

        const  headerProps ={
            //传给Header组件的属性;
            lotteryData: this.props.lotteryData,
            code: this.props.params.id,
            chooseIsShow: this.props.chooseIsShow,
            onChangeShow:this.props.actions.onChangeShow,
            setBodyPaddingTop: this.props.actions.setBodyPaddingTop,

            //传给Toolbar组件的属性集;
            startDate: this.props.startDate,
            isOpen:this.props.isOpen,
            onSelect: this.props.actions.onSelect,
            onCancel: this.props.actions.onCancel,
            openSelect: this.props.actions.openSelect,
            loadHistoryData: this.props.actions.loadHistoryData,

            //传给Timer组件的属性集;
            awardTimes: this.props.awardTimes,
            getNextAwardTime: this.props.actions.loadAwardTimes,
            getAwardData: this.props.actions.loadAwardData,
        }

        const  historyOptionProps = {
            //传给HistoryOption组件的属性;
            isHide: this.props.isHide,
            optionData: this.props.optionData,

            //传给HistoryOption组件的方法;
            numberChoose: this.props.actions.numberChoose,
            bsSideChoose: this.props.actions.bsSideChoose,
            onHideForOption: this.props.actions.onHideForOption,
            recovery: this.props.actions.recovery,
        }

        const  ResultTableProps = {
            optionData: this.props.optionData,
            historyData: this.props.historyData
        }

        return (
            <div>
                <Header    {...headerProps}  />
                <div className="scroll_body"  style={{paddingTop:this.props.heightHeight}}>
                    <Banner />
                    <HistoryOption  {...historyOptionProps}/>
                    <ResultTable  {...ResultTableProps} />
                </div>
               <Loading  {...loadingProps}/>
            </div>
        )
    },
    componentDidMount(){}
})


export default  connect(mapStateToProps  , mapDispatchToProps)(PK10Container);

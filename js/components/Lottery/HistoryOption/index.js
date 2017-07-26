'use strict';

import  React                            from 'react';

import  lodash_                         from 'lodash';

const  HistoryOption  = React.createClass({

    propTypes:{
        //属性;
        isHide: React.PropTypes.bool.isRequired,
        optionData: React.PropTypes.object.isRequired,
        //方法;
        numberChoose: React.PropTypes.func.isRequired,
        bsSideChoose: React.PropTypes.func.isRequired,
        onHideForOption: React.PropTypes.func.isRequired,
        recovery: React.PropTypes.func.isRequired,
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        return (this.props.isHide !== nextProps.isHide || (!lodash_.eq(this.props.optionData,nextProps.optionData)));
    },
    numberChoose(num){
        this.props.numberChoose(num,this.props.optionData);
    },
    bsSideChoose(num){
        this.props.bsSideChoose(num,this.props.optionData);
    },
    onHideHandle(){
         this.props.onHideForOption();
    },
    recoveryHandle(){
         this.props.recovery(this.props.optionData);
    },
    render(){

        const  spanList = [];

        //console.log(this.props.optionData)

        for(let i = 1; i < 11; i++){
            spanList.push(<div className="tool_li" key={i}><span className={this.props.optionData[i] ? 'hover': ''} onClick={this.numberChoose.bind(this,i)}>{i}</span></div>)
        };

        return(
            <div className="hkj_tool">
                <div className={this.props.isHide ? 'hkj_tool_d hkj_toolHide' : 'hkj_tool_d'}>
                    <div className="tool_block">
                        <div className="tool_title">
                            <span>车号：</span>
                            <a  onClick={this.recoveryHandle}>还原</a>
                        </div>
                        <div className="tool_ul">
                                {spanList}
                        </div>
                    </div>
                    <div className="tool_block">
                        <div className="tool_ul">
                                <div className="tool_li">
                                    <b>双面：</b>
                                </div>
                                <div className="tool_li">
                                    <span className={this.props.optionData['大'] ? 'hover': ''} onClick={this.bsSideChoose.bind(this,'大')}>大</span>
                                </div>
                                <div className="tool_li">
                                    <span className={this.props.optionData['小'] ? 'hover': ''} onClick={this.bsSideChoose.bind(this,'小')}>小</span>
                                </div>
                                <div className="tool_li">
                                    <span className={this.props.optionData['单'] ? 'hover': ''} onClick={this.bsSideChoose.bind(this,'单')}>单</span>
                                </div>
                                <div className="tool_li">
                                    <span className={this.props.optionData['双'] ? 'hover': ''} onClick={this.bsSideChoose.bind(this,'双')}>双</span>
                                </div>
                            </div>
                    </div>
                </div>
                <p className="tool_fadeToggle"><a  className={this.props.isHide ? 'fadeOut' : ''}   onClick={this.onHideHandle}></a></p>
            </div>
        )
    },
});

export  default  HistoryOption;
'use strict';

import  React                          from 'react';
import  ReactDOM,{ render } from 'react-dom';
import  lodash_                       from 'lodash';

const  Header  = React.createClass({
    propTypes:{
        headerLink: React.PropTypes.array.isRequired,
        notice: React.PropTypes.string.isRequired
    },
    shouldComponentUpdate(nextProps, nextState) {
        return (!lodash_.eq(this.props.headerLink,nextProps.headerLink)  ||  this.props.notice !== nextProps.notice);
    },
    render(){
        const  headerLinkItem  =  this.props.headerLink.map((item,index)=>{
             return  <span key={index} className={item.className}><a href={item.link}>{item.title}</a></span>;
        })
        const  noticeHtml = '<marquee behavior="scroll" scrollamount="2"><font color="#000000">'+this.props.notice+'</font></marquee>';
        const  rawHTML={
            __html: noticeHtml
        };

        return(
             <div className="csj_header" ref="header">
                 <div className="csj_headerTop">
                     <div className="csj_logo"></div>
                     <div className="csj_rightButton">
                         {headerLinkItem}
                     </div>
                 </div>
                 <div className="csj_navBlock">
                     <div className="marquee"   dangerouslySetInnerHTML = {rawHTML}>
                     </div>
                 </div>
             </div>
         )
    },
    componentDidMount(){
        let  headerHeight =ReactDOM.findDOMNode(this.refs.header).offsetHeight;
        this.props.setBodyPaddingTop(headerHeight);
    }
})

export  default  Header;

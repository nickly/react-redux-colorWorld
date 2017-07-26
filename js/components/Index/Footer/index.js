'use strict';

import  React                            from 'react';

const Footer =  React.createClass({
    propTypes:{
        onScrollTopHandler: React.PropTypes.func
    },
    onScrollTopHandler(offsetTop){
        document.querySelector('body').scrollTop = offsetTop;
    },
    render() {
        return (
            <div className="csj_footer">
                  <span className="csj_footer_link" style={{paddingTop:15}}>
                       <a href="#"  className="nolink">触屏版</a>
                       <i>|</i>
                       <a  href="http://www.1396p.com?utm=msite">电脑版</a>
                      <i>|</i>
                      <a >用户反馈</a>
                      <i>|</i>
                      <a onClick={this.onScrollTopHandler.bind(this,0)}>回到顶部</a>
                  </span>
                    <span className="csj_footer_link_icon">
                       <a  className="icon1"  href="tel:4006549200"  target="_self">国内热线</a>
                       <a  className="icon2"  href="tel:00852-62104572" target="_self">境外热线</a>
                       <a  className="icon3"  href='http://wpa.b.qq.com/cgi/wpa.php?ln=2&uin=4006549200' target="_blank">在线客服</a>
                  </span>
                   <span className="csj_footer_link">
                       <a   href="http://www.1396mm.com/"  target="_blank">博世界</a>
                       <a   href="http://www.1396app.com/"  target="_blank">博应用</a>
                       <a   href="http://www.1396dh.com/"    target="_blank">爱博导航</a>
                       <a   href="http://www.1396klc.com/"   target="_blank">皇家快乐彩</a>
                  </span>
                <span className="csj_footer_bq">© 2000-2016 <a href="http://www.royaleu.com/" target="_blank">香港皇家科技</a> 版权所有</span>
            </div>
        )
    }

})

export  default  Footer;
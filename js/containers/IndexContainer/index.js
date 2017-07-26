'use strict';

import  React                            from 'react';
import  { connect }                    from 'react-redux';
import  { bindActionCreators } from 'redux';


import   Header                          from '../../components/Index/Header/';
import   Banner                          from '../../components/Commom/Banner';
import   Nav                                from '../../components/Index/Nav';
import   Main                              from '../../components/Index/Main';
import   Footer                            from '../../components/Index/Footer';
import   Loading                         from '../../components/Commom/Loading';

import   dataObjct                      from '../../api/dataservice';


const  mapStateToProps = function (state) {

    return{
        headerLink: dataObjct.headerLink(),
        notice: dataObjct.noticeData(),
        nav: dataObjct.navData(),
        mainNav: dataObjct.mainNavData(),
        heightHeight: state.setBodyPaddingTop_Reducer.headerHeight,
        loadingIsShow: state.loadingSuncess_Reducer.loadingIsShow
    }
}

const actions ={
    setBodyPaddingTop(headerHeight){
         return{
             type: 'Set_Body_PaddingTop',
             headerHeight
         }
    },
    loadingSuncess(){
          return{
              type: 'Loading_Suncess'
          }
    }
}

const  mapDispatchToProps = function (dispatch) {
    return  {
        actions: bindActionCreators(actions, dispatch)
    };
}


const IndexContainer =  React.createClass({

    componentWillMount(){

        if(this.props.mainNav.length > 0){
            this.props.actions.loadingSuncess();
        }

    },
    render() {

        return (
            <div>
                <Header  headerLink ={this.props.headerLink}  notice = {this.props.notice}  setBodyPaddingTop = {this.props.actions.setBodyPaddingTop}/>
                <div className="scroll_body"  style={{paddingTop:this.props.heightHeight}}>
                    <Banner  banners={this.props.banners}  />
                    <Nav   nav = {this.props.nav} />
                    <Main mainNav = {this.props.mainNav} />
                    <Footer setScrollTop = {this.props.actions.setScrollTop} />
                </div>
                <Loading  loadingIsShow={this.props.loadingIsShow}/>
            </div>
        )
    },
    componentDidMount(){}

})

export default  connect(mapStateToProps  , mapDispatchToProps)(IndexContainer);


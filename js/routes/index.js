'use strict';

import React, { Component } from 'react'
import  {Router , Route , browserHistory , hashHistory }  from 'react-router';

import  String from  '../extensions/String';


const rootRoute ={

    childRoutes: [{
            path: '/',
            getComponent(location, callback, params) {
                require.ensure([], (require) => {
                    callback(null, require('../containers/IndexContainer').default);
                })
            }
        }, {
            path: '/lottery/:id',
            getComponent(location, callback) {
                require.ensure(['../containers/Lottery/Pk10Container'], (require) => {
                    callback(null, require('../containers/Lottery/Pk10Container').default);
                     //callback(null, require('../containers/Lottery/'+location.params.id.UpperFirstLetter()+'Container').default);
                })
            }
        }]
}

const  routes = (<Router  routes={rootRoute}   history={browserHistory} />)

export  default   routes;


'use strict';
import  * as types from '../../constants/ActionTypes';
const  fetch  = require('isomorphic-fetch');


export function fetchingData(isFetchingData) {
    return {
        type: types.FETCHING_DATA,
        isFetchingData: isFetchingData,
    };
}


export function receiveUserData(data) {
    return {
        type: types.RECEIVE_USER_DATA,
        data: data
    };
}

export  function setUser() {
    return function (dispatch) {
      dispatch(fetchingData(true));
        fetch('http://mc.local.1396c.com/api/dataservice.ashx?datahandler=getnotice&client_name=csjmobile',{
            method: 'GET',
            mode: 'no-cors',

        }).then((response) => {
            console.log(response)
            if (response.status == 200) {
                return response.json()
            }
        }).then((data) => {
            dispatch(receiveUserData(data));
        }).then(() => {
            dispatch(fetchingData(false));
        })

    }
}

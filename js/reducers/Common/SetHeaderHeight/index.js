'use strict';

const initialState = {
    headerHeight: null
}

const  setBodyPaddingTop_Reducer = (state =initialState , action)=> {
    if (typeof state === "undfined") return {headerHeight: null};
    switch (action.type){
        case 'Set_Body_PaddingTop':
            return {
                headerHeight: action.headerHeight
            }
        default:
            return state;
    }
}

export  {setBodyPaddingTop_Reducer}


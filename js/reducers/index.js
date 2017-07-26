'use strict';

/*这个用于合并零碎的单个reduce*/
import { combineReducers } from 'redux';
import {setBodyPaddingTop_Reducer} from './Common/SetHeaderHeight';
import {loadLotteryData_Reducer,
             chooseIsShow_Reducer,
             openSelect_Reducer,
             onSelect_Reducer,
             loadAwardTimes_Reducer,
             onHideForOption_Reducer,
             loadHistoryData_Reducer,
             optionData_Reducer,
} from './Lottery/PK10'

//把各个reduce放到一个reducers对象里面;
const reducers = {
    setBodyPaddingTop_Reducer,
    loadLotteryData_Reducer,
    chooseIsShow_Reducer,
    openSelect_Reducer,
    onSelect_Reducer,
    loadAwardTimes_Reducer,
    onHideForOption_Reducer,
    loadHistoryData_Reducer,
    optionData_Reducer,
};

//使用redux的combineReducers方法将所有reducer打包起来
export default combineReducers({
    ...reducers
})




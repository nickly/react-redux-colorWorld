'use strict';

const lotteryData_State = {
    lotteryData: []
}
const chooseIsShow_State = {
    chooseIsShow: false
}
const startDate_State = {
    startDate: ''
}
const isOpen_State = {
    isOpen: false
}
const  awardTimes_State={
    awardTimes: {}
}

const initialState = {
    headerHeight: null
}

const isHide_State = {
    isHide: false
}

const  historyData_State = {
    historyData: []
}

const  optionData_State = {
    optionData: {}
}



const  loadLotteryData_Reducer = (state = lotteryData_State , action)=>{
    if (typeof state === "undfined") return {lotteryData: []};
    switch (action.type){
        case 'Load_LotteryData':
            return {
                lotteryData: state.lotteryData.concat(action.lotteryData)
            }
        default:
            return state;
    }
}

const  chooseIsShow_Reducer = (state = chooseIsShow_State, action) =>{
    if (typeof state === "undfined") return {chooseIsShow: false};
    switch (action.type){
        case 'On_ChangeShow':
            return {
                chooseIsShow: !state.chooseIsShow
            }
        default:
            return state;
    }
}

const  onSelect_Reducer = (state = startDate_State, action) =>{
    if (typeof state === "undfined") return {startDate: ''};
    switch (action.type){
        case 'Loading_Moment':
            return {
                startDate: action.startDate
            }
        case 'On_Select':
            return {
                startDate: action.startDate
            }
        default:
            return state;
    }
}

const  openSelect_Reducer = (state = isOpen_State, action) =>{
    if (typeof state === "undfined") return {isOpen: false};
    switch (action.type){
        case 'Open_Select':
            return {
                isOpen: !state.isOpen
            }
        case  'On_Cancel':
            return {
                isOpen: false
            }
        default:
            return state;
    }
}

const  loadAwardTimes_Reducer = (state = awardTimes_State, action) =>{
    if (typeof state === "undfined") return {awardTimes: {}};
    switch (action.type){
        case 'Load_NextIssueNo':
            return {
                awardTimes: Object.assign({},state.awardTimes,action.awardTimes)
            }
        default:
            return state;
    }
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


const  onHideForOption_Reducer = (state =isHide_State , action)=> {
    if (typeof state === "undfined") return {isHide: false};
    switch (action.type){
        case 'On_HideForOption':
            return {
                isHide: !state.isHide
            }
        default:
            return state;
    }
}

const  loadHistoryData_Reducer = (state =historyData_State , action)=> {
    if (typeof state === "undfined") return {historyData: []};
    switch (action.type){
        case 'Load_HistoryData':
            return {
                historyData: action.historyData
            }
        case 'Load_AwardData':
            return{
                historyData: state.historyData.concat(action.historyData)
            }
        default:
            return state;
    }
}


const  optionData_Reducer = (state =optionData_State , action)=> {
    if (typeof state === "undfined") return {optionData: {}};
    switch (action.type){
        case 'Load_OptionData':
              return {
                  optionData: Object.assign({},state.optionData, action.optionData)
              }
        case 'Number_Choose':
               action.optionData[action.hoverNum] = !action.optionData[action.hoverNum];
            return {
                optionData: Object.assign({}, state.optionData, action.optionData)
            }
        case 'BsSide_Choose':

           if(action.hoverNum == '大'){
               action.optionData['小'] = false;
               action.optionData['单'] = false;
               action.optionData['双'] = false;
               action.optionData['大'] = !action.optionData[action.hoverNum];

               if(action.optionData['大']){
                   for(let i=1; i<11; i++){
                       if(i > 5){
                           action.optionData[i] = true;
                       }else{
                           action.optionData[i] = false;
                       }
                   }
               }else{
                   for(let i=1; i<11; i++){
                       if(i > 5){
                           action.optionData[i] = false;
                       }
                   }
               }

           }else if(action.hoverNum == '小'){
               action.optionData['大'] = false;
               action.optionData['单'] = false;
               action.optionData['双'] = false;
               action.optionData['小'] = !action.optionData[action.hoverNum];

               if(action.optionData['小']){
                   for(let i=1; i<11; i++){
                       if(i < 6){
                           action.optionData[i] = true;
                       }else{
                           action.optionData[i] = false;
                       }
                   }
               }else{
                   for(let i=1; i<11; i++){
                       if(i < 6){
                           action.optionData[i] = false;
                       }
                   }
               }
           }else if(action.hoverNum == '单'){
               action.optionData['大'] = false;
               action.optionData['小'] = false;
               action.optionData['双'] = false;
               action.optionData['单'] = !action.optionData[action.hoverNum];

               if(action.optionData['单']){
                   for(let i=1; i<11; i++){
                       if(i % 2 != 0){
                           action.optionData[i] = true;
                       }else{
                           action.optionData[i] = false;
                       }
                   }
               }else{
                   for(let i=1; i<11; i++){
                       if(i % 2 !=0){
                           action.optionData[i] = false;
                       }
                   }
               }
           }else if(action.hoverNum == '双'){
               action.optionData['大'] = false;
               action.optionData['小'] = false;
               action.optionData['单'] = false;
               action.optionData['双'] = !action.optionData[action.hoverNum];

               if(action.optionData['双']){
                   for(let i=1; i<11; i++){
                       if(i % 2 == 0){
                           action.optionData[i] = true;
                       }else{
                           action.optionData[i] = false;
                       }
                   }
               }else{
                   for(let i=1; i<11; i++){
                       if(i % 2 ==0){
                           action.optionData[i] = false;
                       }
                   }
               }
           }

            return {
                optionData: Object.assign({}, state.optionData, action.optionData)
            }
        case 'Recovery':

            for(let key in action.optionData){
                action.optionData[key]  = false;
            }
            return {
                optionData: Object.assign({},state.optionData, action.optionData)
            }
        default:
            return state;
    }
}




export  {loadLotteryData_Reducer,
              chooseIsShow_Reducer,
              openSelect_Reducer,
              onSelect_Reducer,
              loadAwardTimes_Reducer,
              setBodyPaddingTop_Reducer,
              onHideForOption_Reducer,
              loadHistoryData_Reducer,
              optionData_Reducer,
}

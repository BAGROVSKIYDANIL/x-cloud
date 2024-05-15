import {createSlice} from '@reduxjs/toolkit';

const chatBotSlice = createSlice({
    name: 'chatBot',
    initialState: {
        activeDropDownMenu: {
            landline: false,
            mobile: false,
            national: false,
            tollfee: false,
            random: false 
        }
    },
    reducers: {
        openLandLine(state, action)
        {
            console.log(action)
            state.activeDropDownMenu.landline = action.payload 
            console.log(state.activeDropDownMenu.landline)
        },
        openMobile(state, action)
        {
            state.activeDropDownMenu.mobile = action.payload;
            if(state.activeDropDownMenu.landline) 
                {
                    state.activeDropDownMenu.landline = false;
                }
        }
    },
})
export const {openLandLine} = chatBotSlice.actions;
export const {openMobile} = chatBotSlice.actions;
export default chatBotSlice.reducer;
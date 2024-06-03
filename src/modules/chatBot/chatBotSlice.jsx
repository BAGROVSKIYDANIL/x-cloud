import {createSlice} from '@reduxjs/toolkit';

const chatBotSlice = createSlice({
    name: 'chatBot',
    initialState: {
        CountryList:[
                    {id: 1, name: 'Austria', imageUrl: 'Austria.svg'},
                    {id: 2, name: 'Slovakia', imageUrl: 'Slovakia.svg'},
                    {id: 3, name: 'Canada', imageUrl: 'Canada.svg'},
                    {id: 4, name: 'Belgium', imageUrl: 'Belgium.svg'},
                    {id: 5, name: 'Bulgaria', imageUrl: 'Bulgaria.svg'},
                    {id: 6, name: 'Czech', imageUrl: 'Czech.svg'},
                    {id: 7, name: 'Australia', imageUrl: 'Australia.svg'},
                    {id: 8, name: 'Israel', imageUrl: 'Israel.svg'},
                    {id: 9, name: 'Japan', imageUrl: 'Japan.svg'},
                    {id: 10, name: 'Kuwait', imageUrl: 'Kuwait.svg'},
                    {id: 11, name: 'USA', imageUrl: 'USA.svg'},
                    {id: 12, name: 'UK', imageUrl: 'UK.svg'},
                    {id: 13, name: 'UAE', imageUrl: 'UAE.svg'},
                    {id: 14, name: 'Saudi', imageUrl: 'Saudi.svg'},
                    {id: 15, name: 'Oman', imageUrl: 'Oman.svg'},
                    {id: 16, name: 'Switzerland', imageUrl: 'Switzerland.svg'},
                    {id: 17, name: 'Qatar', imageUrl: 'Qatar.svg'},
                    {id: 18, name: 'Bahrain', imageUrl: 'Bahrain.svg'},
                    {id: 19, name: 'Slovenia', imageUrl: 'Slovenia.svg'},
                    {id: 20, name: 'Spain', imageUrl: 'Spain.svg'},
                    {id: 21, name: 'Sweden', imageUrl: 'Sweden.svg'},
                    {id: 22, name: 'Portugal', imageUrl: 'Portugal.svg'},
                    {id: 23, name: 'Poland', imageUrl: 'Poland.svg'},
                    {id: 24, name: 'Romania', imageUrl: 'Romania.svg'},
                    {id: 25, name: 'Malta', imageUrl: 'Malta.svg'},
                    {id: 26, name: 'Netherlands', imageUrl: 'Netherlands.svg'},
                    {id: 27, name: 'Norway', imageUrl: 'Norway.svg'},
                    {id: 28, name: 'Italy', imageUrl: 'Italy.svg'},
                    {id: 29, name: 'Latvia', imageUrl: 'Latvia.svg'},
                    {id: 30, name: 'Lithuania', imageUrl: 'Lithuania.svg'},
                    {id: 31, name: 'Hungary', imageUrl: 'Hungary.svg'},
                    {id: 32, name: 'Iceland', imageUrl: 'Iceland.svg'},
                    {id: 33, name: 'Ireland', imageUrl: 'Ireland.svg'},
                    {id: 34, name: 'Estonia', imageUrl: 'Estonia.svg'},
                    {id: 35, name: 'France', imageUrl: 'France.svg'},
                    {id: 36, name: 'Greece', imageUrl: 'Greece.svg'},
        ],
        stateTotalCount: 0,
        selectedCounty: 0,
        countState: []
    },
    reducers: {
        selectCountry(state, action)
        {
            state.selectedCounty = action.payload;
        },
        changeTotalCount(state, action)
        {
            state.stateTotalCount = action.payload;
        },
        postAllCount(state, action)
        {
            state.countState = action.payload;
        }
    },
})
export const {selectCountry, changeTotalCount, postAllCount} = chatBotSlice.actions;
export default chatBotSlice.reducer;
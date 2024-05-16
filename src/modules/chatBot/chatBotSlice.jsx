import {createSlice} from '@reduxjs/toolkit';

const chatBotSlice = createSlice({
    name: 'chatBot',
    initialState: {
        CountryList:[
                    {id: 1, name: 'Austria', imageUrl: 'Austria.png'},
                    {id: 2, name: 'Slovakia', imageUrl: 'Slovakia.png'},
                    {id: 3, name: 'Canada', imageUrl: 'Canada.svg'},
                    {id: 4, name: 'Belgium', imageUrl: 'Belgium.png'},
                    {id: 5, name: 'Bulgaria', imageUrl: 'Bulgaria.png'},
                    {id: 6, name: 'Czech', imageUrl: 'Czech.png'},
                    {id: 7, name: 'Australia', imageUrl: 'Australia.png'},
                    {id: 8, name: 'Israel', imageUrl: 'Israel.png'},
                    {id: 9, name: 'Japan', imageUrl: 'Japan.png'},
                    {id: 10, name: 'Kuwait', imageUrl: 'Kuwait.png'},
                    {id: 11, name: 'USA', imageUrl: 'USA.png'},
                    {id: 12, name: 'UK', imageUrl: 'UK.png'},
                    {id: 13, name: 'UAE', imageUrl: 'UAE.png'},
                    {id: 14, name: 'Saudi', imageUrl: 'Saudi.png'},
                    {id: 15, name: 'Oman', imageUrl: 'Oman.png'},
                    {id: 16, name: 'Switzerland', imageUrl: 'Switzerland.png'},
                    {id: 17, name: 'Qatar', imageUrl: 'Qatar.png'},
                    {id: 18, name: 'Bahrain', imageUrl: 'Bahrain.png'},
                    {id: 19, name: 'Slovenia', imageUrl: 'Slovenia.png'},
                    {id: 20, name: 'Spain', imageUrl: 'Spain.png'},
                    {id: 21, name: 'Sweden', imageUrl: 'Sweden.png'},
                    {id: 22, name: 'Portugal', imageUrl: 'Portugal.png'},
                    {id: 23, name: 'Poland', imageUrl: 'Poland.png'},
                    {id: 24, name: 'Romania', imageUrl: 'Romania.png'},
                    {id: 25, name: 'Malta', imageUrl: 'Malta.png'},
                    {id: 26, name: 'Netherlands', imageUrl: 'Netherlands.png'},
                    {id: 27, name: 'Norway', imageUrl: 'Norway.png'},
                    {id: 28, name: 'Italy', imageUrl: 'Italy.png'},
                    {id: 29, name: 'Latvia', imageUrl: 'Latvia.png'},
                    {id: 30, name: 'Lithuania', imageUrl: 'Lithuania.png'},
                    {id: 31, name: 'Hungary', imageUrl: 'Hungary.png'},
                    {id: 32, name: 'Iceland', imageUrl: 'Iceland.png'},
                    {id: 33, name: 'Ireland', imageUrl: 'Ireland.png'},
                    {id: 34, name: 'Estonia', imageUrl: 'Estonia.png'},
                    {id: 35, name: 'France', imageUrl: 'France.png'},
                    {id: 36, name: 'Greece', imageUrl: 'Greece.png'},
        ],
        trashBasket:[

        ],
        selectedCounty: 0
    },
    reducers: {
        selectCountry(state, action)
        {
            state.selectedCounty = action.payload;
        }
    },
})
export const {selectCountry} = chatBotSlice.actions;
export const {openMobile} = chatBotSlice.actions;
export default chatBotSlice.reducer;
import {configureStore} from '@reduxjs/toolkit';
import chatBotReducer from '../../modules/chatBot/chatBotSlice';

export default configureStore({
    reducer: {
        bot: chatBotReducer
    },
});
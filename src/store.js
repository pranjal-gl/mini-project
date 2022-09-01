import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './useSlice';

const store = configureStore({
    reducer: {
        quiz: quizReducer
    }
})
export default store;
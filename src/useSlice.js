import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQuestions = createAsyncThunk('/fun-trivia/getQuestions', async () => {
    try {
        const res = await axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple');
        // console.log(res.data);
        return res.data;
    }
    catch(err) {
        console.log(err);
    }
})

const initialStateValue = {
    questions: [],
}
const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        value: initialStateValue
    },
    reducers: {

    },
    extraReducers: {
        [getQuestions.fulfilled]: (state, action) => {
            // console.log(action.payload.results);
            state.value.questions = action.payload.results;
        }   
    }
})

export default quizSlice.reducer;
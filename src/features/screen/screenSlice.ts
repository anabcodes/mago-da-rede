import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ScreenType = 'intro' | 'quiz' | 'reveal' | 'explanation';

interface ScreenState { 
    //estruta para o slice, quando aplicada, ela diz que o estado vai ter propriedade current do tipo Screen Type
    current: ScreenType;
}


// crio variavel, do tipo ScreenState, que inicia com intro
const initialState: ScreenState = {
    current: 'intro'
}


export const screenSlice = createSlice({
    name: 'screen',
    initialState: initialState,
    reducers: {
        setScreen: (state, action: PayloadAction<ScreenType>) => {
            state.current = action.payload;
        }
    }
})

export const { setScreen } = screenSlice.actions;

export default screenSlice.reducer;
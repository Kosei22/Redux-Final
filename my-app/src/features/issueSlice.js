import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "room cleaning", state: "open", url: "http://...yahoo,", createdAt: "Apr1", updatedAt: "Apr15" },
    { id: "2", title: "wipe floor", state: "open", url: "http://...google,", createdAt: "Apr2", updatedAt: "Apr13" },
    { id: "3", title: "clean car", state: "open", url: "http://...apple,", createdAt: "Apr2", updatedAt: "Apr11" }
]

export const issueSlice = createSlice({
    name: "issue",
    initialState,
    reducers: {
        create: (state, action) => {
            console.log(action.payload);
            state.push(action.payload)
        },
        remove: (state) => {
            console.log("delete");
        },
        edit: (state, action) => {
            console.log("edit");
            const newState = state.filter(item => item.id != action.payload.id)
            return [...newState, action.payload]
        },
    },
})

export const { create, remove, edit } = issueSlice.actions;

export default issueSlice.reducer;
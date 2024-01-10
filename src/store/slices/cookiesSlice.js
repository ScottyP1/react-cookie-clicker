import { createSlice } from "@reduxjs/toolkit";

const cookieSlice = createSlice({
    name: 'cookie',
    initialState: {
        count: 0,
        perSecond: 0,
        pointers: 0,
        items: [
            { id: 1, name: 'Cursor', price: 15, level: 0, perSecond: 0.1 },
            { id: 2, name: 'Grandma', price: 100, level: 0, perSecond: 1 },
            { id: 3, name: 'Farm', price: 1000, level: 0, perSecond: 8 },
            { id: 4, name: 'Mine', price: 12000, level: 0, perSecond: 40 },
            { id: 5, name: 'Factory', price: 130000, level: 0, perSecond: 260 },
        ],
        upgrades: ['X2', 'Pointer', 'TimeTravel', 'BlackHole',],
        multiplier: [1, 10, 100]
    },
    reducers: {
        incrementCookies(state) {
            state.count++
        },
        incrementByPerSecond(state) {
            state.count += state.perSecond
        },
        decrementByAmount(state, action) {
            state.count -= action.payload
        },
        setItems(state, action) {
            state.items.map((items) => {
                if (action.payload.item.id === items.id) {
                    if (action.payload.item.name === 'Cursor') {
                        state.pointers = state.pointers + 1
                    }
                    return {
                        ...items,
                        [items.level]: items.level += action.payload.curMulti,
                        [items.price]: (items.price += Math.floor(items.price * 0.2))
                    }
                } else {
                    return items
                }
            })
        },
        setPerSec(state, action) {
            state.perSecond += action.payload
        },
    },
});

export const { incrementCookies, decrementByAmount, setItems, setPerSec, incrementByPerSecond } = cookieSlice.actions;
export default cookieSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const CarsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            //Assumption - action.paload === { name: 'ab', cost: 140 }
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCar(state,action){

        }
    }
});
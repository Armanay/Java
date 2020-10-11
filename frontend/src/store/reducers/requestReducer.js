
import {
    ADD_VEHICLE,
    GET_PARKING,
    GET_DRIVER_VEHICLES,
    GET_USERS, LEAVE,
    TAKE_PLACE,
    TAKEN_PLACES,
    SET_VEHICLE,
    GET_VEHICLES,
    GET_FREE_PLACES
} from '../actions/types'

const initialState = {
    driverVehicles: [],
    parking: [],
    users: [],
    takenPLaces: [],
    places: [],
    vehicles: [],
    freePlaces: []
};

export default function (state=initialState, action){
    if (action.type === GET_DRIVER_VEHICLES) {
        return {
            ...state,
            driverVehicles :action.payload,

        }
    }else if (action.type === GET_PARKING) {
        return {
            ...state,
            parking: action.payload

        }
    }else if (action.type === GET_FREE_PLACES) {
        return {
            ...state,
            freePlaces: action.payload

        }
    }else if (action.type === GET_VEHICLES) {
        return {
            ...state,
            vehicles: action.payload

        }
    }else if (action.type === ADD_VEHICLE) {
        return {
            ...state,
            vehicles: [...state.vehicles, action.payload]
        }
    }else if (action.type === SET_VEHICLE) {
        return {
            ...state,
            driverVehicles: [...state.driverVehicles, action.payload]
        }
    }else if (action.type === TAKE_PLACE) {
        return {
            ...state,
            takenPLaces:[...state.takenPLaces, action.payload]
        }
    }else if (action.type === GET_USERS) {
        return {
            ...state,
            users: action.payload
        }
    }else if (action.type === TAKEN_PLACES) {
        return {
            ...state,
            takenPLaces: action.payload
        }
    }else if (action.type === LEAVE) {
        return {
            ...state,
            takenPLaces: remove(state.takenPLaces, action.payload)
        }
    }
    else {
        return state;
    }
}

function remove(list, id) {
    for(let i = list.length - 1; i >= 0; i--) {
        if(list[i].id === id) {
            list.splice(i, 1);
            break
        }
    }
    return [...list]
}


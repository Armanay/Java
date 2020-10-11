import {
    ADD_VEHICLE,
    SET_VEHICLE,
    GET_PARKING,
    GET_DRIVER_VEHICLES,
    LEAVE,
    TAKE_PLACE,
    TAKEN_PLACES,
    GET_VEHICLES,
    GET_FREE_PLACES
} from './types'
import axios from 'axios'


export const getDriverVehicles = () => dispatch =>{
    axios.get('http://localhost:8082/api/driverVeh')
        .then(res => {
            dispatch({
                type: GET_DRIVER_VEHICLES,
                payload: res.data
            })
        })
        .catch(err => console.log(err.msg))
};

export const getParkings = () => dispatch =>{
    axios.get('http://localhost:8086/places')
        .then(res => {
            dispatch({
                type: GET_PARKING,
                payload: res.data
            })
        })
        .catch(err => console.log(err.msg))
};

export const takePlace = (driverVehicleId, placeId) => dispatch =>{
    axios.post(`http://localhost:8083/api/driverPlaces/${driverVehicleId}/${placeId}`)
        .then(res => {
            dispatch({
                type: TAKE_PLACE
            })
        })
        .catch(err => console.log(err.msg))
};

export const takenPlaces = () => dispatch =>{
    axios.get('http://localhost:8083/api/driverPlaces')
        .then(res => {
            dispatch({
                type: TAKEN_PLACES,
                payload: res.data
            })
        })
        .catch(err => console.log(err.msg))
};

export const getFreePlaces = () => dispatch =>{
    axios.get('http://localhost:8086/places/free')
        .then(res => {
            dispatch({
                type: GET_FREE_PLACES,
                payload: res.data
            })
        })
        .catch(err => console.log(err.msg))
};

export const addVehicle = (model, nomer) => dispatch =>{
    axios.post(`http://localhost:8085/vehicles/${model}/${nomer}`)
        .then(res => {
            dispatch({
                type: ADD_VEHICLE
            })
        })
        .catch(err => console.log(err.msg))
};
export const getVehicles = () => dispatch =>{
    axios.get('http://localhost:8085/vehicles')
        .then(res => {
            dispatch({
                type: GET_VEHICLES,
                payload: res.data
            })
        })
        .catch(err => console.log(err.msg))
};
export const setVehicleToDriver = (driverId, vehicleId) => dispatch =>{
    axios.post(`http://localhost:8082/api/driverVeh/${driverId}/${vehicleId}`)
        .then(res => {
            dispatch({
                type: SET_VEHICLE
            })
        })
        .catch(err => console.log(err.msg))
};

export const addDriver = (username, name, surname, phone) => dispatch =>{
    axios.post(`http://localhost:8081/drivers/${username}/${name}/${surname}/${phone}`)
        .then(res => {
            dispatch({
                type: ADD_VEHICLE
            })
        })
        .catch(err => console.log(err.msg))
};

export const leavePlace =  (driverVehicleId, placeId) => dispatch =>{
    axios.post(`http://localhost:8083/api/driverPlaces/leave/${driverVehicleId}/${placeId}`)
        .then(res => {
            dispatch({
                type: LEAVE
            })
        })
        .catch(err => console.log(err.msg))
};

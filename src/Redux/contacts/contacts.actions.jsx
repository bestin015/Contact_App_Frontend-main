import { useSelector } from "react-redux"
import { CREATE_CONTACTS_ERROR, CREATE_CONTACTS_LOADING, CREATE_CONTACTS_SUCCESS, DELETE_CONTACTS_ERROR, DELETE_CONTACTS_LOADING, DELETE_CONTACTS_SUCCESS, GET_CONTACTS_ERROR, GET_CONTACTS_LOADING, GET_CONTACTS_SUCCESS, UPDATE_CONTACTS_ERROR, UPDATE_CONTACTS_LOADING, UPDATE_CONTACTS_SUCCESS } from "./contacts.types"
import { BASE_URL } from "../../constants/config"
import axios from "axios"
import { store } from "../store"
import { LOGOUT } from "../users/user.types"





export const getContacts = () => async (dispatch) => {
    
    const {token} = store.getState().userReducer

    dispatch({ type: GET_CONTACTS_LOADING })
    try {
        const res = await axios(BASE_URL+"/movie", {
            method: "get",
            headers: {
                Authorization:token
            }
        })
        const {status,message,data} = res.data
        console.log(message)
        if (status === 1) {
            dispatch({ type: GET_CONTACTS_SUCCESS, payload: data })
        }
        else if(status ===2){
            dispatch({ type: LOGOUT })
        }
        else {
            dispatch({ type: GET_CONTACTS_ERROR })
        }
    } catch (error) {
        dispatch({ type: GET_CONTACTS_ERROR })
    }

}




export const createContacts = (obj) => async (dispatch) => {
    const {token} = store.getState().userReducer
    dispatch({ type: CREATE_CONTACTS_LOADING })
    try {
        const res = await axios(BASE_URL + "/movie/create", {
            method: "post",
            headers: {
                Authorization:token
            },
            data: obj
        })
        const {status,message} = res.data
        console.log(message)
        if (status === 1) {
            dispatch({ type: CREATE_CONTACTS_SUCCESS })
            dispatch(getContacts())
        }
        else {
            dispatch({ type: CREATE_CONTACTS_ERROR })
        }
    } catch (error) {
        dispatch({ type: CREATE_CONTACTS_ERROR })
    }

}



export const updateContacts = (id,obj) => async (dispatch) => {
    const {token} = store.getState().userReducer
    dispatch({ type: UPDATE_CONTACTS_LOADING })
    try {
        const res = await axios(BASE_URL + "/movie/", {
            method: "patch",
            headers: {
                Authorization:token,
                id: id
            },
            data: obj
        })
        const {status,message} = res.data
        console.log(message)
        if (status === 1) {
            dispatch({ type: UPDATE_CONTACTS_SUCCESS })
            dispatch(getContacts())
        }
        else {
            dispatch({ type: UPDATE_CONTACTS_ERROR })
        }
    } catch (error) {
        dispatch({ type: UPDATE_CONTACTS_ERROR })
    }

}



export const deleteContacts = (id) => async (dispatch) => {
    const {token} = store.getState().userReducer

    dispatch({ type: DELETE_CONTACTS_LOADING })
    try {
        const res = await axios(BASE_URL + "/movie/", {
            method: "delete",
            headers: {
                Authorization:token,
                id:id
            }
        })
        const {status,message} = res.data
        console.log(message)
        if (status === 1) {
            dispatch({ type: DELETE_CONTACTS_SUCCESS })
            dispatch(getContacts())
        }
        else {
            dispatch({ type: DELETE_CONTACTS_ERROR })
        }
    } catch (error) {
        dispatch({ type: DELETE_CONTACTS_ERROR })
    }

}
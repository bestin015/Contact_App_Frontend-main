import { CREATE_CONTACTS_ERROR, CREATE_CONTACTS_LOADING, CREATE_CONTACTS_SUCCESS, DELETE_CONTACTS_ERROR, DELETE_CONTACTS_LOADING, DELETE_CONTACTS_SUCCESS, GET_CONTACTS_ERROR, GET_CONTACTS_LOADING, GET_CONTACTS_SUCCESS, UPDATE_CONTACTS_ERROR, UPDATE_CONTACTS_LOADING, UPDATE_CONTACTS_SUCCESS } from "./contacts.types"

let initialState = {
    loading: false,
    error: false,
    data: []
}

export const movieReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case GET_CONTACTS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case GET_CONTACTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data: payload
            }
        }
        case GET_CONTACTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case CREATE_CONTACTS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case CREATE_CONTACTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data:payload
            }
        }
        case CREATE_CONTACTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case UPDATE_CONTACTS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case UPDATE_CONTACTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data:payload
            }
        }
        case UPDATE_CONTACTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case DELETE_CONTACTS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case DELETE_CONTACTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                data:payload
            }
        }
        case DELETE_CONTACTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        default: {
            return state
        }
    }
}
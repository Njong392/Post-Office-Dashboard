/* eslint-disable react-refresh/only-export-components */
import Cookies from "js-cookie";
import { createContext, useReducer, useEffect } from "react";
import { redirect } from "react-router-dom";

export const UserContext = createContext()

export const authReducer = (state, action) =>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                user: action.payload,
            }
        case "LOGOUT":
            return{
                ...state,
                user: null,
            }
        default:
            return state;
    }
}

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        const user = Cookies.get('user');

        if(user){
            dispatch({type: "LOGIN", payload: JSON.parse(user)})
        } else {
            redirect('/login')
        }
    }, [])

    return(
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;
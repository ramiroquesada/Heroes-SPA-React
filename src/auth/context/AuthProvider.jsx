import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"
import { v4 as uuidv4 } from 'uuid';

const init = () => {
	const user = JSON.parse(localStorage.getItem('user'))
	return {
		logged: !!user,
		user: user,
	}
}

export const AuthProvider = ({children}) => {

	const [authState, dispatch] = useReducer(authReducer, {}, init );

	const login = ( name = '') => { 

		const user = {
			id: uuidv4(),
			name: name,
		}
		
		const action = {
			type: types.login,
			payload: user 
		}

		localStorage.setItem('user', JSON.stringify( user ))

		dispatch(action)
	}


	const logout = () => {
		
		const action = {
			type: types.logout
		}

		localStorage.removeItem('user');

		dispatch(action)
	}

	return (
		<AuthContext.Provider value={{
			...authState,

			//metodos

			login,
			logout,
		}}>
			{children}
		</AuthContext.Provider>
	)
}

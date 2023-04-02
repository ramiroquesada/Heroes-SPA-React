import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context"
import { useForm } from "../../hooks"

export const LoginPage = () => {

	
	const {login} = useContext( AuthContext );

	const {usernameInput, onInputChange} = useForm({
		usernameInput: ''
	})

	const navigate = useNavigate()

	const onLogin = (e) => {

		e.preventDefault();

		if (usernameInput.length > 0){

			const lastPath = localStorage.getItem('lastPath') || '/';

			login( usernameInput );

			navigate(lastPath, {
				replace: true
			})
		}else{
			
			return
		}

		
		

		
	}

	return (
		<>
			<div className="container mt-5">
				<h1>Login</h1>
				<hr />

				<form className="d-flex gap-3"
				onSubmit={onLogin}>
					<input 
						required						
						className="form-control"
						style={{maxWidth: '20rem'}}
						type="text"
						placeholder="Username"
						name="usernameInput"
						value={usernameInput}
						autoComplete="off"
						onChange={onInputChange}
					
					
					/>
					<button className="btn btn-primary ml-3">Login</button>

				</form>

				{

				}

				
			</div>
		</>
	)
}

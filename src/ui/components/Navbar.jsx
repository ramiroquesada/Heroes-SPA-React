import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';


export const Navbar = () => {

	const {user, logout} = useContext( AuthContext)

	const Navigate = useNavigate();

	const onLogout = () => {

		logout();

		Navigate('/login', {
			replace: true
		})
	}

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 mb-3">
          <div className="container-fluid">
						

            <Link 
                className="navbar-brand" 
                to="/"
            >
                HEROES
            </Link>

						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">

                    <li className="nav-item">
											<NavLink
													className="nav-link"
													to="/marvel"
											>
													Marvel
											</NavLink>
										</li>

										

                    <li className="nav-item">
											<NavLink
													className="nav-link"
													to="/dc"
											>
													DC
											</NavLink>
										</li>

										<li className="nav-item">
											<NavLink 
												className="nav-link" 
												to="/search"
											>
												Search
											</NavLink>
										</li>

                </ul>
							

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end gap-3">
                <div className="nav-item">
                    <span className='nav-item nav-link text-secondary user-select-none'>Welcome &nbsp;&nbsp; <span className='text-primary'>{user?.name.toUpperCase()}</span></span>
                </div>
								<button className='nav-item nav-link btn text-white'
								onClick={ onLogout }
								>Log out</button>
            </div>
						</div>
					</div>	
        </nav>
    )
}
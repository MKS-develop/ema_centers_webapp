import Link from 'next/link'
import React from 'react'
import useAuth from '../../../lib/hooks/useAuth'

function Main() {

    const { 
        Login, 
        setUserData, 
        userData 
    } = useAuth()

    return (
        <div className="container">
			<main className="h-100vh row flow-column align-items-center">
				<form className="login-form-container">
					<div className="form-image">
						<img src="../images/logo.png" alt="Logo"/>
					</div>
					<div className="bg-white w-100 text-center rounded p-4">
						<div className="form-group col-lg-12 mb-4">
                            <input type="text" className="form-control" onChange={(e) => setUserData({...userData, email: e.target.value})} placeholder="Email"/>
						</div>
						<div className="form-group col-lg-12 mb-4">
                            <input type="password" className="form-control" onChange={(e) => setUserData({...userData, password: e.target.value})} placeholder="Contraseña"/>
						</div>
						<button onClick={Login} className="btn btn-primary btn-block mb-4">
                            Iniciar sesión
                        </button>
						<Link href="/register" className="color-primary"> ¿No tienes cuenta aún?, regístrate </Link>
					</div>
				</form>
			</main>
		</div>
    )
}

export default Main
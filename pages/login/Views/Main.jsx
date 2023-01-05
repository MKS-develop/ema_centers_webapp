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
		<div className="h-[100vh] w-full flex items-center justify-center">
			<div className="w-[30%] h-full flex flex-col items-start justify-center gap-3 px-[2%]">
				<p className='text-primary text-4xl font-bold'>Iniciar sesión</p>
				<p className='text-slate-900 text-md font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				<Link href="/register" className="text-slate-900 w-full"> ¿No tienes cuenta aún?, <b className='font-bold'>regístrate</b></Link>
			</div>
			<div className="w-[25%] flex flex-col justify-center items-center gap-10 border-l px-[2%]">
				<div className="w-[50%] overflow-hidden relative block">
					<img src="../images/logo.png" alt="Logo" className='w-full h-full object-contain'/>
				</div>
				<div className="relative w-full gap-5 flex flex-col">
					<div className="form-group w-full">
						<p className='input-label'>Email</p>
						<input type="text" className="form-control" onChange={(e) => setUserData({...userData, email: e.target.value})} placeholder="Email"/>
					</div>
					<div className="form-group w-full">
						<p className='input-label'>Contraseña</p>
						<input type="password" className="form-control" onChange={(e) => setUserData({...userData, password: e.target.value})} placeholder="Contraseña"/>
					</div>
				</div>
				<button onClick={Login} className="btn btn-primary w-full">
					Entrar
				</button>
			</div>
		</div>
    )
}

export default Main
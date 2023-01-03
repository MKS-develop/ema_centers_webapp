import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { AuthProvider } from '../../lib/context/AuthProvider'
import Main from './Views/Main'

function Login() {

    return (
		<Layout title={"Iniciar sesión"}>
            <Main/>
        </Layout>
    )

}

export default Login

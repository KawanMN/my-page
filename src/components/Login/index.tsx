import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <h1>
                <Link to={'/Cadastro'}>
                    Login
                </Link>
            </h1>
        </div>
    )
}

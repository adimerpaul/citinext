'use client'
import {useEffect} from "react";

export default function User({ user }) {
    useEffect(() => {
        alert('Hola')
    })
    return (
        <div>
            <h1>User</h1>
            <p>Id: {user.id}</p>
            <p>Nombre: {user.name}</p>
        </div>
    )
}
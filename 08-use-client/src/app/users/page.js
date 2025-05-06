
// 'use client'
import User from "@/components/User";

export default function Page() {
    return (
        <div>
            <h1>Users</h1>
            {/*<button onClick={() => {alert('Hola')}}>*/}
            {/*    Click*/}
            {/*</button>*/}
            <User user={{ id: 1, name: 'Juan' }} />
        </div>
    )
}
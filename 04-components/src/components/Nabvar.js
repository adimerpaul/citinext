import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/users">Usuarios</Link>
                </li>
                <li>
                    <Link href="/about">Acerca de</Link>
                </li>
            </ul>
        </nav>
    )
}
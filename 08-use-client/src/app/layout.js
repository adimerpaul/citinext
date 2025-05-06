import Link from "next/link";

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
            <nav>
                <ul>
                    <li>
                        <Link href={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <Link href={"/users"}>Usuarios</Link>
                    </li>
                </ul>
            </nav>
                {children}
            </body>
        </html>
    )
}
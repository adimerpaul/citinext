import Link from "next/link";

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
            <nav>
                <ul className="flex gap-2">
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
                {children}
            </body>
        </html>
    )
}
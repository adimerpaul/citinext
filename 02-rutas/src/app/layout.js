export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
            <nav>
                <ul className="flex gap-2">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/users">Usuarios</a>
                    </li>
                    <li>
                        <a href="/about">Acerca de</a>
                    </li>
                </ul>
            </nav>
                {children}
            </body>
        </html>
    )
}
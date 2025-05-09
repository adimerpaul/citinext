import Link from "next/link";

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>
                {children}
            </body>
        </html>
    )
}
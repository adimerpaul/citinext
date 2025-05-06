import Link from "next/link";
import Navbar from "@/components/Nabvar";

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
            <Navbar />
                {children}
            </body>
        </html>
    )
}
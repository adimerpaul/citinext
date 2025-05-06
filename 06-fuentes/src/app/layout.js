import {Roboto} from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
})
import { Poppins} from 'next/font/google'
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['800'],
    display: 'swap',
})
export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={poppins.className}>
                {children}
            </body>
        </html>
    )
}
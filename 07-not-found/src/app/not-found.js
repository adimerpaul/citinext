import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Esta página no existe</p>
            <p>
                <Link href="/">Ir a la página principal</Link>
            </p>
        </div>
    )
}
import Link from "next/link";

export default function ProductsLayout({ children }) {
    return (
        <div>
            <h1>Productos</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/products/cpu">CPU</Link>
                    </li>
                    <li>
                        <Link href="/products/laptops">Laptop</Link>
                    </li>
                    <li>
                        <Link href="/products"> Productos</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    )
}
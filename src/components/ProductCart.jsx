'use client';

import { toast } from "sonner";

export default function ProductCard({ product }) {
    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');

        // Verificar si el producto ya está en el carrito
        const exists = cart.some((p) => p.id === product.id);

        if (exists) {
            // alert(`${product.name} ya está en el carrito`);
            toast.success(`${product.name} ya está en el carrito`)
            return;
        }

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        // alert(`${product.name} añadido al carrito`);
        toast.success(`${product.name} añadido al carrito`)
    };

    return (
        <div className="border border-slate-400 p-4">
            <h3>{product.name}</h3>
            <p>Precio: {product.price} €</p>
            <button onClick={addToCart} className="text-green-700">Añadir al carrito</button>
        </div>
    );
}

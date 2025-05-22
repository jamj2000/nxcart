import ProductCard from "./ProductCart";

const products = [
    { id: 1, name: 'Camiseta', price: 25 },
    { id: 2, name: 'Pantalones', price: 50 },
    { id: 3, name: 'Zapatos', price: 75 },
];

export default function ProductList() {
    return (
        <div>
            <h2>Productos disponibles</h2>
            <div className="flex gap-1">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
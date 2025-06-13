import { Product } from '@/types';
import ProductCard from '@/components/ProductCard';

// This function fetches data at build time (SSG)
async function getProducts(): Promise<Product[]> {
  // The revalidate option turns this into ISR (Incremental Static Regeneration)
  // It will refetch the data at most every 3600 seconds (1 hour) in the background.
  const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 3600 } });

  if (!res.ok) {
    // This will be caught by the error page and surfaced to the user.
    throw new Error('Failed to fetch products from the API.');
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10">Explore Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
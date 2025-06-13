import { Product } from '@/types';
import Image from 'next/image';

// This forces the page to be server-side rendered for every request
export const dynamic = 'force-dynamic';

async function getProductDetails(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product details.');
  }
  return res.json();
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductDetails(params.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-500 capitalize mb-4">{product.category}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">${product.price.toFixed(2)}</p>
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-700 mb-8">{product.description}</p>
          
          {/* This is the simple "Add to Cart" button for Module 4.
            Its full functionality (adding to a cart state) will be implemented in Module 5.
          */}
          <button className="bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors w-full md:w-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
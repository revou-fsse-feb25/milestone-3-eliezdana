import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="border rounded-lg p-4 flex flex-col items-center text-center h-full group overflow-hidden">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-md font-semibold flex-grow mb-2">{product.title}</h2>
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
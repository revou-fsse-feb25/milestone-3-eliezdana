import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to RevoShop</h1>
      <Link href="/products">
        <span className="text-xl text-blue-600 hover:underline">
          Browse Products
        </span>
      </Link>
    </main>
  );
}
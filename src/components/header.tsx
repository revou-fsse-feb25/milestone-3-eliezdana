// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">
          <span className="text-xl font-bold">RevoShop</span>
        </Link>
        <div>
          <Link href="/cart">
            <span className="mr-4">Cart</span>
          </Link>
          <Link href="/api/auth/signin">
            <span>Login</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
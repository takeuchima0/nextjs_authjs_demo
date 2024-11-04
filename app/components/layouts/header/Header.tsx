'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <div className="text-2xl font-bold">Company Name</div>

      <nav className="flex-grow">
        <ul className="flex space-x-6 justify-center">
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <div className="ml-4 flex space-x-2">
        {session ? (
          <>
            <span className="self-center">
              こんにちは、{session.user?.name}さん！
            </span>
            <button
              onClick={() => signOut()}
              className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => signIn()}
              className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              SignIn
            </button>
            <a
              href="#sign-up"
              className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition"
            >
              SignUp
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

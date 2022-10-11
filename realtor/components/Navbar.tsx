import Link from 'next/link';
import { FcHome, FcAbout } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-2 flex justify-between items-center border-b-2 border-blue-900">
      <div className="text-3xl text-blue-400 font-bold">
        <Link href="/" className="pl-2">
          Realtor
        </Link>
      </div>

      {/* Start of mobile section */}

      <div className="flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="bg-blue-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      <div className={`${isOpen ? 'nav-menu-dropdown' : 'hidden'}`}>
        <Link href="/">
          <a className="nav-menu-item">
            <FcHome />
            Home
          </a>
        </Link>
        <Link href="/search?purpose=for-sale">
          <a className="nav-menu-item">
            <FcAbout />
            Buy Property
          </a>
        </Link>
        <Link href="/search?purpose=for-rent">
          <a className="nav-menu-item">
            <FiKey />
            Rent Property
          </a>
        </Link>
      </div>

      {/* End of mobile section */}

      <div className="hidden md:flex">
        <Link href="/">
          <a className="nav-menu-item">
            <FcHome />
            Home
          </a>
        </Link>
        <Link href="/search?purpose=for-sale">
          <a className="nav-menu-item">
            <FcAbout />
            Buy Property
          </a>
        </Link>
        <Link href="/search?purpose=for-rent">
          <a className="nav-menu-item">
            <FiKey />
            Rent Property
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

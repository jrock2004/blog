'use client';
import { useState } from 'react';
import NavLink from '@/components/NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen((prev) => !prev);
    }
  };

  const handleMenuClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const mobileMenuClasses = menuOpen
    ? 'absolute top-0 bottom-0 left-0 flex bg-white flex-col w-full pt-20 z-10 dark:bg-layer1 dark:border-r dark:border-r-muted2'
    : 'hidden';

  return (
    <>
      <nav
        className={`${mobileMenuClasses} space-x-1.5 md:relative md:ml-auto md:flex md:flex-row md:bg-transparent md:pt-0 dark:md:border-r-0`}
      >
        <NavLink href="/" onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink href="/blog" onClick={handleLinkClick}>
          Blog
        </NavLink>
        <NavLink href="/what-i-use" onClick={handleLinkClick}>
          What I Use
        </NavLink>
        <button
          className="absolute right-4 top-4 border px-1 py-1 hover:bg-muted3 md:hidden dark:border-muted3"
          onClick={handleMenuClick}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </nav>
      <button className="ml-auto px-1 py-1 hover:bg-muted3 md:hidden" onClick={handleMenuClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </>
  );
}

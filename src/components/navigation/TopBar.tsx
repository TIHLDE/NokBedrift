'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import TihldeLogo from '../miscellaneous/TihldeLogo';
import { BellIcon, MoonIcon, SunIcon } from "lucide-react";

const navigationItems = [
  { id: 'home', text: 'Hjem', to: '/' },
  { id: 'linjene', text: 'Linjene', to: '/linjene' },
  { id: 'kontakt', text: 'Kontakt', to: '/kontakt' },
];

const TopBar: React.FC = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Initialize theme on mount to prevent hydration mismatches
  useEffect(() => {
    setIsMounted(true);

    // Check for saved theme preference or default to system preference
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Update theme when dark mode state changes
  useEffect(() => {
    if (!isMounted) return;

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, isMounted]);

  useEffect(() => {
    const handleScroll = () => setIsOnTop(window.scrollY < 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <header
      className={clsx(
        'fixed z-30 w-full top-0 transition-all duration-150 backdrop-blur-md',
        isOnTop ? 'bg-transparent' : 'bg-background/95 dark:bg-background/60',
      )}
    >
      <nav className="grid grid-cols-3 items-center py-3 px-8 w-full">
        <Link href="/" aria-label="Til forsiden" className="text-logo font-bold text-2xl flex items-center justify-self-start gap-2">
          <TihldeLogo size="large" className="w-44 h-auto" />
        </Link>
        <div className="hidden sm:flex gap-6 justify-self-center">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              href={item.to}
              className={clsx(
                'text-sm font-medium transition-colors text-foreground-secondary hover:text-foreground-primary',
                pathname === item.to
                  ? 'font-bold text-foreground-primary'
                  : '',
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 justify-self-end">
          <button type="button" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {!isMounted ? (
              <div className="h-6 w-6" />
            ) : isDarkMode ? (
              <SunIcon className="h-6 w-6 cursor-pointer text-textSecondary" />
            ) : (
              <MoonIcon className="h-6 w-6 cursor-pointer text-textSecondary" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;

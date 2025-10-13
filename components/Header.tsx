"use client";

import { Menu, Github, Download, Sun, Moon, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/favicon.ico";

export default function Header() {
  const [top, setTop] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const isScrolled = window.scrollY > 10;
      setTop(!isScrolled);
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800"
            : "bg-gradient-to-r from-[#f4274d] to-[#ff0000] dark:bg-gradient-to-r dark:from-gray-900 dark:to-black"
        }`}
      >
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8 lg:py-4"
        >
          {/* Logo */}
          <div className="flex">
            <Link
              href="/"
              className="flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image 
                  src={Logo} 
                  alt="Gyawun Music" 
                  width={32} 
                  height={32} 
                  className="rounded-lg"
                />
              </div>
              <h1
                className={`text-xl font-bold tracking-tight ${
                  scrolled ? "text-gray-900 dark:text-white" : "text-white dark:text-white"
                }`}
              >
                Gyawun Music
              </h1>
            </Link>
          </div>

          {/* Right Side - All actions grouped together */}
          <div className="flex items-center gap-x-6">
            {/* Desktop Navigation - Now on the right side */}
            <div className="hidden md:flex md:gap-x-6 lg:gap-x-8 items-center">
              <Link
                href="/downloads"
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-gray-700 dark:hover:text-gray-200 ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-red-100 hover:text-white dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                <Download size={16} />
                <span>Releases</span>
              </Link>
              <a
                href="https://github.com/jhelumcorp/gyawun.git"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-gray-700 dark:hover:text-gray-200 ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-red-100 hover:text-white dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Sliding Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 flex items-center ${
                scrolled
                  ? darkMode
                    ? "bg-gray-700"
                    : "bg-gray-300"
                  : darkMode
                  ? "bg-gray-600"
                  : "bg-white/30"
              }`}
              aria-label="Toggle theme"
            >
              <div
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center ${
                  darkMode ? "left-8" : "left-1"
                }`}
              >
                {darkMode ? (
                  <Moon size={14} className="text-gray-700" />
                ) : (
                  <Sun size={14} className="text-yellow-500" />
                )}
              </div>
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "hover:bg-white/20 dark:hover:bg-gray-700/30"
                }`}
                aria-label="Open menu"
              >
                <Menu
                  className={
                    scrolled
                      ? "text-gray-700 dark:text-gray-300"
                      : "text-white dark:text-white"
                  }
                  size={24}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "bg-black/50 backdrop-blur-sm"
            : "bg-black/0 backdrop-blur-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {/* Mobile Menu Panel - Slides from left and covers half screen */}
        <div
          className={`fixed left-0 top-0 h-full w-1/2 max-w-sm bg-white dark:bg-black shadow-xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header with Logo and Brand Name */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <Link
              href="/"
              className="flex items-center space-x-2 transition-transform hover:scale-105"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <Image 
                  src={Logo} 
                  alt="Gyawun Music" 
                  width={32} 
                  height={32} 
                  className="rounded-lg"
                />
              </div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                Gyawun Music
              </h1>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="p-4 space-y-4">
            <Link
              href="/downloads"
              className="flex items-center space-x-3 w-full px-4 py-3 text-left rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={20} />
              <span className="font-medium">Releases</span>
            </Link>
            <a
              href="https://github.com/jhelumcorp/gyawun.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 w-full px-4 py-3 text-left rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Github size={20} />
              <span className="font-medium">GitHub</span>
            </a>
          </div>

          {/* Theme Toggle in Mobile Menu */}
          <div className="absolute bottom-6 left-0 right-0 px-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Theme
              </span>
              <button
                onClick={toggleTheme}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 flex items-center ${
                  darkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
                aria-label="Toggle theme"
              >
                <div
                  className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 flex items-center justify-center ${
                    darkMode ? "left-7" : "left-1"
                  }`}
                >
                  {darkMode ? (
                    <Moon size={12} className="text-gray-700" />
                  ) : (
                    <Sun size={12} className="text-yellow-500" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
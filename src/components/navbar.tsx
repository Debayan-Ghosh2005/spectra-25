import { useEffect, useRef, useState } from "react";

import { TiLocationArrow } from "react-icons/ti";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) void audioElementRef.current?.play();
    else audioElementRef.current?.pause();
  }, [isAudioPlaying]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <div className="absolute top-1/2 w-full -translate-y-1/2 bg-gray-900/70 backdrop-blur-lg">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Left Side */}
          <div className="flex items-center gap-7">
            <a href="#hero" className="transition hover:opacity-75">
              <img src="/img/logo.png" alt="Logo" className="w-10" />
            </a>

            <a href="https://docs.google.com/document/d/1eDjQHxayU6pU5dpj8LjurnboHz3x1VSZY_AMYXlhC5I/edit?usp=sharing"><Button
              id="product-button"
              rightIcon={TiLocationArrow}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            >
              Rule Book
            </Button></a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex">
            {NAV_ITEMS.map(({ label, href }) => (
              <a key={href} href={href} className="nav-hover-btn">
                {label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-1 p-2 transition hover:opacity-75"
              title="Play Audio"
            >
              <audio
                ref={audioElementRef}
                src="/audio/loop.mp3"
                className="hidden"
                loop
              />
              {Array(4)
                .fill("")
                .map((_, i) => (
                  <div
                    key={i + 1}
                    className={cn(
                      "indicator-line",
                      isIndicatorActive && "active"
                    )}
                    style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                  />
                ))}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="p-2 transition hover:opacity-75 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="size-5 text-white" />
              ) : (
                <FaChevronDown className="size-5 text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          ref={menuRef}
          className={`transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="flex flex-col items-center space-y-4 bg-gray-900 p-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="nav-hover-btn text-lg text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

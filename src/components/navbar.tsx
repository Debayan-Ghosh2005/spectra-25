import { useEffect, useRef, useState } from "react";

import { TiLocationArrow } from "react-icons/ti";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { NAV_ITEMS } from "@/constants";
// import { cn } from "@/lib/utils";
import { Button } from "./button";
import { FaMusic } from "react-icons/fa";

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
          <div className="flex items-center gap-7">
            <a href="#hero" className="transition hover:opacity-75">
              <img src="/spectra-logo.png" alt="Logo" className="w-10" />
            </a>

            <a href="https://docs.google.com/document/d/1eDjQHxayU6pU5dpj8LjurnboHz3x1VSZY_AMYXlhC5I/edit?usp=sharing">
              <Button
                id="product-button"
                rightIcon={TiLocationArrow}
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              >
                Rule Book
              </Button>
            </a>
          </div>

          <div className="hidden items-center space-x-6 md:flex">
            {NAV_ITEMS.map(({ label, href }) => (
              <a key={href} href={href} className="nav-hover-btn">
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-2 p-2 transition hover:opacity-75"
              title="Play Audio"
            >
              <audio
                ref={audioElementRef}
                src="/audio/loop.mp3"
                className="hidden"
                loop
              />

              {/* Tune Icon */}
              <FaMusic className="size-5 text-white" />

              {/* Animated Indicator Lines (Only show when playing) */}
              {isIndicatorActive && (
                <div className="flex space-x-1">
                  {Array(4)
                    .fill("")
                    .map((_, i) => (
                      <div
                        key={i + 1}
                        className="indicator-line active"
                        style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                      />
                    ))}
                </div>
              )}
            </button>

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

        <div
          ref={menuRef}
          className={`top-13 fixed right-0 h-full w-64 transform p-4 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-10" : "translate-x-full"
          } md:hidden`}
        >
          <nav className="flex flex-col items-center space-y-8 bg-gray-900/70 p-4 backdrop-blur-lg">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="nav-hover-btn w-full py-2 text-center text-lg text-white"
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

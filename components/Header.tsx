"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useSupabase } from "./providers";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { supabase } = useSupabase();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set scrolling state
      setIsScrolling(true);

      // Clear scrolling state after scroll ends
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);

      // Always show header at the top of the page
      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past threshold - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY]);

  useEffect(() => {
    // Check for active session on mount
    const checkSession = async () => {
      const user = await supabase.auth.user();
      setUser(user ?? null);
    };

    checkSession();

    // Listen for auth changes
    console.log("DEBUG: Setting up auth state change listener");
    const authResponse = supabase.auth.onAuthStateChange((event, session) => {
      console.log("DEBUG: Auth state changed:", event, session?.user?.email);
      setUser(session?.user ?? null);
    });

    console.log("DEBUG: Auth response structure:", authResponse);
    console.log("DEBUG: Subscription object:", authResponse.data);
    console.log("DEBUG: Subscription type:", typeof authResponse.data);

    // Handle different Supabase client structures
    let unsubscribe: (() => void) | null = null;

    if (authResponse.data) {
      // Check for nested subscription structure (mock client)
      if (
        authResponse.data.subscription &&
        typeof authResponse.data.subscription.unsubscribe === "function"
      ) {
        unsubscribe = authResponse.data.subscription.unsubscribe;
        console.log("DEBUG: Found nested subscription.unsubscribe");
      }
      // Check for direct unsubscribe method (real client)
      else if (typeof authResponse.data.unsubscribe === "function") {
        unsubscribe = authResponse.data.unsubscribe;
        console.log("DEBUG: Found direct subscription.unsubscribe");
      }
      // Check if data itself is the unsubscribe function (some versions)
      else if (typeof authResponse.data === "function") {
        unsubscribe = authResponse.data;
        console.log("DEBUG: Data itself is the unsubscribe function");
      }
    }

    return () => {
      console.log("DEBUG: Cleaning up auth subscription");
      console.log("DEBUG: Unsubscribe function:", unsubscribe);
      console.log("DEBUG: Unsubscribe type:", typeof unsubscribe);
      if (unsubscribe) {
        if (typeof unsubscribe === "function") {
          unsubscribe();
          console.log("DEBUG: Successfully unsubscribed");
        } else {
          console.log("DEBUG: Unsubscribe is not a function, skipping cleanup");
        }
      } else {
        console.log("DEBUG: No unsubscribe method found, skipping cleanup");
      }
    };
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const headerClassName = `fixed top-0 left-0 right-0 z-50 ${
    isScrolled
      ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700"
      : "bg-slate-900/90 backdrop-blur-sm shadow-sm"
  }`;

  return (
    <header className={headerClassName}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2"
          >
            <MapPin className="h-6 w-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">FaithConnect</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors font-medium flex items-center gap-1">
                Ministries
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/worship"
                  className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors rounded-t-lg"
                >
                  Worship
                </Link>
                <Link
                  href="/youth"
                  className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                >
                  Youth Ministry
                </Link>
                <Link
                  href="/outreach"
                  className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors"
                >
                  Community Outreach
                </Link>
                <Link
                  href="/workshop"
                  className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors rounded-b-lg"
                >
                  Workshops
                </Link>
              </div>
            </div>
            <Link
              href="/events"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Events
            </Link>
            <Link
              href="/connect"
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Connect
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => scrollToSection("stay-connected")}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-950 flex items-center gap-2"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            )}
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              Give
            </Button>
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-950"
            >
              Watch Live
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/about"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <div className="space-y-2">
                <div className="text-gray-300 font-medium py-2">Ministries</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/worship"
                    className="block text-gray-400 hover:text-cyan-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Worship
                  </Link>
                  <Link
                    href="/youth"
                    className="block text-gray-400 hover:text-cyan-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Youth Ministry
                  </Link>
                  <Link
                    href="/outreach"
                    className="block text-gray-400 hover:text-cyan-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Community Outreach
                  </Link>
                  <Link
                    href="/workshop"
                    className="block text-gray-400 hover:text-cyan-400 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Workshops
                  </Link>
                </div>
              </div>

              <Link
                href="/events"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/connect"
                className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connect
              </Link>

              <div className="border-t border-slate-700 pt-4 space-y-3">
                {user ? (
                  <Button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    variant="outline"
                    className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-950 flex items-center justify-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      scrollToSection("stay-connected");
                      setIsMobileMenuOpen(false);
                    }}
                    variant="outline"
                    className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-950 flex items-center justify-center gap-2"
                  >
                    <LogIn className="h-4 w-4" />
                    Login
                  </Button>
                )}
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Give
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-950"
                >
                  Watch Live
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

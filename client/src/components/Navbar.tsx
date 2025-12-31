import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled || isOpen ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100" : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={cn(
              "p-2 rounded-xl transition-colors",
              scrolled || isOpen ? "bg-primary/10 text-primary" : "bg-white/20 text-white"
            )}>
              <Home className="w-6 h-6" />
            </div>
            <span className={cn(
              "font-display font-bold text-xl tracking-tight transition-colors",
              scrolled || isOpen ? "text-foreground" : "text-white"
            )}>
              PrimeEstates
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href 
                    ? "text-primary font-semibold" 
                    : scrolled ? "text-muted-foreground" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button 
                variant={scrolled ? "default" : "secondary"}
                className={cn(
                  "rounded-full px-6 font-semibold shadow-lg hover:shadow-xl transition-all",
                  !scrolled && "bg-white text-primary hover:bg-white/90"
                )}
              >
                Book a Visit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              scrolled || isOpen ? "text-foreground hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  location === link.href
                    ? "bg-primary/5 text-primary"
                    : "text-muted-foreground hover:bg-gray-50 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full rounded-full py-6 text-lg">
                  Book a Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

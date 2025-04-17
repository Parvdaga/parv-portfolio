"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-bold">
            Parv Daga
          </a>

          {isMobile ? (
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          ) : (
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <ModeToggle />
            </nav>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute left-0 right-0 top-16 bg-background shadow-md z-50 py-4 px-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium py-2 transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

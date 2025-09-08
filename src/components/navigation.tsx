import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { LuUser, LuBriefcase, LuMail, LuGraduationCap, LuSquareKanban, LuCpu } from 'react-icons/lu';

const navItems = [
  { name: "About", href: "#about", icon: LuUser },
  { name: "Experience", href: "#experience", icon: LuBriefcase },
  { name: "Education", href: "#education", icon: LuGraduationCap },
  { name: "Projects", href: "#projects", icon: LuSquareKanban },
  { name: "Skills", href: "#skills", icon: LuCpu },
  { name: "Contact", href: "#contact", icon: LuMail },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className={`relative md:fixed md:top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-elegant" 
          : "bg-transparent"
      }`}>
        <div className="hidden md:block container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a 
              href="#" 
              className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Portfolio
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 font-medium ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav (rendered outside the top nav) */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="grid grid-cols-6 h-14 pb-[env(safe-area-inset-bottom)]">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center text-xs transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="mt-1">{item.name}</span>
              </a>
            )
          })}
        </div>
      </div>

      {/* Mobile floating theme toggle */}
      <div className="md:hidden fixed bottom-16 right-4 z-50">
        <ThemeToggle />
      </div>
    </>
  )
}
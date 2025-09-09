import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "FEATURES", href: "#" },
    { label: "ABOUT US", href: "#" },
    { label: "HOW IT WORKS", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-6 h-6 bg-primary rounded-sm"></div>
              <div className="w-6 h-6 bg-primary rounded-sm"></div>
            </div>
            <div className="text-2xl font-bold text-foreground">
              Form<span className="text-primary">FIT</span>
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider ml-2">
              REP. POSTURE. SMART
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button variant="outline" size="lg">
              LOGIN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
import { ArrowRight, Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";

export const Hero = () => {
  // Animation states
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();
  
  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  // Track scroll position to apply sticky header styles
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Function to smoothly scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Initialize animations after component mounts - Set isLoaded to true immediately
  useEffect(() => {
    // Set isLoaded to true immediately to ensure visibility
    setIsLoaded(true);
    
    // Create particle animation
    if (particlesRef.current) {
      const particlesContainer = particlesRef.current;
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position, size and animation delay
        const size = Math.random() * 6 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        particlesContainer.appendChild(particle);
      }
    }
  }, []);
  return (
    <section className="themed-section flex w-full flex-col items-center pt-4 pb-[139px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5 relative overflow-hidden">
      {/* Animated background elements */}
      <div ref={particlesRef} className="particles-container absolute inset-0 pointer-events-none overflow-hidden" />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-[var(--accent-color)] to-transparent opacity-5 blur-3xl animate-float-slow" />
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-l from-[var(--accent-color)] to-transparent opacity-5 blur-3xl animate-float-slow-reverse" />
      
      {/* Sticky header with theme icon */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--main-bg-color)] bg-opacity-95 shadow-lg py-3' : 'bg-transparent py-4'}`}>
        <div className="w-full max-w-[1171px] mx-auto px-5 md:px-10 flex items-center justify-between">
          <div className={`flex items-center gap-[15px] text-2xl text-[var(--text-color)] font-bold whitespace-nowrap leading-none transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-[46px] h-[46px] flex items-center justify-center text-[var(--accent-color)] text-4xl font-extrabold relative overflow-hidden group">
              <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">ST</span>
              <div className="absolute inset-0 bg-[var(--text-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full transform scale-0 group-hover:scale-100" />
            </div>
            
            {/* Theme toggle */}
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleTheme}
                className="ml-2 p-2 text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="transition-transform hover:rotate-45" />
                ) : (
                  <Moon size={20} className="transition-transform hover:-rotate-45" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile menu toggle button */}
          {isMobile && (
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`z-20 text-[var(--text-color)] p-2 transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-[var(--text-color)]" />
              ) : (
                <Menu size={24} className="text-[var(--text-color)]" />
              )}
            </button>
          )}
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className={`flex items-stretch gap-[40px_100px] text-center flex-wrap transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-[var(--text-color)] text-base font-normal leading-8 flex gap-8">
                <button 
                  onClick={() => scrollToSection('about-section')}
                  className="hover:text-[var(--accent-color)] transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent-color)] after:transition-all after:duration-300 hover:after:w-full group"
                >
                  <span className="group-hover:translate-y-[-2px] transition-transform duration-300 inline-block">About me</span>
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio-section')}
                  className="hover:text-[var(--accent-color)] transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent-color)] after:transition-all after:duration-300 hover:after:w-full group"
                >
                  <span className="group-hover:translate-y-[-2px] transition-transform duration-300 inline-block">Portfolio</span>
                </button>
                <button 
                  onClick={() => scrollToSection('capabilities-section')}
                  className="hover:text-[var(--accent-color)] transition-colors cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent-color)] after:transition-all after:duration-300 hover:after:w-full group"
                >
                  <span className="group-hover:translate-y-[-2px] transition-transform duration-300 inline-block">Technical Expertise</span>
                </button>
              </div>
              {/* Updated Contact button with new style */}
              <div className="inline-block relative group">
                <button 
                  onClick={() => scrollToSection('contact-section')}
                  className="text-[var(--text-color)] text-lg font-medium px-8 py-3 border-2 border-[var(--accent-color)] rounded-full inline-block relative z-10 hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </button>
                <div className="absolute -inset-1 bg-[var(--accent-color)] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              </div>
            </nav>
          )}
          
          {/* Mobile Navigation Menu */}
          {isMobile && (
            <div 
              className={`fixed inset-0 bg-[var(--main-bg-color)] bg-opacity-98 z-10 flex flex-col items-center justify-center transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              aria-hidden={!mobileMenuOpen}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <nav className="flex flex-col items-center gap-8 p-6 w-full max-w-sm relative z-20">
                {/* Theme toggle for Mobile */}
                <div className="flex items-center gap-4 mb-4">
                  <button 
                    onClick={toggleTheme}
                    className="p-2 text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors"
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  >
                    {theme === 'dark' ? (
                      <Sun size={20} className="transition-transform hover:rotate-45" />
                    ) : (
                      <Moon size={20} className="transition-transform hover:-rotate-45" />
                    )}
                  </button>
                </div>
                
                {/* Menu items with improved touch targets and visual feedback */}
                <button 
                  onClick={() => {
                    scrollToSection('about-section');
                    setMobileMenuOpen(false);
                  }}
                  className="text-[var(--text-color)] text-xl font-medium hover:text-[var(--accent-color)] transition-colors py-4 px-8 w-full text-center relative overflow-hidden group"
                >
                  <span className="relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300">About me</span>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent-color)] group-hover:w-full transition-all duration-300"></div>
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('portfolio-section');
                    setMobileMenuOpen(false);
                  }}
                  className="text-[var(--text-color)] text-xl font-medium hover:text-[var(--accent-color)] transition-colors py-4 px-8 w-full text-center relative overflow-hidden group"
                >
                  <span className="relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300">Portfolio</span>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent-color)] group-hover:w-full transition-all duration-300"></div>
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('capabilities-section');
                    setMobileMenuOpen(false);
                  }}
                  className="text-[var(--text-color)] text-xl font-medium hover:text-[var(--accent-color)] transition-colors py-4 px-8 w-full text-center relative overflow-hidden group"
                >
                  <span className="relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300">Technical Expertise</span>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--accent-color)] group-hover:w-full transition-all duration-300"></div>
                </button>
                {/* Updated Contact button with new style */}
                <div className="inline-block relative group w-full">
                  <button 
                    onClick={() => {
                      scrollToSection('contact-section');
                      setMobileMenuOpen(false);
                    }}
                    className="text-[var(--text-color)] text-lg font-medium px-8 py-3 border-2 border-[var(--accent-color)] rounded-full inline-block relative z-10 hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-300 cursor-pointer w-full"
                  >
                    Contact
                  </button>
                  <div className="absolute -inset-1 bg-[var(--accent-color)] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                </div>
              </nav>
              
              {/* Visual indicator for animation */}
              <div className={`absolute inset-0 bg-gradient-to-b from-[var(--accent-color)] from-5% to-transparent opacity-0 transition-opacity duration-700 ${mobileMenuOpen ? 'opacity-5' : ''}`}></div>
            </div>
          )}
        </div>
      </header>
      
      {/* Main content container - FIXED THE VISIBILITY CLASSES */}
      <div className="w-full max-w-[1171px] -mb-7 max-md:max-w-full max-md:mb-2.5 relative z-10 pt-20">
        <div className="mt-[122px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[45%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col self-stretch items-stretch text-base font-normal my-auto max-md:max-w-full max-md:mt-10">
                <span className="text-[var(--accent-color)] leading-8 tracking-[3px] uppercase opacity-100">
                  Simone Terranova
                </span>
                <h1 className="text-[var(--text-color)] text-7xl font-extrabold leading-[80px] tracking-[-2px] mt-6 max-md:max-w-full max-md:text-[40px] max-md:leading-[49px] opacity-100">
                  <span className="relative inline-block">
                    <span className="relative z-10">ICT Engineer</span>
                    <div className="absolute -bottom-2 left-0 h-3 w-full bg-[var(--accent-color)] opacity-10 rounded-full transform -skew-x-12"></div>
                  </span>
                </h1>
                <p className="text-[var(--text-color)] leading-8 mr-6 mt-6 max-md:max-w-full max-md:mr-2.5 opacity-100">
                  Smart Solutions Developer
                  <br/>
                  <span className="relative inline-block mt-2">
                    <span>Crafting Intelligent, Efficient, and Scalable Tech for the Future.</span>
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-color)] group-hover:w-full transition-all duration-700"></div>
                  </span>
                </p>
                {/* Updated CTA button with new style */}
                <div className="inline-block relative group mt-[52px] max-md:mt-10 opacity-100">
                  <button 
                    onClick={() => scrollToSection('about-section')}
                    className="text-[var(--text-color)] text-lg font-medium px-8 py-3 border-2 border-[var(--accent-color)] rounded-full inline-block relative z-10 hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2"
                  >
                    <span>See more</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <div className="absolute -inset-1 bg-[var(--accent-color)] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
                </div>
              </div>
            </div>
            <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
              <div className="relative flex items-center justify-center opacity-100">
                {/* Background gradient effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-color)] to-transparent opacity-5 blur-xl animate-pulse-slow"></div>
                  
                {/* Simple image container without button functionality */}
                <div className="relative">
                  <img
                    src="/simo_image.webp"
                    className="aspect-[1.03] object-contain w-[80%] max-w-[500px] mx-auto mt-[-40px] grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-[-20px] relative z-10 hover:scale-[1.02] transition-transform duration-500"
                    alt="Profile photo"
                  />
                </div>
                  
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-2 border-[var(--accent-color)] border-opacity-10 animate-spin-slow"></div>
                <div className="absolute -top-16 -left-6 w-24 h-24 rounded-full border-2 border-[var(--accent-color)] border-opacity-10 animate-spin-slow-reverse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add animation keyframes */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-slow-reverse {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-float-slow-reverse {
          animation: float-slow-reverse 18s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 40s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .particle {
          position: absolute;
          background-color: var(--text-color);
          opacity: 0.1;
          border-radius: 50%;
          animation: float-particle 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
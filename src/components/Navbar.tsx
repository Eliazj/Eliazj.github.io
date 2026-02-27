import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Menú', path: '/menu' },
    { name: 'El Origen', path: '/#origen' },
    { name: 'Contacto', path: '/#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-stone-dark/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img src="/images/Isologo-X.png" alt="Nixta Logo" className="w-10 h-10 object-contain drop-shadow-lg group-hover:brightness-125 transition-all" />
            <span className="font-display font-black text-2xl tracking-[0.2em] text-bone group-hover:text-bronze transition-colors">
              NIXTA
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans font-light text-sm uppercase tracking-[0.15em] hover:text-bronze transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-bronze after:transition-all after:duration-300 hover:after:w-full ${location.pathname === link.path ? 'text-bronze after:w-full' : 'text-bone/80'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              className="btn-bronze text-stone-dark px-6 py-3 font-display font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all duration-300"
            >
              Pedir / WhatsApp
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-bone hover:text-bronze focus:outline-none transition-colors"
            >
              {isOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-dark fixed inset-0 top-24 z-40 overflow-hidden bg-stone-texture"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pb-24">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-display font-bold text-bone hover:text-bronze tracking-widest uppercase transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-12 h-[1px] bg-bone/10 my-8"></div>
              <div className="flex gap-8">
                <a href="https://www.instagram.com/nixtacocinaderaiz/" target="_blank" rel="noopener noreferrer" className="text-bone/60 hover:text-bronze transition-colors"><Instagram size={24} /></a>
                <a href="https://www.facebook.com/Nixtacocinaderaiz" target="_blank" rel="noopener noreferrer" className="text-bone/60 hover:text-bronze transition-colors"><Facebook size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

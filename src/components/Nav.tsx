
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-wsy-blue">WSY?</span>
        </Link>
         <Button asChild variant="youngburg" size="sm" className='hidden md:inline'>
            <a href="https://www.uniwave.in/" target="_blank" rel="noopener noreferrer">
              Youngburg
            </a>
          </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-wsy-blue transition-colors">
            Home
          </Link>
          <Link to="/episode-7" className="font-medium hover:text-wsy-blue transition-colors">
            Episode 7
          </Link>
          <Link to="/query" className="font-medium hover:text-wsy-blue transition-colors">
            Query
          </Link>
          <Link to="/mentor" className="font-medium hover:text-wsy-blue transition-colors">
            Mentor
          </Link>
          <Link to="/sep-1300" className="font-medium hover:text-wsy-blue transition-colors">
            SEP-1300
          </Link>
          <Button asChild variant="secondary" size="sm">
            <a href="https://forms.gle/ZBER68Rp2J3f9jbk8" target="_blank" rel="noopener noreferrer" className="ml-4">
              Submit Query
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden p-4 bg-white border-t">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-medium hover:text-wsy-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/episode-7" 
              className="font-medium hover:text-wsy-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Episode 7
            </Link>
            <Link 
              to="/query" 
              className="font-medium hover:text-wsy-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Query
            </Link>
            <Link 
              to="/mentor" 
              className="font-medium hover:text-wsy-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Mentor
            </Link>
            <Link 
              to="/sep-1300" 
              className="font-medium hover:text-wsy-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              SEP-1300
            </Link>
            <Button 
                asChild 
                variant="secondary" 
                size="sm" 
                className="mt-2"
            >
              <a href="https://forms.gle/ZBER68Rp2J3f9jbk8" target="_blank" rel="noopener noreferrer">Submit Query</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}


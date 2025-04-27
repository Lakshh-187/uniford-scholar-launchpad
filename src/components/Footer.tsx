
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WSY?</h3>
            <p className="text-slate-300">
              Why Should You? is an international standard platform providing solutions 
              for student career queries and educational challenges.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/" className="hover:text-wsy-teal transition-colors">Home</Link></li>
              <li><Link to="/episode-7" className="hover:text-wsy-teal transition-colors">Episode 7</Link></li>
              <li><a href="#" className="hover:text-wsy-teal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-wsy-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
           
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} WSY? All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

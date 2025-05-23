
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <li><Link to="/query" className="hover:text-wsy-teal transition-colors">Query</Link></li>
              <li><Link to="/mentor" className="hover:text-wsy-teal transition-colors">Mentor</Link></li>
              <li><Link to="/careers" className="hover:text-wsy-teal transition-colors">Careers</Link></li> {/* Added Careers link */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-wsy-teal transition-colors">Campus to Corporate</a></li>
              <li><a href="#" className="hover:text-wsy-teal transition-colors">Entrepreneurship</a></li>
              <li><a href="#" className="hover:text-wsy-teal transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-wsy-teal transition-colors">Internships</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-wsy-teal transition-colors">Contact Us</a></li>
              <li><a href="https://forms.gle/ZBER68Rp2J3f9jbk8" target="_blank" rel="noopener noreferrer" className="hover:text-wsy-teal transition-colors">Submit Query</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} WSY? All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white py-20 w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
                <span className="text-2xl font-bold tracking-widest text-white">PUZZLE</span>
                <p className="text-gray-400 text-sm mt-2 font-light">Connecting the pieces of life.</p>
            </div>
            
            <div className="flex space-x-8 mb-8 md:mb-0">
                <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors tracking-wider">Privacy Policy</a>
                <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors tracking-wider">Terms of Service</a>
                <a href="#" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors tracking-wider">Contact</a>
            </div>
        </div>
        <div className="text-center md:text-right mt-16 border-t border-gray-800 pt-8">
            <p className="text-xs text-gray-500 tracking-widest">&copy; 2025 Puzzle Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
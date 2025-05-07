import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 500);
  };

  return (
    <div className="w-full lg:w-64">
      <h3 className="text-white font-semibold mb-3 text-lg">Stay Connected</h3>
      <p className="text-gray-300 text-sm mb-4">
        Subscribe to our newsletter for mission updates and space discoveries
      </p>
      
      {isSubmitted ? (
        <div className="bg-indigo-900 bg-opacity-50 p-3 rounded-lg border border-indigo-500 text-white text-sm animate-pulse">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full p-3 pl-4 pr-12 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700 focus:border-indigo-500 text-white placeholder-gray-400 outline-none transition-all"
            required
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          >
            <Send size={18} className="stroke-current" />
          </button>
        </form>
      )}
      
      <div className="mt-3 text-xs text-gray-400">
        We respect your privacy. Unsubscribe anytime.
      </div>
    </div>
  );
};

export default Newsletter;
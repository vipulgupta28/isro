import HistoryTimeline from './HistoryTimeline';
import { Rocket, Star } from 'lucide-react';
import SpaceParticles from '../Footer/SpaceParticles';
import InfiniteScrollSection from '../launches/InfiniteScrollSection';

const History = () => {
  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <SpaceParticles/>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-15"></div>
        <Star className="absolute top-20 left-16 h-6 w-6 text-yellow-300/50 animate-twinkle" />
        <Star className="absolute top-40 right-20 h-4 w-4 text-yellow-200/40 animate-twinkle-delayed" />
        <Star className="absolute bottom-20 left-1/3 h-5 w-5 text-yellow-400/30 animate-twinkle" />
        <div className="absolute top-10 left-10 md:left-20 animate-float">
          <Rocket className="h-10 w-10 text-blue-400/60 rotate-45" />
        </div>
        <div className="absolute top-5 right-10 md:right-40 animate-float-delayed">
          <Rocket className="h-8 w-8 text-indigo-400/50 rotate-12" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2 mb-6 bg-black/50 text-white rounded-full text-sm font-semibold border border-blue-400/40 backdrop-blur-md">
            <Star className="h-4 w-4 mr-2 text-yellow-300" />
            Pioneering Space Exploration
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-white">
            ISRO's Cosmic Legacy
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            From launching India's first satellite to exploring the Moon and Mars, discover ISRO's journey of innovation and discovery.
          </p>
        </header>
        <HistoryTimeline />

        {/* Decorative divider */}
        <div className="relative py-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-black flex items-center justify-center shadow-xl ring-2 ring-white">
            <Rocket className="h-10 w-10 text-white" />
          </div>
        </div>

        {/* Launches section */}
        <div className="min-h-screen bg-black bg-stars font-space text-white relative">
      <div className="grain" />
      <InfiniteScrollSection  />
    </div>
      </div>

      {/* Global animations */}
      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(12deg); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        @keyframes twinkle-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes orbit {
          0% { transform: translate(0, 0); }
          25% { transform: translate(100%, 0); }
          50% { transform: translate(100%, 100%); }
          75% { transform: translate(0, 100%); }
          100% { transform: translate(0, 0); }
        }

        .animate-float {
          animation: float 7s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 9s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .animate-twinkle {
          animation: twinkle 5s ease-in-out infinite;
        }

        .animate-twinkle-delayed {
          animation: twinkle-delayed 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1.2s ease-out forwards;
        }

        .animate-orbit {
          animation: orbit 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default History;
import HistoryTimeline from './HistoryTimeline';
import { Rocket, Star } from 'lucide-react';

import InfiniteScrollSection from '../launches/InfiniteScrollSection';
import { majorLaunches } from './HistoryData';

const LaunchesSection = () => {
  // Sample data for launch cards
  const launches = [
    {
      id: 1,
      title: 'Chandrayaan-3',
      date: 'July 14, 2023',
      description: 'India’s successful lunar mission, achieving a soft landing on the Moon’s south pole.',
      image: 'https://images.unsplash.com/photo-1608170825938-a8a58c736729?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 2,
      title: 'Mangalyaan',
      date: 'November 5, 2013',
      description: 'India’s first Mars orbiter, making ISRO one of the few agencies to reach Mars.',
      image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce03d7?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 3,
      title: 'Aryabhata',
      date: 'April 19, 1975',
      description: 'India’s first satellite, marking the beginning of ISRO’s space journey.',
      image: 'https://images.unsplash.com/photo-1569173678610-708d544d7d9e?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {launches.map((launch) => (
        <div
          key={launch.id}
          className="relative group bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl p-6 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-fade-in"
        >
          {/* Orbital ring effect */}
          <div className="absolute inset-0 rounded-2xl border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500">
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-2 left-2 animate-orbit"></div>
          </div>
          {/* Card content */}
          <div className="relative z-10">
            <img
              src={launch.image}
              alt={launch.title}
              className="w-full h-56 object-cover rounded-xl mb-5 border border-gray-800/50 group-hover:border-blue-400/30 transition-all duration-300"
            />
            <h3 className="text-2xl font-semibold text-blue-200 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">
              {launch.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 font-medium">{launch.date}</p>
            <p className="text-gray-300 text-base leading-relaxed">{launch.description}</p>
          </div>
          {/* Hover star effect */}
          <Star className="absolute top-4 right-4 h-5 w-5 text-yellow-300/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-twinkle" />
        </div>
      ))}
    </div>
  );
};

const History = () => {
  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background decorative elements */}
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
            ISRO's Cosmic Legacy
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            From launching India's first satellite to exploring the Moon and Mars, discover ISRO's journey of innovation and discovery.
          </p>
        </header>
        <HistoryTimeline />

        {/* Decorative divider */}
        <div className="relative py-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/60 to-indigo-400/60"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center shadow-xl ring-4 ring-blue-500/30">
            <Rocket className="h-10 w-10 text-white" />
          </div>
        </div>

        {/* Launches section */}
        <div className="min-h-screen bg-black bg-stars font-space text-white relative">
      <div className="grain" />
      <InfiniteScrollSection initialLaunches={majorLaunches.slice(0, 3)} />
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
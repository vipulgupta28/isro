
import { Star, Rocket } from 'lucide-react';

const HistoryTimeline = () => {
  // Sample timeline data for ISRO milestones
  const milestones = [
    {
      id: 1,
      year: '1969',
      title: 'ISRO Founded',
      description: 'Indian Space Research Organisation established to advance India’s space capabilities.',
    },
    {
      id: 2,
      year: '1975',
      title: 'Aryabhata Launch',
      description: 'India’s first satellite, Aryabhata, launched, marking the nation’s entry into space exploration.',
    },
    {
      id: 3,
      year: '2008',
      title: 'Chandrayaan-1',
      description: 'India’s first lunar mission, discovering water molecules on the Moon’s surface.',
    },
    {
      id: 4,
      year: '2013',
      title: 'Mangalyaan',
      description: 'India’s Mars Orbiter Mission, making ISRO one of the few to reach Mars orbit.',
    },
    {
      id: 5,
      year: '2023',
      title: 'Chandrayaan-3',
      description: 'Successful lunar soft landing on the Moon’s south pole, a global milestone.',
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto py-12">
      {/* Central timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500/50 to-indigo-500/50 h-full"></div>

      {milestones.map((milestone, index) => (
        <div
          key={milestone.id}
          className={`relative flex items-center mb-16 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          } animate-fade-in`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {/* Timeline node */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg group hover:scale-110 transition-transform duration-300">
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <Star className="h-6 w-6 text-white group-hover:animate-twinkle" />
              {/* Orbiting particle effect */}
              <div className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-orbit-timeline"></div>
            </div>
          </div>

          {/* Content card */}
          <div
            className={`w-5/12 ${
              index % 2 === 0 ? 'mr-8 text-right' : 'ml-8 text-left'
            } group bg-black/70 backdrop-blur-lg border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <h3 className="text-2xl font-bold text-blue-300 mb-2">{milestone.year}</h3>
            <h4 className="text-xl font-semibold text-white mb-3">{milestone.title}</h4>
            <p className="text-gray-300 text-base leading-relaxed">{milestone.description}</p>
            <Rocket className="absolute top-4 right-4 h-5 w-5 text-blue-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Connector line */}
          <div
            className={`hidden md:block absolute w-1/4 h-0.5 bg-blue-500/40 ${
              index % 2 === 0 ? 'right-1/2 mr-6' : 'left-1/2 ml-6'
            }`}
          ></div>
        </div>
      ))}

      {/* Global styles for timeline */}
      <style>{`
        @keyframes orbit-timeline {
          0% { transform: translate(0, 0); }
          25% { transform: translate(20px, 0); }
          50% { transform: translate(20px, 20px); }
          75% { transform: translate(0, 20px); }
          100% { transform: translate(0, 0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }

        .animate-orbit-timeline {
          animation: orbit-timeline 5s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HistoryTimeline;
import React, { useRef, useEffect, useState } from 'react';
import { Award, Clock, Activity } from 'lucide-react';
import { SpaceLaunch } from '../data/data';
import { useInView } from '../hooks/useInView';

interface LaunchCardProps {
  launch: SpaceLaunch;
  animationDelay: number;
  index: number;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch, animationDelay, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.1 });
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const isEven = index % 2 === 0;

  useEffect(() => {
    const img = new Image();
    img.src = launch.image;
    img.onload = () => setImageLoaded(true);
  }, [launch.image]);

  return (
    <div 
      ref={cardRef}
      className={`
        flex-shrink-0 w-[350px] snap-center
        bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transform 
        transition-all duration-700 hover:shadow-2xl hover:bg-white/15
        ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}
        ${isEven ? 'rotate-[0.5deg]' : 'rotate-[-0.5deg]'}
      `}
      style={{ 
        transitionDelay: `${animationDelay}s`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <div 
          ref={imageRef}
          className="absolute inset-0 transform transition-transform duration-700"
        >
          <div 
            className={`
              absolute inset-0 bg-cover bg-center
              transform scale-110 transition-all duration-1000
              ${imageLoaded ? 'opacity-100' : 'opacity-0 blur-md'}
            `}
            style={{ backgroundImage: `url(${launch.image})` }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-indigo-900/95 via-indigo-900/70 to-transparent"
          />
        </div>
        
        <div className="relative h-full p-6 flex flex-col justify-end z-10">
          <div className={`transform transition-all duration-700 delay-100 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-indigo-500 h-1.5 w-10 rounded-full"></span>
              <span className="text-indigo-300 text-sm font-medium uppercase tracking-wider">
                {launch.mission_type}
              </span>
            </div>
            <h3 className="text-white text-xl font-bold">{launch.name}</h3>
            <p className="text-white/90 flex items-center mt-2 text-sm">
              <Clock className="w-4 h-4 mr-2 text-indigo-300" />
              {launch.date}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4 text-white">
        <p className="text-indigo-100 text-sm leading-relaxed line-clamp-3">
          {launch.description}
        </p>

        <div className={`transform transition-all duration-700 delay-200 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          <h4 className="flex items-center text-base font-semibold text-white mb-2">
            <Award className="w-4 h-4 mr-2 text-indigo-300" />
            Key Achievements
          </h4>
          <ul className="space-y-1 pl-6 text-indigo-100 text-sm relative">
            {launch.achievements.slice(0, 3).map((achievement, idx) => (
              <li 
                key={idx} 
                className="relative before:absolute before:content-[''] before:w-1.5 before:h-1.5 before:bg-indigo-400 before:rounded-full before:-left-4 before:top-2"
              >
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className={`transform transition-all duration-700 delay-300 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          <h4 className="flex items-center text-base font-semibold text-white mb-2">
            <Activity className="w-4 h-4 mr-2 text-indigo-300" />
            Mission Statistics
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {launch.statistics.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white/10 rounded-lg p-2 text-center backdrop-blur-sm 
                         hover:bg-white/15 transition-colors duration-300"
              >
                <p className="text-xs text-indigo-200">{stat.label}</p>
                <p className="text-sm font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
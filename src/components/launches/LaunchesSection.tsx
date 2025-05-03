import React from 'react';
import { majorLaunches, SpaceLaunch } from '../history/HistoryData';
import {  Award, Clock, Activity } from 'lucide-react';

const LaunchesSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pioneering Missions
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover ISRO's groundbreaking launches that have defined India's journey in space exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {majorLaunches.map((launch, index) => (
            <LaunchCard 
              key={launch.id} 
              launch={launch} 
              animationDelay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface LaunchCardProps {
  launch: SpaceLaunch;
  animationDelay: number;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch, animationDelay }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg group animate-slide-up opacity-0"
      style={{
        animationDelay: `${animationDelay}s`,
        animationFillMode: 'forwards',
      }}
    >
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img 
          src={launch.image} 
          alt={launch.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-white text-2xl font-bold">{launch.name}</h3>
          <p className="text-white/80 flex items-center mt-2">
            <Clock className="w-4 h-4 mr-2" />
            {launch.date}
          </p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-6">{launch.description}</p>
        
        <div className="mb-6">
          <h4 className="flex items-center text-lg font-semibold mb-3 text-gray-800">
            <Award className="w-5 h-5 mr-2 text-indigo-600" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {launch.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-indigo-600 mr-2">•</span>
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="flex items-center text-lg font-semibold mb-3 text-gray-800">
            <Activity className="w-5 h-5 mr-2 text-indigo-600" />
            Mission Statistics
          </h4>
          <div className="grid grid-cols-3 gap-4">
            {launch.statistics.map((stat, idx) => (
              <div key={idx} className="bg-indigo-50 p-3 rounded-lg text-center">
                <p className="text-xs text-gray-600">{stat.label}</p>
                <p className="text-lg font-semibold text-indigo-800">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchesSection;
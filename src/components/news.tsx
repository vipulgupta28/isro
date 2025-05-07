import React from 'react';
import { Newspaper } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  source: string;
  image: string;
}

const sampleNews: NewsItem[] = [
  {
    id: 1,
    title: "ISRO Successfully Tests Reusable Launch Vehicle",
    description: "A key milestone in ISRO’s effort toward cost-effective space missions, the RLV performed flawlessly during the test.",
    date: "May 4, 2025",
    source: "ISRO HQ",
    image: "/images/rlv-test.jpg"
  },
  {
    id: 2,
    title: "Gaganyaan Crew Module Arrives for Integration",
    description: "India’s human spaceflight mission takes another step forward with the arrival of its crew module at SDSC-SHAR.",
    date: "May 2, 2025",
    source: "Vikram Sarabhai Space Centre",
    image: "/images/gaganyaan.jpg"
  }
];

const News: React.FC = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold tracking-tight mb-2">Latest <span className="text-white">ISRO</span> News</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest breakthroughs and mission updates from the Indian Space Research Organisation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleNews.map(news => (
            <div 
              key={news.id}
              className="bg-white/5 hover:bg-white/10 transition-all rounded-xl shadow-md overflow-hidden backdrop-blur-sm "
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{news.description}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{news.date}</span>
                  <span>{news.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="flex items-center gap-2 border border-white/20 px-5 py-2 rounded-full text-sm text-white hover:bg-white/10 transition">
            <Newspaper className="w-4 h-4" />
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;

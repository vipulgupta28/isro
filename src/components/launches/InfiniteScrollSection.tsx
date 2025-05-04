import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Loader } from 'lucide-react';
import LaunchCard from '../launches/LaunchCard';
import { SpaceLaunch } from '../data/data';
import { fetchLaunches } from '../services/launchService';

interface InfiniteScrollSectionProps {
  initialLaunches?: SpaceLaunch[];
}

const InfiniteScrollSection: React.FC<InfiniteScrollSectionProps> = ({ initialLaunches = [] }) => {
  const [launches, setLaunches] = useState<SpaceLaunch[]>(initialLaunches);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  const loadMoreLaunches = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newLaunches = await fetchLaunches(page);
      if (newLaunches.length === 0) {
        setHasMore(false);
      } else {
        setLaunches(prev => [...prev, ...newLaunches]);
        setPage(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error loading more launches:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore) {
          loadMoreLaunches();
        }
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.1,
        rootMargin: '0px 100px 0px 0px',
      }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [loadMoreLaunches, hasMore]);

  return (
    <section className="bg-black text-white py-20 w-full">
      <div className="w-full px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            <span className="relative inline-block">
              Pioneering Missions
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-white transform scale-x-0 origin-left animate-expand"></span>
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400">
            Discover ISRO's groundbreaking launches that have defined India's journey in space exploration.
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="scroll-container flex overflow-x-auto gap-8 pb-8 -mx-4 px-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {launches.map((launch, index) => (
            <LaunchCard
              key={launch.id}
              launch={launch}
              animationDelay={index % 3 * 0.1}
              index={index}
            />
          ))}

          <div ref={observerRef} className="flex-shrink-0 flex items-center justify-center w-24">
            {loading && (
              <div className="flex flex-col items-center">
                <Loader className="w-8 h-8 text-gray-400 animate-spin" />
              </div>
            )}
          </div>
        </div>

        {!hasMore && launches.length > 0 && (
          <p className="text-center mt-8 text-gray-400">
            You've reached the end of our mission archives
          </p>
        )}
      </div>
    </section>
  );
};

export default InfiniteScrollSection;

import { majorLaunches, additionalLaunches, SpaceLaunch } from '../data/data';

// Simulating a server-side API with pagination
export const fetchLaunches = async (page: number, limit: number = 3): Promise<SpaceLaunch[]> => {
  // Artificial delay to simulate network request
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // For the first page, return initial data
  if (page === 1) {
    return majorLaunches.slice(0, limit);
  }
  
  // For subsequent pages
  const startIndex = (page - 2) * limit + majorLaunches.length;
  
  // Create dynamic launches for infinite scrolling demo
  // In a real application, this would be an API call
  if (startIndex >= majorLaunches.length + additionalLaunches.length) {
    // Generate procedurally more launches when we've exhausted our predefined data
    return generateMoreLaunches(page, limit);
  }
  
  // Return from additional launches when available
  const remainingAdditional = additionalLaunches.slice(
    startIndex - majorLaunches.length, 
    startIndex - majorLaunches.length + limit
  );
  
  return remainingAdditional;
};

// Generate more launches when we've exhausted our predefined data
const generateMoreLaunches = (page: number, limit: number): SpaceLaunch[] => {
  const result: SpaceLaunch[] = [];
  
  // Only generate a few more for demo purposes, then stop
  if (page > 6) return [];
  
  const baseIndex = majorLaunches.length + additionalLaunches.length + (page - 3) * limit;
  
  for (let i = 0; i < limit; i++) {
    const index = baseIndex + i;
    const year = 2025 + Math.floor(index / 3);
    
    result.push({
      id: `future-mission-${index}`,
      name: `Future Mission ${index + 1}`,
      date: `Planned ${year}`,
      mission_type: getRandomMissionType(),
      description: "This future mission represents ISRO's continued commitment to space exploration and technological advancement.",
      image: getRandomSpaceImage(),
      achievements: [
        "Advanced indigenous technology development",
        "International collaboration opportunities",
        "Pushing boundaries of space exploration"
      ],
      statistics: [
        { label: "Est. Budget", value: `₹${(Math.floor(Math.random() * 900) + 100)}Cr` },
        { label: "Duration", value: `${Math.floor(Math.random() * 36) + 12} months` },
        { label: "Status", value: "Planning" }
      ]
    });
  }
  
  return result;
};

const getRandomMissionType = (): string => {
  const types = [
    "Lunar Exploration", 
    "Mars Mission", 
    "Venus Orbiter", 
    "Space Station", 
    "Solar Observatory",
    "Deep Space Probe"
  ];
  return types[Math.floor(Math.random() * types.length)];
};

const getRandomSpaceImage = (): string => {
  const images = [
    "https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg",
    "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg",
    "https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg",
    "https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg",
    "https://images.pexels.com/photos/256332/pexels-photo-256332.jpeg",
    "https://images.pexels.com/photos/355956/pexels-photo-355956.jpeg"
  ];
  return images[Math.floor(Math.random() * images.length)];
};
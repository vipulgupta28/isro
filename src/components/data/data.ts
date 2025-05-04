export interface SpaceLaunch {
    id: string;
    name: string;
    date: string;
    description: string;
    mission_type: string;
    image: string;
    achievements: string[];
    statistics: {
      label: string;
      value: string;
    }[];
  }
  
  // Sample data - this would typically come from an API
  export const majorLaunches: SpaceLaunch[] = [
    {
      id: "aryabhata",
      name: "Aryabhata",
      date: "April 19, 1975",
      mission_type: "Scientific Satellite",
      description: "India's first satellite, named after the great Indian astronomer. It was launched by the Soviet Union from Kapustin Yar using a Cosmos-3M rocket.",
      image: "https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg",
      achievements: [
        "First Indian satellite",
        "Conducted X-ray astronomy, aeronomics, and solar physics",
        "Demonstrated indigenous capability in satellite technology"
      ],
      statistics: [
        { label: "Weight", value: "360 kg" },
        { label: "Orbit", value: "LEO" },
        { label: "Lifetime", value: "4 days" }
      ]
    },
    {
      id: "rohini",
      name: "Rohini RS-1",
      date: "July 18, 1980",
      mission_type: "Experimental Satellite",
      description: "The first satellite to be placed in orbit by an Indian-made launch vehicle, SLV-3. It marked India's entry into the exclusive space club.",
      image: "https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg",
      achievements: [
        "First satellite launched by an Indian launch vehicle",
        "Validated the SLV-3 launch system",
        "Conducted remote sensing experiments"
      ],
      statistics: [
        { label: "Weight", value: "35 kg" },
        { label: "Orbit", value: "LEO" },
        { label: "Lifetime", value: "9 days" }
      ]
    },
    {
      id: "chandrayaan1",
      name: "Chandrayaan-1",
      date: "October 22, 2008",
      mission_type: "Lunar Orbiter",
      description: "India's first lunar probe. It made the significant discovery of water molecules on the lunar surface and operated for 312 days.",
      image: "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg",
      achievements: [
        "First Indian lunar mission",
        "Discovery of water molecules on the Moon",
        "Completed over 3,400 orbits around the Moon",
        "Created a detailed 3D map of the lunar surface"
      ],
      statistics: [
        { label: "Weight", value: "1,380 kg" },
        { label: "Mission", value: "312 days" },
        { label: "Orbits", value: "3,400+" }
      ]
    },
    {
      id: "mangalyaan",
      name: "Mangalyaan (MOM)",
      date: "November 5, 2013",
      mission_type: "Mars Orbiter",
      description: "Mars Orbiter Mission (MOM), also called Mangalyaan, is India's first interplanetary mission and made ISRO the fourth space agency to reach Mars.",
      image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg",
      achievements: [
        "First Asian nation to reach Mars orbit",
        "Most economical Mars mission to date",
        "First Mars mission to succeed on its first attempt",
        "Studied Martian atmosphere and surface features"
      ],
      statistics: [
        { label: "Cost", value: "$73 million" },
        { label: "Journey", value: "300 days" },
        { label: "Mission", value: "7+ years" }
      ]
    },
    {
      id: "chandrayaan2",
      name: "Chandrayaan-2",
      date: "July 22, 2019",
      mission_type: "Lunar Mission",
      description: "India's second lunar exploration mission consisting of an orbiter, lander, and rover. While the lander faced challenges, the orbiter continues to function successfully.",
      image: "https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg",
      achievements: [
        "Most complex mission undertaken by ISRO",
        "Orbiter continues to map lunar surface in unprecedented detail",
        "Developed indigenous cryogenic engine technology",
        "Discovered water ice in permanently shadowed regions"
      ],
      statistics: [
        { label: "Orbiter", value: "2,379 kg" },
        { label: "Instruments", value: "8" },
        { label: "Lifetime", value: "7+ years" }
      ]
    },
    {
      id: "chandrayaan3",
      name: "Chandrayaan-3",
      date: "July 14, 2023",
      mission_type: "Lunar Mission",
      description: "India's third lunar mission and first successful soft landing near the lunar south pole, making India the fourth country to achieve a soft landing on the Moon.",
      image: "https://images.pexels.com/photos/6985347/pexels-photo-6985347.jpeg",
      achievements: [
        "First successful soft landing near lunar south pole",
        "Deployed Pragyan rover to study lunar surface",
        "Confirmed presence of sulfur and other elements",
        "Successfully demonstrated indigenous landing technology"
      ],
      statistics: [
        { label: "Lander", value: "1,752 kg" },
        { label: "Rover", value: "26 kg" },
        { label: "Mission", value: "14 days" }
      ]
    }
  ];
  
  // Additional launches for infinite scroll simulation
  export const additionalLaunches: SpaceLaunch[] = [
    {
      id: "aditya-l1",
      name: "Aditya L1",
      date: "September 2, 2023",
      mission_type: "Solar Observatory",
      description: "India's first space-based solar observatory positioned at the Lagrangian point L1, which provides an uninterrupted view of the Sun.",
      image: "https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg",
      achievements: [
        "First Indian solar mission",
        "Studies coronal heating, solar wind acceleration",
        "Positioned at Lagrangian point L1",
        "Carries seven scientific payloads"
      ],
      statistics: [
        { label: "Weight", value: "1,475 kg" },
        { label: "Distance", value: "1.5M km" },
        { label: "Mission", value: "5 years" }
      ]
    },
    {
      id: "gsat-30",
      name: "GSAT-30",
      date: "January 17, 2020",
      mission_type: "Communication Satellite",
      description: "A high-power communication satellite providing coverage over the Indian subcontinent, replacing the aging INSAT-4A satellite.",
      image: "https://images.pexels.com/photos/821644/pexels-photo-821644.jpeg",
      achievements: [
        "Enhanced DTH television services",
        "Supports VSAT networks and digital news gathering",
        "Provides continuity of services for INSAT-4A",
        "15+ years of operational life"
      ],
      statistics: [
        { label: "Weight", value: "3,357 kg" },
        { label: "Transponders", value: "12 C & 12 Ku" },
        { label: "Position", value: "83° East" }
      ]
    }
  ];
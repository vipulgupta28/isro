import { Rocket, Calendar, Users, Award, Target, Globe, Compass } from 'lucide-react';

export interface HistoricalEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: keyof typeof icons;
  image?: string;
}

export interface SpaceLaunch {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
  achievements: string[];
  statistics: {
    label: string;
    value: string;
  }[];
}

// Icons mapping for type safety
export const icons = {
  Rocket,
  Calendar,
  Users,
  Award,
  Target,
  Globe,
  Compass
};

export const historicalEvents: HistoricalEvent[] = [
  {
    id: 1,
    year: "1962",
    title: "The Beginning",
    description: "The Indian National Committee for Space Research (INCOSPAR) was established by Dr. Vikram Sarabhai.",
    icon: "Calendar",
    image: "https://images.pexels.com/photos/5472259/pexels-photo-5472259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    year: "1969",
    title: "ISRO Formation",
    description: "The Indian Space Research Organisation (ISRO) was formed on August 15, 1969, replacing INCOSPAR.",
    icon: "Users",
    image: "https://images.pexels.com/photos/5255223/pexels-photo-5255223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    year: "1975",
    title: "First Satellite",
    description: "Aryabhata, India's first satellite, was launched on April 19, 1975, from the Soviet Union's Kapustin Yar rocket launch site.",
    icon: "Rocket",
    image: "https://images.pexels.com/photos/5725467/pexels-photo-5725467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    year: "1980",
    title: "Rohini Success",
    description: "India successfully launched Rohini RS-1 into orbit using the SLV-3, becoming the seventh nation to achieve this capability.",
    icon: "Award",
    image: "https://images.pexels.com/photos/5255224/pexels-photo-5255224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    year: "2008",
    title: "Chandrayaan-1",
    description: "ISRO launched Chandrayaan-1, India's first lunar probe, which operated until August 2009.",
    icon: "Target",
    image: "https://images.pexels.com/photos/6156400/pexels-photo-6156400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    year: "2014",
    title: "Mars Orbiter Mission",
    description: "Mangalyaan, India's first interplanetary mission, successfully entered Mars orbit, making India the first nation to succeed on its first attempt.",
    icon: "Globe",
    image: "https://images.pexels.com/photos/7657144/pexels-photo-7657144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 7,
    year: "2019",
    title: "Chandrayaan-2",
    description: "Chandrayaan-2 was launched with an orbiter, lander (Vikram), and rover (Pragyan) to study the lunar surface.",
    icon: "Compass",
    image: "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 8,
    year: "2023",
    title: "Chandrayaan-3",
    description: "Chandrayaan-3 successfully landed on the Moon's south pole region, making India the fourth country to achieve a soft landing on the Moon.",
    icon: "Award",
    image: "https://images.pexels.com/photos/8474724/pexels-photo-8474724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const majorLaunches: SpaceLaunch[] = [
  {
    id: 1,
    name: "PSLV-C37",
    date: "February 15, 2017",
    description: "Record-breaking launch deploying 104 satellites in a single mission, the highest number of satellites launched by a single rocket.",
    image: "https://images.pexels.com/photos/34521/space-shuttle-lift-off-liftoff-nasa.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    achievements: [
      "Deployed 104 satellites in single mission",
      "Set world record for most satellites launched at once",
      "Demonstrated precise orbital insertion capabilities"
    ],
    statistics: [
      { label: "Satellites", value: "104" },
      { label: "Duration", value: "16 min" },
      { label: "Altitude", value: "505 km" }
    ]
  },
  {
    id: 2,
    name: "Mars Orbiter Mission (MOM)",
    date: "November 5, 2013",
    description: "India's first interplanetary mission, making ISRO the fourth space agency to reach Mars orbit and the first to do so on its maiden attempt.",
    image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    achievements: [
      "First Asian nation to reach Mars orbit",
      "Most economical Mars mission in history",
      "Successfully operated for 7+ years"
    ],
    statistics: [
      { label: "Cost", value: "$74M" },
      { label: "Distance", value: "660M km" },
      { label: "Duration", value: "300 days" }
    ]
  },
  {
    id: 3,
    name: "Chandrayaan-3",
    date: "July 14, 2023",
    description: "India's third lunar mission that successfully achieved a soft landing on the Moon's south polar region, making India the fourth country to achieve a lunar landing.",
    image: "https://images.pexels.com/photos/5726748/pexels-photo-5726748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    achievements: [
      "First soft landing on lunar south pole region",
      "Successful deployment of Pragyan rover",
      "Confirmed presence of water molecules"
    ],
    statistics: [
      { label: "Landing", value: "Aug 23, 2023" },
      { label: "Mission", value: "14 days" },
      { label: "Experiments", value: "6" }
    ]
  },
  {
    id: 4,
    name: "RLV-TD",
    date: "May 23, 2016",
    description: "Technology demonstration of India's first Reusable Launch Vehicle, a significant step towards developing a fully reusable two-stage-to-orbit (TSTO) launch vehicle.",
    image: "https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    achievements: [
      "Successful hypersonic flight experiment",
      "Demonstrated autonomous navigation capability",
      "Achieved precise landing on virtual runway"
    ],
    statistics: [
      { label: "Altitude", value: "65 km" },
      { label: "Speed", value: "Mach 5" },
      { label: "Flight Time", value: "770 sec" }
    ]
  }
];
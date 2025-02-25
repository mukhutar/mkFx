import {
  mobile,
  backend,
  creator,
  web,
 
  carrent,
  jobit,
  tripguide,

  clock,
  crown,
  eduction,
  schedule,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "FundedNext",
    icon: web,
    link: "https://drive.google.com/uc?export=view&id=1jhtbrMJal1mqYoEzNnsDcech9VNL_BwO",
  },
  {
    title: "FTMO",
    icon: mobile,
    link: "https://drive.google.com/uc?export=view&id=1jhtbrMJal1mqYoEzNnsDcech9VNL_BwO",
  },
  {
    title: "Goat Funded Trader",
    icon: backend,
    link: "https://drive.google.com/uc?export=view&id=1jhtbrMJal1mqYoEzNnsDcech9VNL_BwO",
  },
  {
    title: "Funding Pip",
    icon: creator,
    link: "https://drive.google.com/uc?export=view&id=1jhtbrMJal1mqYoEzNnsDcech9VNL_BwO",
  },
];



const experiences = [
  {
    title: "One Month Plan",
    icon: clock,
    iconBg: "#383E56",
    date: "Cost: $30",
    points: [
      "Access to daily forex signals for major currency pairs.",
      "Risk management guidance for each trade.",
      "Support via Telegram for trade clarifications.",
      "Weekly market analysis reports.",
    ],
  },
  {
    title: "Three Months Plan",
    icon: schedule,
    iconBg: "#E6DEDD",
    date: "Cost: $70 (Save $30)",
    points: [
      "All benefits from the One Month Plan.",
      "Premium signals with higher accuracy.",
      "Access to a members-only trading community.",
      "Bi-weekly live Q&A sessions on market trends.",
    ],
  },
  {
    title: "VIP Lifetime Plan",
    icon: crown,
    iconBg: "#383E56",
    date: "Cost: $250 (One-time Payment)",
    points: [
      "Lifetime access to all premium signals and updates.",
      "Direct mentorship via private chat and calls.",
      "Advanced trading strategy courses.",
      "Full access to all trading tools and EAs.",
    ],
  },
  {
    title: "One-on-One Mentorship (Coming Soon)",
    icon: eduction,
    iconBg: "#E6DEDD",
    date: "Launching Soon",
    points: [
      "Personalized forex training sessions.",
      "Live market analysis and trading support.",
      "Customized trading strategies for your style.",
      "Exclusive access to in-depth risk management coaching.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services,  experiences, testimonials, projects };

import {
  mobile,
  backend,
  creator,
  web,
  payout,

  clock,
  crown,
  eduction,
  schedule,
  broker1 ,
  broker2,
  broker3 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Archivments",
  },
  {
    id: "work",
    title: "Plans",
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

const brokers = [
  {
    name: "XM",
    description:
      "A globally recognized forex broker offering tight spreads, fast execution, and multiple account types suited for all traders.",
    referral_link: "https://www.xmglobal.com/referral?token=C3ISTO6TFLCw72foG2S5YA",
    image: broker1, // Replace with actual path or URL
  },
  {
    name: "Justmarkets",
    description:
      "A reliable forex broker with competitive spreads, multiple trading instruments, and excellent trading conditions for indices and forex pairs.",
    referral_link: "https://one.justmarkets.link/a/sfjf205szt",
    image: broker2,
  },
  {
    name: "Deriv",
    description:
      "A trusted broker for trading synthetic indices, forex, and commodities, known for its innovative trading platforms and flexible leverage options.",
    referral_link: "https://one.exnesstrack.org/a/ocfxwi83hc",
    image: broker3,
  },
];


const projects = [
  {
    name: "fundednext",
    description:
      "A reflection of hard work, smart decisions, and the power of perseverance. The market rewards those who stay committed, and this is just the beginning!🚀💰",

    image: payout,
  },
  {
    name: "ftmo",
    description:
      "This payout isn't just about the numbers—it's about the dedication, strategy, and resilience behind it. A well-earned milestone and a stepping stone to even greater success",
    
    image: payout,
  },
  {
    name: "funding pips",
    description:
      "every trade executed, and every lesson learned has led to this reward. A true testament to patience, discipline, and consistency. The journey continues!🤑💰.",

    image: payout,
  },
];

export { services,  experiences, brokers, projects };

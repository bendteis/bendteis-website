export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Fotografie & Video",
    description:
      "Authentieke beelden met een filmische, analoge look. Shot on Fujifilm X100VI. Van streetfotografie tot portret, van productshots tot korte video's.",
    features: [
      "Portretfotografie",
      "Streetfotografie",
      "Productfotografie",
      "Korte video's & reels",
      "Foto- & video-editing",
    ],
  },
  {
    id: 2,
    title: "Marketing",
    description:
      "Van strategie tot uitvoering. Social media, content creatie en campagnes die resultaat opleveren voor jouw merk.",
    features: [
      "Social media strategie & management",
      "Content creatie & planning",
      "Campagne opzet & optimalisatie",
      "Merk positionering",
    ],
  },
  {
    id: 3,
    title: "AI Automation",
    description:
      "Slimmer werken. Ik automatiseer repetitieve taken en bouw AI-workflows die je tijd en geld besparen.",
    features: [
      "Workflow automatisering",
      "AI-tools implementatie",
      "Chatbots & assistenten",
      "Data-analyse & rapportage",
    ],
  },
];

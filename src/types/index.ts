export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  benefit: string;
  features: string[];
  businessImpact: string;
}

export interface ProblemSolution {
  id: string;
  problem: string;
  detail: string;
  solution: string;
  benefitBadge: string;
  icon: string;
}

export interface WorkStep {
  step: string;
  title: string;
  description: string;
  subPoints: string[];
  icon: string;
}

export interface UseCase {
  sector: string;
  icon: string;
  headline: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtext: string;
  options: {
    text: string;
    points: {
      automation: number;
      centralization: number;
      data: number;
      ai: number;
    };
  }[];
}

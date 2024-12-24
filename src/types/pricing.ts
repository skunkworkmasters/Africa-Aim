export interface Feature {
  name: string;
  description?: string;
}

export interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: Feature[];
  highlighted?: boolean;
  cta: string;
}
import { ShoppingBag, HeartPulse, Sprout, Factory, GraduationCap, Landmark, Truck, Briefcase, Rocket, type LucideIcon } from 'lucide-react'

export interface Industry {
  title: string
  icon: LucideIcon
  text: string
}

export const industries: Industry[] = [
  { title: 'Retail & E-commerce', icon: ShoppingBag, text: 'POS, inventory, online storefronts and customer insight for shops and online sellers.' },
  { title: 'Healthcare', icon: HeartPulse, text: 'Scheduling, records workflows and operational tools that reduce administrative load.' },
  { title: 'Agriculture & Farming', icon: Sprout, text: 'Farm records, supply tracking and data tools for producers and agribusiness.' },
  { title: 'Manufacturing', icon: Factory, text: 'Production tracking, stock control and process automation for the factory floor.' },
  { title: 'Education', icon: GraduationCap, text: 'Learning platforms, administration systems and student-facing applications.' },
  { title: 'Financial Services', icon: Landmark, text: 'Secure back-office systems, reporting and workflow automation.' },
  { title: 'Logistics & Transportation', icon: Truck, text: 'Fleet, delivery and shipment visibility with route and status tracking.' },
  { title: 'Professional Services', icon: Briefcase, text: 'Client management, project tracking and billing workflows for service firms.' },
  { title: 'Startups & Enterprises', icon: Rocket, text: 'MVPs for founders and scalable systems for established organisations.' },
]

import { Target, Eye, ShieldCheck, Lightbulb, Handshake, Gauge, Search, PenTool, Hammer, FlaskConical, Rocket, LifeBuoy, type LucideIcon } from 'lucide-react'

export interface Item {
  title: string
  text: string
  icon: LucideIcon
}

export const process: (Item & { step: string })[] = [
  { step: '01', title: 'Discover', icon: Search, text: 'We learn your business, goals and constraints, then define the problem worth solving.' },
  { step: '02', title: 'Design', icon: PenTool, text: 'Architecture, user experience and a clear scope and roadmap you can approve.' },
  { step: '03', title: 'Build', icon: Hammer, text: 'Iterative development with regular demos so you see real progress early.' },
  { step: '04', title: 'Test', icon: FlaskConical, text: 'Automated and manual testing for quality, security and performance.' },
  { step: '05', title: 'Launch', icon: Rocket, text: 'Careful deployment, hand-over and training so go-live is smooth.' },
  { step: '06', title: 'Support', icon: LifeBuoy, text: 'Monitoring, maintenance and continuous improvement after release.' },
]

export const whyUs: Item[] = [
  { title: 'Engineering-first', icon: Gauge, text: 'Clean architecture, tested code and technology choices made for the long term.' },
  { title: 'Business-minded', icon: Target, text: 'We start with the outcome you need, not the technology we prefer.' },
  { title: 'Transparent', icon: Handshake, text: 'Clear scope, honest estimates and regular communication throughout.' },
  { title: 'Secure by design', icon: ShieldCheck, text: 'Security and data protection are built in from the first line of code.' },
]

export const values: Item[] = [
  { title: 'Excellence', icon: Gauge, text: 'We hold our work to a high technical and design standard.' },
  { title: 'Integrity', icon: ShieldCheck, text: 'We are honest about what we can deliver and what it will take.' },
  { title: 'Innovation', icon: Lightbulb, text: 'We adopt new technology where it creates real, measurable value.' },
  { title: 'Partnership', icon: Handshake, text: 'We succeed when our clients succeed, so we work as one team.' },
]

export const mission: Item = {
  title: 'Our Mission',
  icon: Target,
  text: 'To help businesses work smarter, move faster and grow further by engineering intelligent, reliable and accessible software.',
}
export const vision: Item = {
  title: 'Our Vision',
  icon: Eye,
  text: 'To become an internationally recognised technology company known for engineering excellence and products that create real business impact.',
}

export const expertise = [
  'Software Engineering',
  'Artificial Intelligence',
  'Business Automation',
  'SaaS & Digital Products',
  'Web & Mobile Apps',
  'ERP & Management Systems',
  'Digital Transformation',
]

export const insightTopics = [
  { title: 'Artificial Intelligence', text: 'Practical AI for business: what works, what does not, and how to start.' },
  { title: 'Software Engineering', text: 'Architecture, quality and engineering practices for lasting software.' },
  { title: 'Business Automation', text: 'Finding and removing manual bottlenecks in everyday operations.' },
  { title: 'SaaS', text: 'Building, launching and scaling subscription software products.' },
  { title: 'Digital Transformation', text: 'Modernising how organisations operate with technology.' },
  { title: 'Technology Trends', text: 'Signals worth paying attention to, without the hype.' },
]

export const projectCategories = [
  'Software Development',
  'AI & Automation',
  'SaaS Platforms',
  'Web Applications',
  'Mobile Applications',
  'Business Management Systems',
]

export const budgets = ['Not sure yet', 'Under $5,000', '$5,000 – $15,000', '$15,000 – $50,000', '$50,000+']

import { Code2, BrainCircuit, Workflow, Globe, Smartphone, Layers, Building2, Plug, type LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  icon: LucideIcon
  short: string
  description: string
  problems: string[]
  capabilities: string[]
  benefits: string[]
}

export const services: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    icon: Code2,
    short: 'Purpose-built software designed around how your business actually works.',
    description:
      'We design and engineer bespoke software that fits your processes instead of forcing you to adapt to generic tools. From internal platforms to customer-facing systems, we build for reliability and long-term maintainability.',
    problems: [
      'Off-the-shelf tools that do not fit your workflow',
      'Legacy systems that are slow, fragile or hard to change',
      'Disconnected spreadsheets and manual processes',
    ],
    capabilities: [
      'Requirements analysis and solution architecture',
      'Scalable back-end and database design',
      'Modernisation of legacy applications',
      'Automated testing and code quality practices',
    ],
    benefits: ['Software that matches your operations', 'Full ownership of your technology', 'A foundation that scales as you grow'],
  },
  {
    id: 'ai-solutions',
    title: 'AI & Intelligent Solutions',
    icon: BrainCircuit,
    short: 'Practical AI that turns your data into decisions and repetitive work into automation.',
    description:
      'We apply modern machine learning and large language models to real business problems, focusing on solutions that are measurable, secure and genuinely useful rather than experimental.',
    problems: [
      'Large volumes of data with little insight',
      'Time lost to repetitive knowledge work',
      'Unclear where AI can create real value',
    ],
    capabilities: [
      'AI assistants and chat interfaces for your own data',
      'Document processing and information extraction',
      'Forecasting, classification and recommendation models',
      'AI feature integration into existing products',
    ],
    benefits: ['Faster, better-informed decisions', 'Reduced manual effort', 'A clear path from idea to working AI feature'],
  },
  {
    id: 'automation',
    title: 'Business Process Automation',
    icon: Workflow,
    short: 'Replace manual, error-prone tasks with reliable automated workflows.',
    description:
      'We map your existing processes, find the bottlenecks, and automate approvals, data entry, reporting and notifications so your team can focus on higher-value work.',
    problems: [
      'Repetitive manual data entry',
      'Slow approvals and hand-offs between teams',
      'Inconsistent reporting and human error',
    ],
    capabilities: [
      'Workflow design and automation',
      'Automated reporting and alerts',
      'Integration between your existing tools',
      'Custom dashboards for operational visibility',
    ],
    benefits: ['Lower operating cost', 'Fewer errors', 'Faster turnaround on everyday tasks'],
  },
  {
    id: 'web-apps',
    title: 'Web Application Development',
    icon: Globe,
    short: 'Fast, secure and responsive web applications built on modern technology.',
    description:
      'We build web platforms, portals and dashboards with a strong focus on performance, security and user experience, using proven modern frameworks.',
    problems: [
      'Slow or outdated web systems',
      'Poor usability that frustrates users',
      'Need for a secure customer or partner portal',
    ],
    capabilities: [
      'Responsive single-page and multi-page applications',
      'Authentication, roles and permissions',
      'Admin dashboards and data visualisation',
      'Performance and accessibility optimisation',
    ],
    benefits: ['Great experience on any device', 'Secure by design', 'Easy to extend and maintain'],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Application Development',
    icon: Smartphone,
    short: 'Mobile apps for Android and iOS that people enjoy using.',
    description:
      'We deliver mobile experiences that are intuitive, reliable and connected to your back-end systems, from field-service tools to customer apps.',
    problems: [
      'Staff or customers needing access on the go',
      'Existing apps that are unreliable or dated',
      'Need to reach both Android and iOS users',
    ],
    capabilities: [
      'Cross-platform app development',
      'Offline-capable and sync-aware design',
      'Push notifications and device features',
      'Back-end API development',
    ],
    benefits: ['One product across platforms', 'Faster time to market', 'Consistent, polished user experience'],
  },
  {
    id: 'saas',
    title: 'SaaS Product Development',
    icon: Layers,
    short: 'From MVP to scalable subscription product, engineered for growth.',
    description:
      'We help founders and businesses turn an idea into a production-ready SaaS product, including multi-tenant architecture, billing readiness and a roadmap for iteration.',
    problems: [
      'Unsure how to move from idea to MVP',
      'Architecture that will not scale with users',
      'Need for subscription, roles and tenant management',
    ],
    capabilities: [
      'MVP scoping and product strategy',
      'Multi-tenant architecture',
      'Subscription and access control design',
      'Cloud infrastructure and monitoring',
    ],
    benefits: ['Launch with a solid foundation', 'Scale without rewrites', 'Technology that supports your business model'],
  },
  {
    id: 'erp',
    title: 'ERP & Business Management Systems',
    icon: Building2,
    short: 'Unified systems for inventory, sales, finance and operations.',
    description:
      'We build management systems that bring your operations together in one place, giving owners and managers real-time visibility and control.',
    problems: [
      'Data scattered across tools and paper',
      'No real-time view of stock, sales or cash',
      'Difficulty tracking customers and suppliers',
    ],
    capabilities: [
      'Inventory, sales and purchasing modules',
      'Customer and supplier management',
      'Financial tracking and reporting',
      'Role-based access and audit trails',
    ],
    benefits: ['One source of truth', 'Better control of stock and cash', 'Decisions backed by live data'],
  },
  {
    id: 'integration',
    title: 'API & System Integration',
    icon: Plug,
    short: 'Connect your systems so data flows without manual effort.',
    description:
      'We design and build APIs and integrations that link your software, third-party services and data sources into a coherent, reliable whole.',
    problems: [
      'Systems that do not talk to each other',
      'Duplicate data entry across platforms',
      'Brittle point-to-point connections',
    ],
    capabilities: [
      'REST and webhook API design',
      'Third-party service integration',
      'Data synchronisation and migration',
      'Monitoring and error handling',
    ],
    benefits: ['Consistent data everywhere', 'Less manual work', 'A more resilient technology landscape'],
  },
]

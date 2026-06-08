export interface Capability {
  title: string
  description: string
  icon: string
}

export interface TechCategory {
  label: string
  items: string[]
}

export interface WorkHighlight {
  title: string
  role: string
  period: string
  description: string
  tags: string[]
}

export interface Metric {
  value: string
  label: string
}

export interface Experience {
  company: string
  role: string
  period: string
  highlights: string[]
}

export interface Profile {
  name: string
  title: string
  tagline: string
  location: string
  email: string
  phone: string
  linkedin: string
  github: string
  cvUrl: string
  summary: string
  metrics: Metric[]
  valueProps: Capability[]
  capabilities: Capability[]
  techStack: TechCategory[]
  workHighlights: WorkHighlight[]
  experience: Experience[]
}

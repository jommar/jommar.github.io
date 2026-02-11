export interface Stat {
  label: string
  value: string
  detail: string
}

export interface ExperienceItem {
  period: string
  role: string
  org: string
  impact: string
  tags: string[]
}

export interface Project {
  name: string
  description: string
  tech: string[]
  repo: string
  url?: string
  highlights: string[]
  status: 'in-progress' | 'shipped'
}

export interface AiWorkflowItem {
  title: string
  summary: string
  points: string[]
}

export interface StackGroup {
  label: string
  items: string[]
}

export interface ContactLink {
  label: string
  href: string
  icon: string
  caption: string
}

export interface Profile {
  name: string
  title: string
  summary: string
  availability: string
  focusAreas: string[]
  stats: Stat[]
  experiences: ExperienceItem[]
  projects: Project[]
  activity: string[]
  aiWorkflow: AiWorkflowItem[]
  stack: StackGroup[]
  strengths: string[]
  lookingFor: string
  contact: ContactLink[]
  socials: ContactLink[]
}

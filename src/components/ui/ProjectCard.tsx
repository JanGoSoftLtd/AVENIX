import { ArrowUpRight } from 'lucide-react'
import { LogoMark } from './Logo'
import type { Project } from '@/data/projects'

function Thumbnail({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        width={640}
        height={400}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    )
  }
  // Branded placeholder until a real screenshot is supplied.
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-indigo-deep" aria-hidden="true">
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet/40 blur-2xl" />
      <LogoMark className="relative h-14 w-14 transition-transform duration-500 group-hover:scale-110" />
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-lavender hover:shadow-xl hover:shadow-violet/10">
      <div className="aspect-[16/10] overflow-hidden"><Thumbnail project={project} /></div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="w-fit rounded-full bg-violet/10 px-3 py-1 text-xs font-semibold text-violet-dark">{project.category}</span>
        <h3 className="mt-3 text-lg font-semibold leading-snug">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description ?? 'Project details will be published here once verified.'}
        </p>
        {project.tags && project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => <li key={t} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-navy/80">{t}</li>)}
          </ul>
        )}
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-dark hover:underline">
            View Project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only"> ({project.name}, opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  )
}

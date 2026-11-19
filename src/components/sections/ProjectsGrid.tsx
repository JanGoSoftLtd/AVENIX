import { Reveal } from '@/components/ui/Reveal'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export function ProjectsGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <li key={p.id}>
          <Reveal delay={(i % 3) * 0.1} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        </li>
      ))}
    </ul>
  )
}

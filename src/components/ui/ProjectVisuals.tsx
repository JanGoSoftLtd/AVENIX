import type { ReactNode } from 'react'
import type { VisualKind } from '@/data/projects'

/**
 * Original AVENIX concept illustrations, drawn with plain markup (no raster images, no third-party art).
 * They are generic UI concepts, NOT screenshots of the actual projects, and carry no data.
 */

const bar = 'rounded bg-white/15'
const acc = 'rounded bg-violet'
const lav = 'rounded bg-lavender/60'

function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-white/10 bg-white/[0.07] p-2.5 ${className}`}>{children}</div>
}

function Factory() {
  const h = [40, 62, 48, 78, 56, 90, 70]
  return (
    <div className="grid h-full grid-cols-5 gap-2">
      <Panel className="col-span-3 flex flex-col">
        <div className={`h-1.5 w-1/3 ${bar}`} />
        <div className="mt-2 flex flex-1 items-end gap-1.5">
          {h.map((v, i) => <span key={i} style={{ height: `${v}%` }} className={`flex-1 rounded-t ${i === 5 ? 'bg-violet' : 'bg-lavender/50'}`} />)}
        </div>
      </Panel>
      <div className="col-span-2 flex flex-col gap-2">
        <Panel className="flex-1"><div className={`h-1.5 w-1/2 ${bar}`} /><div className={`mt-2 h-3 w-2/3 ${acc}`} /></Panel>
        <Panel className="flex-1 space-y-1.5">{[90, 70, 80].map((w, i) => <div key={i} style={{ width: `${w}%` }} className={`h-1.5 ${i === 0 ? lav : bar}`} />)}</Panel>
      </div>
    </div>
  )
}

function Mobile() {
  return (
    <div className="flex h-full items-center justify-center gap-4">
      <div className="h-[88%] w-[34%] rounded-2xl border-2 border-white/30 bg-indigo-deep p-2">
        <div className={`mx-auto h-1 w-1/3 ${bar}`} />
        <div className="mt-2 h-[38%] rounded-lg bg-violet/70" />
        <div className="mt-2 space-y-1.5">{[100, 80, 90, 60].map((w, i) => <div key={i} style={{ width: `${w}%` }} className={`h-1.5 ${bar}`} />)}</div>
      </div>
      <div className="hidden h-[70%] w-[28%] rounded-2xl border-2 border-white/20 bg-indigo-deep/80 p-2 min-[420px]:block">
        <div className="space-y-2 pt-3">{[0, 1, 2].map((i) => <div key={i} className="flex gap-1.5"><span className={`h-5 w-5 shrink-0 ${lav}`} /><span className="flex-1 space-y-1"><i className={`block h-1 ${bar}`} /><i className={`block h-1 w-2/3 ${bar}`} /></span></div>)}</div>
      </div>
    </div>
  )
}

function Catalog() {
  return (
    <div className="grid h-full grid-cols-4 gap-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <Panel key={i} className="flex flex-col gap-1.5 !p-2">
          <div className={`flex-1 ${i % 3 === 0 ? 'bg-violet/60' : 'bg-lavender/35'} rounded`} />
          <div className={`h-1 ${bar}`} />
          <div className={`h-1 w-1/2 ${bar}`} />
        </Panel>
      ))}
    </div>
  )
}

function Shop() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="h-4 flex-1 rounded-full bg-white/15" />
        <div className="h-4 w-4 rounded bg-violet" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Panel key={i} className="flex flex-col gap-1.5 !p-2">
            <div className={`flex-1 rounded ${i === 1 ? 'bg-violet/60' : 'bg-lavender/35'}`} />
            <div className={`h-1 ${bar}`} />
            <div className="flex items-center justify-between"><i className={`h-1.5 w-1/3 ${lav}`} /><i className="h-3 w-3 rounded-full bg-violet" /></div>
          </Panel>
        ))}
      </div>
    </div>
  )
}

function Profile() {
  return (
    <div className="grid h-full grid-cols-5 gap-3">
      <Panel className="col-span-2 flex flex-col items-center justify-center gap-2">
        <div className="h-10 w-10 rounded-full bg-lavender/60" />
        <div className={`h-1.5 w-2/3 ${bar}`} />
        <div className={`h-1 w-1/2 ${bar}`} />
        <div className="mt-1 h-3 w-2/3 rounded bg-violet" />
      </Panel>
      <div className="col-span-3 flex flex-col gap-2">
        <Panel className="space-y-1.5"><div className={`h-1.5 w-1/3 ${lav}`} />{[100, 90, 70].map((w, i) => <div key={i} style={{ width: `${w}%` }} className={`h-1 ${bar}`} />)}</Panel>
        <Panel className="flex-1 space-y-1.5"><div className={`h-1.5 w-1/4 ${lav}`} />{[95, 80].map((w, i) => <div key={i} style={{ width: `${w}%` }} className={`h-1 ${bar}`} />)}</Panel>
      </div>
    </div>
  )
}

function Erp() {
  return (
    <div className="flex h-full gap-2">
      <div className="flex w-[14%] flex-col gap-1.5 rounded-lg bg-white/[0.07] p-1.5">
        {[0, 1, 2, 3, 4].map((i) => <span key={i} className={`h-3 rounded ${i === 1 ? 'bg-violet' : 'bg-white/15'}`} />)}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">{[0, 1, 2].map((i) => <Panel key={i} className="!p-2"><div className={`h-1 w-1/2 ${bar}`} /><div className={`mt-1.5 h-2.5 ${i === 0 ? 'w-3/4 bg-violet' : 'w-1/2 bg-lavender/60'} rounded`} /></Panel>)}</div>
        <Panel className="flex flex-1 items-end gap-1.5">
          {[30, 45, 38, 60, 52, 75, 64, 85].map((v, i) => <span key={i} style={{ height: `${v}%` }} className={`flex-1 rounded-t ${i === 7 ? 'bg-violet' : 'bg-lavender/45'}`} />)}
        </Panel>
      </div>
    </div>
  )
}

function Workflow() {
  const node = 'h-9 w-9 rounded-lg border border-white/20 bg-white/10'
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      <div className="flex items-center justify-between">
        <div className={`${node} !bg-violet`} /><i className="h-px flex-1 bg-white/30" /><div className={node} /><i className="h-px flex-1 bg-white/30" /><div className={`${node} !bg-lavender/60`} />
      </div>
      <div className="flex items-center justify-between pl-[18%] pr-[18%]">
        <div className={node} /><i className="h-px flex-1 bg-white/30" /><div className={`${node} !bg-violet`} />
      </div>
      <div className="flex gap-2">{[0, 1, 2].map((i) => <Panel key={i} className="flex-1 !p-2"><div className={`h-1 ${i === 1 ? lav : bar}`} /></Panel>)}</div>
    </div>
  )
}

const map: Record<VisualKind, () => ReactNode> = { factory: Factory, mobile: Mobile, catalog: Catalog, shop: Shop, profile: Profile, erp: Erp, workflow: Workflow }

export function ProjectVisual({ kind }: { kind: VisualKind }) {
  const Scene = map[kind]
  return (
    <div className="relative h-full w-full overflow-hidden bg-indigo-deep" aria-hidden="true">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet/35 blur-3xl" />
      <div className="relative h-full p-4 sm:p-5">
        <Scene />
      </div>
    </div>
  )
}

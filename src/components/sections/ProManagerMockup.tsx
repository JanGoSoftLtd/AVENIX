/**
 * Illustrative interface concept for ProManager, built in CSS.
 * Intentionally contains no figures, names or data: it is not a real screenshot.
 */
export function ProManagerMockup({ className = '' }: { className?: string }) {
  const bars = [38, 55, 42, 70, 58, 82, 66]
  return (
    <figure className={className}>
      <div
        role="img"
        aria-label="Illustrative concept of the ProManager dashboard showing a sidebar, summary cards, a sales chart and a list"
        className="overflow-hidden rounded-xl border border-line bg-white shadow-2xl shadow-indigo-deep/20"
      >
        <div className="flex items-center gap-1.5 border-b border-line bg-surface px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-lavender/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-lavender/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-lavender/25" />
          <span className="ml-3 text-[11px] font-medium text-muted">ProManager</span>
        </div>
        <div className="flex">
          <div className="hidden w-14 shrink-0 flex-col items-center gap-3 bg-indigo-deep py-4 sm:flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`h-6 w-6 rounded-md ${i === 0 ? 'bg-violet' : 'bg-white/15'}`} />
            ))}
          </div>
          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="grid grid-cols-3 gap-3">
              {['Sales', 'Stock', 'Expenses'].map((l, i) => (
                <div key={l} className="rounded-lg border border-line p-3">
                  <p className="text-[10px] font-medium uppercase tracking-wide text-muted">{l}</p>
                  <div className={`mt-2 h-3 rounded ${i === 0 ? 'w-3/4 bg-violet' : 'w-1/2 bg-lavender/60'}`} />
                </div>
              ))}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-5">
              <div className="rounded-lg border border-line p-3 sm:col-span-3">
                <p className="text-[10px] font-medium uppercase tracking-wide text-muted">Sales overview</p>
                <div className="mt-3 flex h-24 items-end gap-2">
                  {bars.map((h, i) => (
                    <span key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t ${i === 5 ? 'bg-violet' : 'bg-lavender/50'}`} />
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-line p-3 sm:col-span-2">
                <p className="text-[10px] font-medium uppercase tracking-wide text-muted">Recent activity</p>
                <div className="mt-3 space-y-2.5">
                  {[80, 65, 72, 50].map((w, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="h-4 w-4 shrink-0 rounded-full bg-lavender/40" />
                      <span style={{ width: `${w}%` }} className="h-2 rounded bg-line" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">Illustrative interface concept — not a product screenshot.</figcaption>
    </figure>
  )
}

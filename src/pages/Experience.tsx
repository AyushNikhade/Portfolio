import { useState } from 'react'
import LOSArchitectureFlow from '../components/los-experience/architecture/LOSArchitectureFlow'
import IntegrationModal from '../components/los-experience/ui/IntegrationModal'

export default function Experience() {
  const [inspectingNodeId, setInspectingNodeId] = useState<string | null>(null)

  return (
    <section
      id="experience"
      className="relative flex w-full flex-col items-center overflow-x-clip border-b border-[var(--pattern)] bg-[#f5f5f0] pb-16 pt-12 text-black transition-colors duration-300 [--pattern:var(--color-neutral-300)] dark:bg-[#0a0a0a] dark:text-white dark:[--pattern:rgba(255,255,255,0.08)] md:pb-24 md:pt-16"
    >
      {/* Decorative vertical bounds */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-full max-w-7xl -translate-x-1/2 md:block">
        <div className="absolute left-0 top-0 h-full border-l border-[var(--pattern)]" />
        <div className="absolute right-0 top-0 h-full border-l border-[var(--pattern)]" />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl min-w-0 flex-col items-center px-0 sm:px-6 md:px-8 gap-8 sm:gap-10 md:gap-12">
        {/* Header: SDE Intern (6 Months) & Full-Time SDE (6 Months) at UPTIQ */}
        <div className="w-[calc(100%-2rem)] sm:w-full flex flex-col items-start md:items-center gap-1.5 text-left md:text-center">
          <h2 className="text-3xl md:text-[40px] font-mono font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 uppercase select-none">
            EXPERIENCE
          </h2>
          <h3 className="font-sans text-xl sm:text-2xl font-black uppercase tracking-tight text-emerald-700 dark:text-emerald-400">
            UPTIQ.AI
          </h3>
          <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            SDE Intern (6 Months) &amp; Full-Time SDE (6 Months) // 2026
          </div>
          <div className="mt-1 flex items-center justify-start md:justify-center gap-2 font-mono text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400">
            <span className="text-neutral-500 dark:text-neutral-500">Projects worked on:</span>
            <span className="font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-100/80 dark:bg-cyan-950/40 border border-cyan-400/50 dark:border-cyan-500/30 px-2.5 py-0.5 rounded shadow-xs">
              Agentic LOS
            </span>
          </div>
        </div>

        {/* 2D Architecture Canvas with + / - Zoom Controls (Mobile-framed with 16px spacing, centered) */}
        <div className="w-[calc(100%-2rem)] sm:w-full max-w-5xl mx-auto border-2 border-neutral-300 dark:border-neutral-600 rounded-[10px] overflow-hidden bg-white dark:bg-[#070b14] shadow-lg dark:shadow-2xl">
          <div className="flex items-center justify-between px-3.5 py-2.5 border-b-2 border-neutral-300 dark:border-neutral-600 bg-neutral-100/90 dark:bg-[#090d18] text-[10px] font-mono">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              <span className="font-bold text-neutral-900 dark:text-white uppercase tracking-wider text-[10px] sm:text-[11px]">
                LOAN ORIGINATION SYSTEM (LOS) ARCHITECTURE
              </span>
            </div>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-500/15 dark:bg-emerald-500/10 border border-emerald-500/30 dark:border-emerald-500/20 px-2 py-0.5 rounded text-[9px]">
              502 Commits
            </span>
          </div>

          <LOSArchitectureFlow onSelectNode={(id) => setInspectingNodeId(id)} />
        </div>
      </div>

      {/* Integration Detail Modal */}
      <IntegrationModal
        nodeId={inspectingNodeId}
        onClose={() => setInspectingNodeId(null)}
      />
    </section>
  )
}

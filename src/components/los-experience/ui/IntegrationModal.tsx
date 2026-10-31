import { X, CheckCircle2, Shield, Terminal, ArrowRight } from 'lucide-react'
import { INTEGRATIONS_REGISTRY } from '../data/integrations'

interface IntegrationModalProps {
  nodeId: string | null
  onClose: () => void
}

export default function IntegrationModal({ nodeId, onClose }: IntegrationModalProps) {
  if (!nodeId) return null

  const spec = INTEGRATIONS_REGISTRY[nodeId] || {
    id: nodeId,
    name: nodeId.toUpperCase(),
    provider: 'UPTIQ Loan Origination System',
    category: 'Core Service',
    logo: '',
    accentColor: '#10b981',
    capabilities: [
      'FastAPI Backend Architecture',
      'PostgreSQL Row-Level Security',
      'Typed API Schema Contracts',
      'Vendor Registry & Capability Routing',
    ],
    role: 'Central workflow engine managing application state, step gating, and telemetry consolidation.',
    spec: 'FastAPI • PostgreSQL • Redis • Python 3.12',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 dark:bg-black/75 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative flex flex-col w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#0c111e] text-neutral-900 dark:text-white shadow-2xl font-mono text-xs max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/90 dark:bg-[#090d18] px-4 py-3 sm:px-5 sm:py-3.5">
          <div className="flex items-center gap-3">
            {spec.logo ? (
              <img src={spec.logo} alt={spec.name} className="h-6 w-6 object-contain rounded-xs" />
            ) : (
              <div
                className="flex h-7 w-7 items-center justify-center rounded-lg font-bold text-xs"
                style={{ backgroundColor: `${spec.accentColor}25`, color: spec.accentColor }}
              >
                {spec.name.slice(0, 2).toUpperCase()}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-neutral-900 dark:text-white">{spec.name}</span>
                <span
                  className="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase"
                  style={{ backgroundColor: `${spec.accentColor}20`, color: spec.accentColor }}
                >
                  {spec.category}
                </span>
              </div>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-400">{spec.provider}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-3.5 sm:p-5 space-y-3 sm:space-y-4 max-h-[75vh] overflow-y-auto">
          <div>
            <span className="text-[9px] text-neutral-500 dark:text-neutral-400 uppercase tracking-widest block mb-1">
              SYSTEM INTEGRATION ROLE
            </span>
            <p className="font-sans text-xs text-neutral-700 dark:text-neutral-200 leading-relaxed">
              {spec.role}
            </p>
          </div>

          <div>
            <span className="text-[9px] text-neutral-500 dark:text-neutral-400 uppercase tracking-widest block mb-2">
              DELIVERED CAPABILITIES & INTERFACES (AYUSH)
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {spec.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2 rounded-lg border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-[#111726] text-neutral-700 dark:text-neutral-300 text-[11px]"
                >
                  <CheckCircle2 className="h-3 w-3 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/90 dark:bg-[#070b14] space-y-1">
            <div className="flex items-center justify-between text-[10px] text-neutral-500 dark:text-neutral-400 pb-1 border-b border-neutral-200 dark:border-neutral-800/80">
              <span className="flex items-center gap-1">
                <Terminal className="h-3 w-3" /> Specification
              </span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                <Shield className="h-3 w-3" /> VERIFIED VENDOR
              </span>
            </div>
            <p className="text-[10px] text-cyan-700 dark:text-cyan-300/90 pt-1 font-mono">{spec.spec}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 bg-neutral-100/90 dark:bg-[#090d18] px-4 py-2.5 sm:px-5 sm:py-3">
          <span className="text-[10px] text-neutral-500 dark:text-neutral-400">
            UPTIQ.ai • Loan Origination System
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1 px-3 py-1 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-800 dark:hover:bg-neutral-700 text-[11px] font-bold transition-colors cursor-pointer"
          >
            <span>Close</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  )
}

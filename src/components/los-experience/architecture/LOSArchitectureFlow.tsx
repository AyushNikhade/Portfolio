import { useMemo } from 'react'
import {
  ReactFlow,
  Background,
  useReactFlow,
  ReactFlowProvider,
  type Node,
  type Edge,
  MarkerType,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { useTheme } from '../../../context/ThemeContext'

interface LOSArchitectureFlowProps {
  onSelectNode: (nodeId: string) => void
}

// Custom minimal Zoom In (+) and Zoom Out (-) Buttons
function CustomZoomControls() {
  const { zoomIn, zoomOut } = useReactFlow()

  return (
    <div className="absolute bottom-2.5 right-2.5 z-20 flex flex-col gap-1 select-none font-mono">
      <button
        type="button"
        onClick={() => zoomIn({ duration: 250 })}
        className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/95 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-cyan-500 shadow-md text-sm font-bold transition-all active:scale-95 cursor-pointer backdrop-blur-sm"
        title="Zoom In"
        aria-label="Zoom in"
      >
        +
      </button>
      <button
        type="button"
        onClick={() => zoomOut({ duration: 250 })}
        className="flex h-7 w-7 items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/95 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-cyan-500 shadow-md text-sm font-bold transition-all active:scale-95 cursor-pointer backdrop-blur-sm"
        title="Zoom Out"
        aria-label="Zoom out"
      >
        −
      </button>
    </div>
  )
}

function FlowGraph({ onSelectNode }: LOSArchitectureFlowProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  const nodes: Node[] = useMemo(
    () => [
      // Left Column (Borrower Entry & Intake Sources)
      {
        id: 'borrower',
        position: { x: 20, y: 25 },
        data: {
          label: (
            <div
              onClick={() => onSelectNode('borrower')}
              className="p-2.5 text-left font-mono select-none cursor-pointer"
            >
              <div className="flex items-center justify-between text-[8px] text-blue-600 dark:text-blue-400 font-bold mb-0.5">
                <span>INTAKE PORTAL</span>
                <span>JWT AUTH</span>
              </div>
              <div className="font-bold text-xs text-neutral-900 dark:text-white">Borrower Entry</div>
              <div className="text-[9px] text-neutral-600 dark:text-neutral-400 mt-0.5">
                Alex Vance • Meridian Tech Labs
              </div>
            </div>
          ),
        },
        style: {
          background: isDark ? '#0d1527' : '#ffffff',
          border: isDark ? '1px solid #3b82f6' : '1.5px solid #2563eb',
          borderRadius: '10px',
          width: 210,
          boxShadow: isDark ? 'none' : '0 2px 8px rgba(37, 99, 235, 0.08)',
        },
      },
      {
        id: 'intake_methods',
        position: { x: 20, y: 155 },
        data: {
          label: (
            <div className="p-2.5 text-left font-mono select-none space-y-1">
              <span className="text-[8px] text-cyan-600 dark:text-cyan-400 font-bold block mb-0.5">
                INTAKE & PREFILL SOURCES
              </span>
              <div
                onClick={() => onSelectNode('plaid')}
                className="flex items-center gap-1.5 text-[10px] text-neutral-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 cursor-pointer"
              >
                <img src="/los-logos/plaid.png" alt="Plaid" className="h-3 w-3 object-contain" />
                <span>Plaid (Bank Link OTP)</span>
              </div>
              <div
                onClick={() => onSelectNode('finicity')}
                className="flex items-center gap-1.5 text-[10px] text-neutral-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 cursor-pointer"
              >
                <img src="/los-logos/finicity.png" alt="Finicity" className="h-3 w-3 object-contain" />
                <span>Finicity Payroll VOIE</span>
              </div>
              <div
                onClick={() => onSelectNode('ocr')}
                className="flex items-center gap-1.5 text-[10px] text-neutral-800 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 cursor-pointer"
              >
                <img src="/los-logos/doc-upload.png" alt="Doc OCR" className="h-3 w-3 object-contain" />
                <span>Doc OCR Byte Scanning</span>
              </div>
            </div>
          ),
        },
        style: {
          background: isDark ? '#09101d' : '#ffffff',
          border: isDark ? '1px solid #1e293b' : '1.5px solid #0891b2',
          borderRadius: '10px',
          width: 210,
          boxShadow: isDark ? 'none' : '0 2px 8px rgba(8, 145, 178, 0.08)',
        },
      },
      {
        id: 'coborrower',
        position: { x: 20, y: 310 },
        data: {
          label: (
            <div
              onClick={() => onSelectNode('coborrower')}
              className="p-2.5 text-left font-mono select-none cursor-pointer"
            >
              <div className="text-[8px] text-purple-600 dark:text-purple-400 font-bold mb-0.5">
                MULTI-PARTY RELATIONAL GRAPH
              </div>
              <div className="font-bold text-xs text-neutral-900 dark:text-white">Co-Borrowers & Guarantors</div>
              <div className="text-[9px] text-neutral-600 dark:text-neutral-400 mt-0.5">
                Jordan Vance (25%) • Apex Holdings (20%)
              </div>
            </div>
          ),
        },
        style: {
          background: isDark ? '#150f24' : '#ffffff',
          border: isDark ? '1px solid #8b5cf6' : '1.5px solid #7c3aed',
          borderRadius: '10px',
          width: 210,
          boxShadow: isDark ? 'none' : '0 2px 8px rgba(124, 58, 237, 0.08)',
        },
      },

      // Middle Column (Central Backend & Underwriting Core)
      {
        id: 'core',
        position: { x: 265, y: 100 },
        data: {
          label: (
            <div
              onClick={() => onSelectNode('core')}
              className="p-3 text-left font-mono select-none cursor-pointer"
            >
              <div className="flex items-center justify-between text-[8px] text-emerald-600 dark:text-emerald-400 font-bold mb-0.5">
                <span>FASTAPI BACKEND</span>
                <span>234 COMMITS</span>
              </div>
              <div className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-white">Central LOS Engine</div>
              <p className="text-[9px] text-neutral-700 dark:text-neutral-300 mt-0.5">
                Vendor Registry • Capability Routing • Webhook HMAC
              </p>
              <div className="mt-1.5 text-[8px] text-emerald-600 dark:text-emerald-400 font-bold">
                POSTGRESQL ROW-LEVEL SECURITY
              </div>
            </div>
          ),
        },
        style: {
          background: isDark ? '#081717' : '#f0fdf4',
          border: isDark ? '1.5px solid #10b981' : '2px solid #059669',
          borderRadius: '12px',
          width: 250,
          boxShadow: isDark ? '0 0 20px rgba(16, 185, 129, 0.15)' : '0 4px 14px rgba(5, 150, 105, 0.12)',
        },
      },
      {
        id: 'underwriting',
        position: { x: 265, y: 285 },
        data: {
          label: (
            <div
              onClick={() => onSelectNode('underwriting')}
              className="p-3 text-left font-mono select-none cursor-pointer"
            >
              <div className="flex items-center justify-between text-[8px] text-amber-600 dark:text-amber-400 font-bold mb-0.5">
                <span>UNDERWRITING ENGINE</span>
                <span>DECISION &lt; 200MS</span>
              </div>
              <div className="font-bold text-xs text-neutral-900 dark:text-white">
                DTI 30.0% • Net Worth $785k
              </div>
              <div className="text-[9px] text-emerald-600 dark:text-emerald-400 mt-0.5 font-bold">
                PRIME TIER 1 APPROVAL
              </div>
            </div>
          ),
        },
        style: {
          background: isDark ? '#1a1309' : '#fffbeb',
          border: isDark ? '1px solid #f59e0b' : '2px solid #d97706',
          borderRadius: '12px',
          width: 250,
          boxShadow: isDark ? 'none' : '0 4px 14px rgba(217, 119, 6, 0.12)',
        },
      },

      // Right Column (External Verifications & Back-Office)
      {
        id: 'sumsub',
        position: { x: 550, y: 15 },
        data: {
          label: (
            <div
              onClick={() => onSelectNode('sumsub')}
              className="p-2 text-left font-mono select-none flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <img src="/los-logos/sumsub.png" alt="Sumsub" className="h-3.5 w-3.5 object-contain" />
                <div>
                  <div className="font-bold text-[11px] text-neutral-900 dark:text-white">Sumsub</div>
                  <div className="text-[8px] text-neutral-600 dark:text-neutral-400">3D Face & AML</div>
                </div>
              </div>
              <span className="text-[8px] text-cyan-600 dark:text-cyan-400 font-bold">KYC</span>
            </div>
          ),
        },
        style: {
          background: isDark ? '#0a1622' : '#ffffff',
          border: isDark ? '1px solid #06b6d4' : '1.5px solid #0891b2',
          borderRadius: '8px',
          width: 210,
          boxShadow: isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.05)',
        },
      },
      {
        id: 'middesk',
        position: { x: 550, y: 85 },
        data: {
          label: (
            <div
              onClick={() => onSelectNode('middesk')}
              className="p-2 text-left font-mono select-none flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <img src="/los-logos/middesk.png" alt="Middesk" className="h-3.5 w-3.5 object-contain" />
                <div>
                  <div className="font-bold text-[11px] text-neutral-900 dark:text-white">Middesk KYB</div>
                  <div className="text-[8px] text-neutral-600 dark:text-neutral-400">SOS Good Standing</div>
                </div>
              </div>
              <span className="text-[8px] text-emerald-600 dark:text-emerald-400 font-bold">KYB</span>
            </div>
          ),
        },
        style: {
          background: isDark ? '#0a1a16' : '#ffffff',
          border: isDark ? '1px solid #10b981' : '1.5px solid #059669',
          borderRadius: '8px',
          width: 210,
          boxShadow: isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.05)',
        },
      },
      {
        id: 'crs_credit',
        position: { x: 550, y: 155 },
        data: {
          label: (
            <div
              onClick={() => onSelectNode('crs_credit')}
              className="p-2 text-left font-mono select-none cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] text-neutral-900 dark:text-white">CRS Tri-Bureau</span>
                <span className="text-[8px] text-pink-600 dark:text-pink-400 font-bold">764 FICO</span>
              </div>
              <div className="text-[8px] text-neutral-600 dark:text-neutral-400">
                Credit Pull & PDF Logs
              </div>
            </div>
          ),
        },
        style: {
          background: isDark ? '#190d19' : '#ffffff',
          border: isDark ? '1px solid #ec4899' : '1.5px solid #db2777',
          borderRadius: '8px',
          width: 210,
          boxShadow: isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.05)',
        },
      },
      {
        id: 'jdpower',
        position: { x: 550, y: 225 },
        data: {
          label: (
            <div
              onClick={() => onSelectNode('jdpower')}
              className="p-2 text-left font-mono select-none cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] text-neutral-900 dark:text-white">J.D. Power Chrome</span>
                <span className="text-[8px] text-purple-600 dark:text-purple-400 font-bold">LTV 72%</span>
              </div>
              <div className="text-[8px] text-neutral-600 dark:text-neutral-400">
                Clean Wholesale: $58.2k
              </div>
            </div>
          ),
        },
        style: {
          background: isDark ? '#140e24' : '#ffffff',
          border: isDark ? '1px solid #8b5cf6' : '1.5px solid #7c3aed',
          borderRadius: '8px',
          width: 210,
          boxShadow: isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.05)',
        },
      },
      {
        id: 'census',
        position: { x: 550, y: 295 },
        data: {
          label: (
            <div
              onClick={() => onSelectNode('census')}
              className="p-2 text-left font-mono select-none cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] text-neutral-900 dark:text-white">US Census Bureau</span>
                <span className="text-[8px] text-indigo-600 dark:text-indigo-400 font-bold">TRACT 0214</span>
              </div>
              <div className="text-[8px] text-neutral-600 dark:text-neutral-400">
                Micropolitan Geocoding
              </div>
            </div>
          ),
        },
        style: {
          background: isDark ? '#0d1024' : '#ffffff',
          border: isDark ? '1px solid #6366f1' : '1.5px solid #4f46e5',
          borderRadius: '8px',
          width: 210,
          boxShadow: isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.05)',
        },
      },
      {
        id: 'backoffice',
        position: { x: 550, y: 365 },
        data: {
          label: (
            <div
              onClick={() => onSelectNode('backoffice')}
              className="p-2 text-left font-mono select-none cursor-pointer"
            >
              <div className="text-[8px] text-emerald-600 dark:text-emerald-400 font-bold mb-0.5">
                LENDER BACK-OFFICE
              </div>
              <div className="font-bold text-[11px] text-neutral-900 dark:text-white">Offer Studio & Merge Queue</div>
              <div className="text-[8px] text-neutral-600 dark:text-neutral-400">
                $42,000 Facility @ 6.45% APR
              </div>
            </div>
          ),
        },
        style: {
          background: isDark ? '#091612' : '#ffffff',
          border: isDark ? '1px solid #10b981' : '1.5px solid #059669',
          borderRadius: '8px',
          width: 210,
          boxShadow: isDark ? 'none' : '0 2px 6px rgba(0,0,0,0.05)',
        },
      },
    ],
    [onSelectNode, isDark]
  )

  const edges: Edge[] = useMemo(
    () => [
      {
        id: 'e-borrower-core',
        source: 'borrower',
        target: 'core',
        animated: true,
        style: { stroke: isDark ? '#3b82f6' : '#2563eb', strokeWidth: 1.5 },
        markerEnd: { type: MarkerType.ArrowClosed, color: isDark ? '#3b82f6' : '#2563eb' },
      },
      {
        id: 'e-intake-core',
        source: 'intake_methods',
        target: 'core',
        animated: true,
        style: { stroke: isDark ? '#06b6d4' : '#0891b2', strokeWidth: 1.5 },
      },
      {
        id: 'e-coborrower-core',
        source: 'coborrower',
        target: 'core',
        animated: true,
        style: { stroke: isDark ? '#8b5cf6' : '#7c3aed', strokeWidth: 1.5 },
      },
      {
        id: 'e-core-sumsub',
        source: 'core',
        target: 'sumsub',
        animated: true,
        style: { stroke: isDark ? '#06b6d4' : '#0891b2' },
      },
      {
        id: 'e-core-middesk',
        source: 'core',
        target: 'middesk',
        animated: true,
        style: { stroke: isDark ? '#10b981' : '#059669' },
      },
      {
        id: 'e-core-crs',
        source: 'core',
        target: 'crs_credit',
        animated: true,
        style: { stroke: isDark ? '#ec4899' : '#db2777' },
      },
      {
        id: 'e-core-jdpower',
        source: 'core',
        target: 'jdpower',
        animated: true,
        style: { stroke: isDark ? '#8b5cf6' : '#7c3aed' },
      },
      {
        id: 'e-core-census',
        source: 'core',
        target: 'census',
        animated: true,
        style: { stroke: isDark ? '#6366f1' : '#4f46e5' },
      },
      {
        id: 'e-core-underwriting',
        source: 'core',
        target: 'underwriting',
        animated: true,
        style: { stroke: isDark ? '#f59e0b' : '#d97706', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: isDark ? '#f59e0b' : '#d97706' },
      },
      {
        id: 'e-underwriting-backoffice',
        source: 'underwriting',
        target: 'backoffice',
        animated: true,
        style: { stroke: isDark ? '#10b981' : '#059669', strokeWidth: 2 },
        markerEnd: { type: MarkerType.ArrowClosed, color: isDark ? '#10b981' : '#059669' },
      },
    ],
    [isDark]
  )

  return (
    <div className="w-full h-[460px] sm:h-[520px] md:h-[560px] bg-[#f8fafc] dark:bg-[#070b14] relative select-none">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.08, includeHiddenNodes: false }}
        minZoom={0.2}
        maxZoom={2.0}
        zoomOnScroll={false}
        zoomOnPinch={true}
        panOnDrag={true}
        proOptions={{ hideAttribution: true }}
        className="bg-[#f8fafc] dark:bg-[#070b14]"
      >
        <Background color={isDark ? '#1e293b' : '#cbd5e1'} gap={20} size={1} />
        <CustomZoomControls />
      </ReactFlow>

      {/* Floating minimal hint pill */}
      <div className="absolute bottom-2.5 left-2.5 pointer-events-none font-mono text-[9px] text-neutral-600 dark:text-neutral-400 bg-white/90 dark:bg-neutral-950/80 border border-neutral-300 dark:border-neutral-800 px-2 py-0.5 rounded backdrop-blur-sm shadow-sm">
        Click node to inspect • Drag / Pinch or + / − to zoom
      </div>
    </div>
  )
}

export default function LOSArchitectureFlow({ onSelectNode }: LOSArchitectureFlowProps) {
  return (
    <ReactFlowProvider>
      <FlowGraph onSelectNode={onSelectNode} />
    </ReactFlowProvider>
  )
}

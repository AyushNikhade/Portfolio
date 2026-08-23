import { useRef, useState } from "react"
import { motion } from "motion/react"
import { RotateCcw } from "lucide-react"

type NodeId =
  | "coborrower"
  | "valuation"
  | "geocoding"
  | "underwriting"
  | "offers"
  | "security"
  | "integrations"
  | "workflow"

type Position = { x: number; y: number }

interface Workstream {
  id: NodeId
  title: string
  label: string
  summary: string
  position: Position
}

const workstreams: Workstream[] = [
  {
    id: "coborrower",
    title: "Co-Borrower & Guarantor",
    label: "MULTI-PARTY INTAKE",
    summary: "Built invite, KYC, completion-tracking, ownership-validation, and submission-gating flows across borrower and lender experiences.",
    position: { x: 18, y: 20 },
  },
  {
    id: "valuation",
    title: "J.D. Power Valuation",
    label: "COLLATERAL DATA",
    summary: "Integrated VIN and vehicle-catalog valuation workflows for auto-loan collateral, before and after application creation.",
    position: { x: 50, y: 11 },
  },
  {
    id: "geocoding",
    title: "Census Geocoding",
    label: "ADDRESS ENRICHMENT",
    summary: "Added reusable Census address enrichment with persisted MSA, county, tract, and rural-market fallback data.",
    position: { x: 82, y: 20 },
  },
  {
    id: "underwriting",
    title: "DTI, Net Worth & Liabilities",
    label: "UNDERWRITING",
    summary: "Delivered structured personal liabilities, bankruptcy disclosure, and server-calculated DTI and net-worth data for underwriting.",
    position: { x: 13, y: 51 },
  },
  {
    id: "offers",
    title: "Offer & Closing",
    label: "AUTOMATION",
    summary: "Combined offer and repayment-schedule generation into an officer-friendly workflow with accepted-offer guardrails.",
    position: { x: 87, y: 51 },
  },
  {
    id: "security",
    title: "Security Hardening",
    label: "APPLICATION SECURITY",
    summary: "Closed stored-XSS vectors, secured sensitive endpoints, and introduced safer typed API access patterns.",
    position: { x: 18, y: 82 },
  },
  {
    id: "integrations",
    title: "Integrations & Compliance",
    label: "RISK INTELLIGENCE",
    summary: "Connected Cobalt SOS/UCC/OFAC screening, Census, J.D. Power, and loan-calculation services into the platform.",
    position: { x: 50, y: 91 },
  },
  {
    id: "workflow",
    title: "Product & Broker Workflow",
    label: "PLATFORM DELIVERY",
    summary: "Expanded configurable workflow sections, aligned broker and borrower flows, and made completion product-category aware.",
    position: { x: 82, y: 82 },
  },
]

const initialPositions = Object.fromEntries(workstreams.map(({ id, position }) => [id, position])) as Record<NodeId, Position>

export default function Experience() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [positions, setPositions] = useState<Record<NodeId, Position>>(initialPositions)
  const [selectedId, setSelectedId] = useState<NodeId>("coborrower")
  const [dragging, setDragging] = useState<{ id: NodeId; start: Position; pointer: Position } | null>(null)

  const selected = workstreams.find((node) => node.id === selectedId) ?? workstreams[0]

  const updateDraggedNode = (clientX: number, clientY: number) => {
    if (!dragging || !mapRef.current) return

    const bounds = mapRef.current.getBoundingClientRect()
    const deltaX = ((clientX - dragging.pointer.x) / bounds.width) * 100
    const deltaY = ((clientY - dragging.pointer.y) / bounds.height) * 100
    setPositions((current) => ({
      ...current,
      [dragging.id]: {
        x: Math.min(90, Math.max(10, dragging.start.x + deltaX)),
        y: Math.min(88, Math.max(12, dragging.start.y + deltaY)),
      },
    }))
  }

  return (
    <section
      id="experience"
      className="relative flex w-full flex-col items-center overflow-hidden border-b border-[var(--pattern)] bg-[#f5f5f0] pb-40 pt-24 text-black transition-colors duration-300 [--pattern:var(--color-neutral-300)] dark:bg-[#0a0a0a] dark:text-white dark:[--pattern:rgba(255,255,255,0.08)] md:pb-48 md:pt-32"
    >
      <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 w-full max-w-7xl -translate-x-1/2">
        <div className="absolute left-0 top-0 h-full border-l border-[var(--pattern)]" />
        <div className="absolute right-0 top-0 h-full border-l border-[var(--pattern)]" />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center px-8 md:px-12">
          <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-14">
            <span className="font-mono text-[20px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">EXPERIENCE</span>
            <h2 className="font-sans text-3xl font-black uppercase tracking-tight md:text-4xl">UPTIQ.AI / LOS</h2>
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Software Development Engineer Intern / 6 Months</span>
          </div>

          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-7 text-neutral-600 dark:text-neutral-300 md:text-base">
            During my internship at UPTIQ.ai, I delivered production features across its Loan Origination System: multi-party lending, underwriting intelligence, third-party integrations, and secure lender and borrower workflows.
          </p>

          <div className="hidden w-full md:block">
            <div className="mb-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              <span>Drag a workstream to explore the system</span>
              <button
                type="button"
                onClick={() => setPositions(initialPositions)}
                className="flex items-center gap-1.5 border-0 bg-transparent px-1 py-1 text-neutral-500 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
              >
                <RotateCcw className="h-3 w-3" /> Reset layout
              </button>
            </div>

            <div className="flex w-full justify-center">
              <div
                ref={mapRef}
                onPointerMove={(event) => updateDraggedNode(event.clientX, event.clientY)}
                onPointerUp={() => setDragging(null)}
                onPointerLeave={() => setDragging(null)}
                className="relative h-[620px] w-full max-w-[1100px] touch-none overflow-hidden border border-[var(--pattern)] bg-white/20 dark:bg-white/[0.015]"
              >
              <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(var(--pattern)_1px,transparent_1px),linear-gradient(90deg,var(--pattern)_1px,transparent_1px)] [background-size:32px_32px]" />
              <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                {workstreams.map((node) => (
                  <line
                    key={node.id}
                    x1="50%"
                    y1="51%"
                    x2={`${positions[node.id].x}%`}
                    y2={`${positions[node.id].y}%`}
                    className="stroke-neutral-300 dark:stroke-neutral-700"
                    strokeWidth="1"
                    strokeDasharray="4 5"
                  />
                ))}
              </svg>

              <motion.div
                className="absolute left-1/2 top-[51%] z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-500 bg-emerald-500 p-5 text-center text-stone-950 shadow-[0_18px_60px_rgba(16,185,129,0.24)]"
                animate={{ scale: [1, 1.035, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div>
                  <span className="block font-mono text-[8px] font-black tracking-[0.2em]">UPTIQ.AI</span>
                  <span className="mt-1 block text-xl font-black leading-none">LOS</span>
                  <span className="mt-1 block font-mono text-[7px] font-bold uppercase tracking-wider">Loan Origination System</span>
                </div>
              </motion.div>

                {workstreams.map((node) => {
                  const position = positions[node.id]
                  const isSelected = node.id === selectedId
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedId(node.id)}
                      onPointerDown={(event) => {
                        event.currentTarget.setPointerCapture(event.pointerId)
                        setSelectedId(node.id)
                        setDragging({ id: node.id, start: position, pointer: { x: event.clientX, y: event.clientY } })
                      }}
                      onPointerUp={(event) => {
                        if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
                        setDragging(null)
                      }}
                      style={{ left: `${position.x}%`, top: `${position.y}%` }}
                      className={`absolute z-30 w-40 -translate-x-1/2 -translate-y-1/2 border p-3 text-left font-mono shadow-sm transition-[box-shadow,border-color,background-color] duration-200 ${isSelected ? "border-emerald-500 bg-emerald-50 shadow-[0_12px_30px_rgba(16,185,129,0.15)] dark:bg-emerald-500/10" : "border-[var(--pattern)] bg-[#f5f5f0]/95 hover:border-emerald-500/70 dark:bg-[#111]"}`}
                    >
                      <span className="block text-[7px] font-bold tracking-[0.16em] text-emerald-600 dark:text-emerald-400">{node.label}</span>
                      <span className="mt-1 block text-[11px] font-bold leading-tight text-neutral-900 dark:text-neutral-100">{node.title}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div
              className="grid gap-3 px-4 md:grid-cols-2 md:gap-x-8 md:px-8"
              style={{ marginTop: "24px" }}
            >
              {workstreams.map((node) => (
                <div
                  key={node.id}
                  style={{ marginLeft: "20px", paddingLeft: "16px" }}
                >
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">{node.label}</span>
                  <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{node.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 md:hidden">
            {workstreams.map((node) => (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedId(node.id)}
                className={`border p-4 text-left ${selectedId === node.id ? "border-emerald-500 bg-emerald-500/5" : "border-[var(--pattern)]"}`}
              >
                <span className="font-mono text-[8px] font-bold tracking-[0.16em] text-emerald-600 dark:text-emerald-400">{node.label}</span>
                <span className="mt-1 block text-sm font-bold">{node.title}</span>
                <span className="mt-2 block text-xs leading-5 text-neutral-600 dark:text-neutral-300">{node.summary}</span>
              </button>
            ))}
          </div>
      </div>
    </section>
  )
}

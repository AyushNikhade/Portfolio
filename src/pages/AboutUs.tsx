import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

export default function AboutUs() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const milestoneStyle = {
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "0px",
        paddingRight: "0px",
    }

    return (
        <section
            id="about"
            className="relative w-full min-h-[85vh] bg-[#f5f5f0] dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300 border-t border-b border-[var(--pattern)] [--pattern:var(--color-neutral-300)] dark:[--pattern:rgba(255,255,255,0.08)] py-28 md:py-36 overflow-hidden flex flex-col justify-center items-center"
        >
            {/* Centered full-height vertical borders wrapper */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl pointer-events-none z-10">
                <div className="absolute top-0 left-0 h-full border-l border-[var(--pattern)]" />
                <div className="absolute top-0 right-0 h-full border-l border-[var(--pattern)]" />
            </div>

            <div className="max-w-7xl mx-auto w-full px-8 md:px-20 relative z-10 flex flex-col justify-center">

                {/* Section Header with explicit margin style for spacing with bottom content */}
                <div style={{ marginBottom: "50px" }} className="text-left w-full max-w-6xl mx-auto">
                    <h2 style={{ paddingLeft: isMobile ? "18px" : "20px", paddingRight: isMobile ? "18px" : "0px" }} className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3 text-neutral-900 dark:text-neutral-50 uppercase font-mono">
                        EDUCATION & MILESTONES
                    </h2>
                </div>

                {/* 2-Column Senior-Level Layout: Boxed Education vs. Plain Experience */}
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* COLUMN 1: EDUCATION (WITH 2x2 BOX) & SOCIALS */}
                    <div className="flex flex-col gap-6 w-full" style={{ paddingLeft: isMobile ? "18px" : "20px", paddingRight: isMobile ? "18px" : "0px" }}>
                        <div className="flex flex-col gap-3 w-full">
                            <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase font-mono tracking-widest pl-1">
                                [01 // EDUCATION]
                            </span>
                            <div className="w-full border-y border-x-0 md:border border-[var(--pattern)] grid grid-cols-1 md:grid-cols-2 bg-transparent select-none font-mono">

                                {/* Cell 1: DEGREE */}
                                <div className="border-b border-dashed md:border-solid border-[var(--pattern)] flex flex-col justify-center text-left gap-1 p-4 md:pt-[32px] md:pb-[32px] md:pl-[44px] md:pr-[32px]">
                                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                                        DEGREE
                                    </span>
                                    <span className="text-neutral-955 dark:text-neutral-50 text-sm font-semibold">
                                        B.Tech in Computer Science
                                    </span>
                                    <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                                        CGPA: 8.4 / 10
                                    </span>
                                </div>

                                {/* Cell 2: COLLEGE */}
                                <div className="border-b border-dashed md:border-solid md:border-l border-[var(--pattern)] flex flex-col justify-center text-left gap-1 p-4 md:pt-[32px] md:pb-[32px] md:pl-[44px] md:pr-[32px]">
                                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                                        COLLEGE
                                    </span>
                                    <span className="text-neutral-955 dark:text-neutral-50 text-sm font-semibold">
                                        Walchand College of Engineering
                                    </span>
                                    <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                                        Sangli, Maharashtra, IN
                                    </span>
                                </div>

                                {/* Cell 3: DURATION */}
                                <div className="border-b border-dashed md:border-solid md:border-b-0 border-[var(--pattern)] flex flex-col justify-center text-left gap-1 p-4 md:pt-[32px] md:pb-[32px] md:pl-[44px] md:pr-[32px]">
                                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-neutral-450 dark:text-neutral-50">
                                        DURATION
                                    </span>
                                    <span className="text-neutral-955 dark:text-neutral-50 text-sm font-semibold">
                                        2022 - 2026
                                    </span>
                                    <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                                        Academic Term
                                    </span>
                                </div>

                                {/* Cell 4: COURSEWORK */}
                                <div className="md:border-l border-[var(--pattern)] flex flex-col justify-center text-left gap-1 p-4 md:pt-[32px] md:pb-[32px] md:pl-[44px] md:pr-[32px]">
                                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-neutral-445 dark:text-neutral-500">
                                        COURSEWORK
                                    </span>
                                    <span className="text-neutral-955 dark:text-neutral-50 text-[10px] font-semibold leading-tight">
                                        DS, Algos, OS, DBMS, OOP, ML, DL
                                    </span>
                                    <span className="text-neutral-500 dark:text-neutral-400 text-[9px] leading-tight">
                                        16.8524° N, 74.5815° E
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Social Connections underneath the box */}
                        <div className="w-full flex flex-wrap justify-start items-center gap-x-3 sm:gap-x-5 gap-y-1.5 mt-2 text-xs font-mono select-none pl-1">
                            {/* GitHub */}
                            <a
                                href="https://github.com/AyushNikhade"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:text-[#059669] dark:hover:text-[#10b981] transition-colors group cursor-pointer pointer-events-auto"
                            >
                                <span>GitHub</span>
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>

                            <span className="text-neutral-300 dark:text-neutral-800">/</span>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/in/ayushnikhade04"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:text-[#059669] dark:hover:text-[#10b981] transition-colors group cursor-pointer pointer-events-auto"
                            >
                                <span>LinkedIn</span>
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>

                            <span className="text-neutral-300 dark:text-neutral-800">/</span>

                            {/* Email */}
                            <a
                                href="mailto:ayushnikhade888@gmail.com"
                                className="flex items-center gap-1 hover:text-[#059669] dark:hover:text-[#10b981] transition-colors group cursor-pointer pointer-events-auto"
                            >
                                <span>Email</span>
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                        </div>
                    </div>

                    {/* COLUMN 2: EXPERIENCE (PLAIN LIST, NO BOX) - ORDER: NEW -> OLD */}
                    <div className="flex flex-col gap-3 w-full" style={{ paddingLeft: isMobile ? "18px" : "0px", paddingRight: isMobile ? "18px" : "0px", paddingBottom: isMobile ? "100px" : "0px"  }}>
                        <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase font-mono tracking-widest pl-1">
                            [02 // MILESTONES]
                        </span>

                        <div className="flex flex-col font-mono text-left w-full select-none">                            {/* Item 1: CDAC CERTIFICATION */}
                            <div style={milestoneStyle} className="border-b border-dashed border-[var(--pattern)] flex flex-col justify-center text-left gap-1">
                                <div className="flex items-baseline justify-between w-full gap-4">
                                    <span className="text-neutral-955 dark:text-neutral-50 text-sm font-semibold">
                                        CDAC - Ethical Hacking &amp; Pen Testing
                                    </span>
                                    <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-neutral-450 dark:text-neutral-500 shrink-0">
                                        <span className="font-bold">2025</span>
                                        <span>/</span>
                                        <span className="uppercase tracking-wider">Certification</span>
                                    </div>
                                </div>
                                <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                                    Successfully completed certification, gaining expertise in cybersecurity.
                                </span>
                            </div>

                            {/* Item 2: COMPETITIVE PROGRAMMING */}
                            <div style={milestoneStyle} className="flex flex-col justify-center text-left gap-1">
                                <div className="flex items-baseline justify-between w-full gap-4">
                                    <span className="text-neutral-955 dark:text-neutral-50 text-sm font-semibold">
                                        Competitive Programming Achievements
                                    </span>
                                    <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-neutral-450 dark:text-neutral-500 shrink-0">
                                        <span className="font-bold">2024 - 2026</span>
                                        <span>/</span>
                                        <span className="uppercase tracking-wider">Achievements</span>
                                    </div>
                                </div>
                                <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                                    Solved 300+ problems across platforms like CodeChef, LeetCode, and GeeksforGeeks.
                                </span>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Maximize2, Play, X } from "lucide-react";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  tag: string;
  email: string;
  website?: string;
  avatar?: string;
  initials: string;
  gradient: string;
};

type ProjectCredit = {
  memberId: string;
  role: "Main" | "Assist";
};

type Project = {
  title: string;
  category: string;
  description: string;
  media: string;
  type: "image" | "video";
  href?: string;
  size?: "large" | "small";
  credits?: ProjectCredit[];
};

const TEAM: TeamMember[] = [
  {
    id: "jrb",
    name: "John Renz Bandianon",
    role: "Advisor Support Associate",
    tag: "ASA",
    email: "johnrenzbandianonon9@gmail.com",
    website: "https://johnrenz.vercel.app/",
    initials: "JB",
    gradient: "from-[#D4AF37] to-[#B4923A]",
    avatar: "/images/Team/Renz.png",
  },
  {
    id: "daa",
    name: "Dan Andrew Asis",
    role: "Design Content Associate Intern",
    tag: "DSA",
    email: "danandrewasis.teampadua@gmail.com",
    website: "https://undrawwz.vercel.app/",
    initials: "DA",
    gradient: "from-[#111111] to-[#374151]",
    avatar: "/images/Team/Dan.jpg",
  },
  {
    id: "nme",
    name: "Nehemiah McLindel Enoch",
    role: "Design Content Associate Intern",
    tag: "DSA",
    email: "mclindel3214@gmail.com",
    initials: "NE",
    gradient: "from-[#6B7280] to-[#111111]",
    avatar: "/images/Team/Lin.jpg",
  },
  {
    id: "wki",
    name: "William Kyle V. Iballa",
    role: "Advisor Support Associate",
    tag: "ASA",
    email: "iballa.kylengis@gmail.com",
    initials: "WI",
    gradient: "from-[#B4923A] to-[#D4AF37]",
    avatar: "/images/Team/Kyle.jpg",
  },
];

const getMember = (id: string) => TEAM.find((member) => member.id === id);

const projects: Project[] = [
  {
    title: "Client Servicing Trackers",
    category: "Client Servicing",
    description: "Birthday, prospect, and case management trackers built for Sun Life advisors.",
    media: "/images/Portfolio/CMP.png",
    type: "image",
    href: "https://tpclientportal.vercel.app/",
    size: "large",
    credits: [
      { memberId: "jrb", role: "Main" },
      { memberId: "wki", role: "Assist" },
    ],
  },
  {
    title: "Team Padua Tracker",
    category: "Business Development",
    description: "A daily task tracker built for the Business Development team.",
    media: "/images/Portfolio/TaskTracker.png",
    type: "image",
    href: "https://teampaduatracker.vercel.app/",
    size: "large",
    credits: [
      { memberId: "daa", role: "Main" },
      { memberId: "wki", role: "Assist" },
    ],
  },
  {
    title: "Birthday Poster",
    category: "Graphic Design",
    description: "Branch Manager Phoenix Palm birthday poster.",
    media: "/images/Poster/BM.png",
    type: "image",
    size: "small",
    credits: [{ memberId: "daa", role: "Main" }],
  },
  {
    title: "Xavier Birthday Poster",
    category: "Graphic Design",
    description: "Xavier birthday poster.",
    media: "/images/Poster/Xavier.png",
    type: "image",
    size: "small",
    credits: [{ memberId: "nme", role: "Main" }],
  },
  {
    title: "Sangumay BAG",
    category: "Video & Content",
    description: "Promotional video for Bag Sangumay.",
    media: "/media/SANGUMAY.mp4",
    type: "video",
    size: "small",
    credits: [{ memberId: "daa", role: "Main" }],
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

function AvatarCircle({ member, size = "md" }: { member: TeamMember; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "h-8 w-8 text-[10px] border-2",
    md: "h-14 w-14 text-sm border-[3px]",
    lg: "h-24 w-24 text-xl border-4",
  }[size];

  if (member.avatar) {
    return (
      <div className={`relative shrink-0 overflow-hidden rounded-full border-white shadow-sm ${sizeClasses}`}>
        <Image src={member.avatar} alt={member.name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full border-white bg-gradient-to-br font-bold text-white shadow-sm ${member.gradient} ${sizeClasses}`}
    >
      {member.initials}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onPreview,
}: {
  project: Project;
  index: number;
  onPreview: (project: Project) => void;
}) {
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const isLarge = project.size === "large";
  const opensPreview = !project.href;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const card = (
    <motion.div
      layout
      initial="rest"
      animate="rest"
      whileHover="hover"
      onMouseMove={handleMouseMove}
      role={opensPreview ? "button" : undefined}
      tabIndex={opensPreview ? 0 : undefined}
      onClick={opensPreview ? () => onPreview(project) : undefined}
      onKeyDown={
        opensPreview
          ? (event) => {
            if (event.key === "Enter" || event.key === " ") onPreview(project);
          }
          : undefined
      }
      className={`group relative overflow-hidden rounded-[32px] border border-[#ECECEC] bg-[#FAFAFA] shadow-[0_8px_30px_rgba(17,17,17,0.05)] transition-shadow duration-500 hover:shadow-[0_24px_70px_rgba(212,175,55,0.22)] ${opensPreview ? "cursor-zoom-in" : ""
        } ${isLarge ? "aspect-[21/9]" : "aspect-[4/5]"}`}
    >
      {project.type === "video" ? (
        <video
          src={project.media}
          muted
          loop
          autoPlay
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <Image
          src={project.media}
          alt={project.title}
          fill
          sizes={isLarge ? "(max-width: 640px) 100vw, 100vw" : "(max-width: 640px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${glow.x}% ${glow.y}%, rgba(244,214,122,0.55), transparent 65%)`,
        }}
      />

      <motion.span
        variants={{ rest: { x: "-130%" }, hover: { x: "230%" } }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#D4AF37]/40" />

      <div className="absolute left-5 top-5 flex items-center gap-2">
        <motion.span
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.3 }}
          className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#B4923A] backdrop-blur-sm"
        >
          {project.category}
        </motion.span>
        {project.href && (
          <span className="rounded-full bg-[#111111]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            Web System
          </span>
        )}
      </div>

      <motion.span
        variants={{ rest: { opacity: 0, scale: 0.6, x: 8 }, hover: { opacity: 1, scale: 1, x: 0 } }}
        transition={{ duration: 0.3 }}
        className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#111111] backdrop-blur-sm"
      >
        {project.href ? (
          <ArrowUpRight className="h-4 w-4" />
        ) : project.type === "video" ? (
          <Play className="h-4 w-4" />
        ) : (
          <Maximize2 className="h-3.5 w-3.5" />
        )}
      </motion.span>

      <motion.div
        variants={{ rest: { y: 6 }, hover: { y: 0 } }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 bottom-0 p-6"
      >
        <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-1.5 max-w-md text-xs sm:text-sm leading-relaxed text-white/75">{project.description}</p>

        {project.credits && project.credits.length > 0 && (
          <div className="mt-3 flex items-center gap-2">
            <div className="flex -space-x-3">
              {project.credits.map((credit) => {
                const member = getMember(credit.memberId);
                if (!member) return null;
                return (
                  <div key={member.id} className="group/credit relative">
                    <AvatarCircle member={member} size="sm" />
                    <div className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#111111] px-2.5 py-1.5 text-[10px] font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/credit:opacity-100">
                      {member.name} · {credit.role === "Main" ? "Lead" : "Support"}
                    </div>
                  </div>
                );
              })}
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/60">
              {project.credits.length > 1 ? "Team" : "Created by"}
            </span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={isLarge ? "col-span-full" : ""}
    >
      {project.href ? (
        <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
          {card}
        </a>
      ) : (
        card
      )}
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!previewProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewProject(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewProject]);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#F4D67A]/10 blur-[150px]" />
        <div className="absolute -left-32 bottom-10 h-[380px] w-[380px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -16, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#D4AF37]/50"
            style={{ left: `${15 + i * 18}%`, top: `${10 + (i % 3) * 22}%` }}
          />
        ))}
      </div>

      <Container>
        <div className="relative">
          <SectionTitle
            label="Portfolio"
            title="Featured Work"
            description="Real client servicing tools and creative projects built for Team Padua — a preview of what's possible for your business too."
          />

          <div className="relative mb-12 flex flex-wrap justify-center gap-2 rounded-full border border-[#ECECEC] bg-[#FAFAFA] p-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5 ${activeCategory === category ? "text-white" : "text-[#6B7280] hover:text-[#111111]"
                  }`}
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="portfolio-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D67A] shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} onPreview={setPreviewProject} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative mt-16 flex flex-col items-center gap-4 overflow-hidden rounded-[32px] border border-[#D4AF37]/20 bg-gradient-to-br from-white to-[#FFFDF7] px-8 py-14 text-center"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F4D67A]/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-[#D4AF37]/15 blur-3xl" />

            <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Your project could be next
            </p>
            <h3 className="relative max-w-xl text-2xl font-bold text-[#111111] sm:text-3xl">
              Whether it&apos;s a servicing tool, a website, or your next campaign, let&apos;s build it together.
            </h3>
            <p className="relative max-w-lg text-sm leading-relaxed text-[#6B7280]">
              Every project above started as a conversation about a real problem. If you&apos;re facing
              something similar, reach out and let&apos;s talk about what&apos;s possible for you.
            </p>
            <div className="relative">
              <Button
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start a Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>

      <AnimatePresence>
        {previewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewProject(null)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-black/90 p-4 backdrop-blur-sm sm:p-10"
          >
            <button
              onClick={() => setPreviewProject(null)}
              aria-label="Close preview"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-[90vh] max-w-5xl flex-col items-center gap-5"
            >
              {previewProject.type === "video" ? (
                <video
                  src={previewProject.media}
                  controls
                  autoPlay
                  className="max-h-[78vh] w-auto max-w-full"
                />
              ) : (
                <img
                  src={previewProject.media}
                  alt={previewProject.title}
                  className="max-h-[78vh] w-auto max-w-full object-contain"
                />
              )}

              <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                  {previewProject.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">{previewProject.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import {
  Globe,
  AppWindow,
  PenTool,
  Hexagon,
  Video,
  Image as ImageIcon,
  Share2,
  FileText,
  Search,
  Cloud,
  Users,
  CreditCard,
  UserCheck,
  Sparkles,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  size?: "large" | "small";
};

type ServiceCategory = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: ServiceItem[];
};

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

const CATEGORIES: ServiceCategory[] = [
  {
    id: "client-servicing",
    label: "Client Servicing",
    title: "Advisor & Client Care",
    description: "Dedicated support that keeps every policyholder relationship running smoothly.",
    items: [
      {
        icon: CreditCard,
        title: "Client Policy Card",
        desc: "Custom-designed policy cards prepared for every client, front to back.",
        size: "large",
      },
      {
        icon: UserCheck,
        title: "Advisor Support",
        desc: "Day-to-day servicing support for Sun Life advisors and their teams.",
        size: "small",
      },
      {
        icon: Users,
        title: "Client Servicing",
        desc: "Trackers, reminders, and follow-ups that keep client relationships on track.",
        size: "small",
      },
    ],
  },
  {
    id: "digital-solutions",
    label: "Digital Solutions",
    title: "Built for the Business",
    description: "Web systems and tools designed around how your team actually works.",
    items: [
      {
        icon: Globe,
        title: "Website Development",
        desc: "Custom, responsive websites tailored to your brand and workflow.",
        size: "large",
      },
      {
        icon: AppWindow,
        title: "Web Applications",
        desc: "Purpose-built tools and trackers for daily operations.",
        size: "small",
      },
      {
        icon: Search,
        title: "SEO",
        desc: "Structured, search-friendly foundations that help you get found.",
        size: "small",
      },
      {
        icon: Cloud,
        title: "Google Workspace",
        desc: "Setup, organization, and support for your Workspace environment.",
        size: "small",
      },
    ],
  },
  {
    id: "creative-services",
    label: "Creative Services",
    title: "Design That Feels Premium",
    description: "Visual and written content crafted with an editorial, high-end finish.",
    items: [
      {
        icon: PenTool,
        title: "Graphic Design",
        desc: "Posters, layouts, and visual assets designed with intention.",
        size: "large",
      },
      { icon: Hexagon, title: "Logo Design", desc: "Distinct marks that carry your brand's identity.", size: "small" },
      { icon: Video, title: "Video Editing", desc: "Polished, promotional video content ready to share.", size: "small" },
      { icon: ImageIcon, title: "Image Design", desc: "Refined image editing and composition work.", size: "small" },
      { icon: FileText, title: "Content Writing", desc: "Clear, engaging copy across every touchpoint.", size: "small" },
      { icon: Share2, title: "Social Media", desc: "Content planning that keeps your presence consistent.", size: "small" },
    ],
  },
];

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

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const isLarge = item.size === "large";

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, rotate: 1 }}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-[32px] border border-[#D4AF37]/15 bg-white p-8 shadow-[0_8px_30px_rgba(17,17,17,0.04)] transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)] ${isLarge ? "sm:col-span-2" : ""
        }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at ${glow.x}% ${glow.y}%, rgba(212,175,55,0.14), transparent 65%)`,
        }}
      />

      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#F4D67A]/30 to-transparent blur-2xl transition-transform duration-700 group-hover:scale-125" />

      <motion.span
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-6 top-6 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF8E8] text-[#B4923A]"
      >
        <Sparkles className="h-3.5 w-3.5" />
      </motion.span>

      <div className="relative">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFF8E8] to-[#F9F2D8] text-[#B4923A] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <item.icon className="h-6 w-6" />
        </div>

        <h3
          className={`font-bold text-[#111111] transition-colors duration-300 group-hover:text-[#B4923A] ${isLarge ? "text-2xl" : "text-lg"
            }`}
        >
          {item.title}
        </h3>

        <p className={`mt-3 leading-relaxed text-[#6B7280] ${isLarge ? "max-w-md text-sm" : "text-sm"}`}>{item.desc}</p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#D4AF37]/25" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#FFFDF7] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#F4D67A]/12 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-[#F9F2D8]/60 blur-[120px]" />
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -16, 0], opacity: [0.25, 0.65, 0.25] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#D4AF37]/50"
            style={{ left: `${12 + i * 18}%`, top: `${8 + (i % 3) * 24}%` }}
          />
        ))}
      </div>

      <Container>
        <div className="relative">
          <SectionTitle
            label="Services"
            title="What We Offer"
            description="A dual-track approach: professional client servicing and digital creative solutions."
          />

          <div className="flex flex-col gap-20">
            {CATEGORIES.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8 flex flex-col gap-2">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B4923A]">
                    {category.label}
                  </span>
                  <h3 className="text-2xl font-bold text-[#111111] sm:text-3xl">{category.title}</h3>
                  <p className="max-w-xl text-sm leading-relaxed text-[#6B7280]">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, index) => (
                    <ServiceCard key={item.title} item={item} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative mt-28">
            <div className="mx-auto mb-14 max-w-xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B4923A]">
                Meet the Studio
              </span>
              <h3 className="mt-4 text-3xl font-bold text-[#111111] sm:text-4xl">The People Behind Every Project</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                A small, dedicated team handling client servicing and creative work for Team Padua.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      className="absolute inset-0 -m-3 rounded-full bg-gradient-to-br from-[#F4D67A]/40 to-[#D4AF37]/20 blur-xl"
                    />
                    <div className="absolute inset-0 -m-1 rounded-full border border-dashed border-[#D4AF37]/40 transition-transform duration-700 group-hover:rotate-90" />
                    <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-white shadow-xl transition-transform duration-500 group-hover:scale-105">
                      {member.avatar ? (
                        <Image src={member.avatar} alt={member.name} fill className="object-cover" />
                      ) : (
                        <div
                          className={`flex h-full w-full items-center justify-center bg-gradient-to-br text-xl font-bold text-white ${member.gradient}`}
                        >
                          {member.initials}
                        </div>
                      )}
                    </div>
                    <span className="absolute -bottom-1 right-0 rounded-full bg-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#B4923A] shadow-md ring-1 ring-[#ECECEC]">
                      {member.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#111111]">{member.name}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">{member.role}</p>

                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ECECEC] text-[#111111] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    {member.website ? (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${member.name}'s website`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ECECEC] text-[#111111] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="flex h-9 items-center rounded-full border border-dashed border-[#ECECEC] px-3 text-[10px] font-medium uppercase tracking-wider text-[#9CA3AF]">
                        Site soon
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
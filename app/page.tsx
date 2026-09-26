"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("ainrrofiq575@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Data Keahlian Dikelompokkan Berdasarkan Domain (Clean & Structured)
  const skillCategories = [
    {
      category: "Backend & Systems",
      description: "Arsitektur server, integrasi REST API, dan kecerdasan buatan.",
      skills: [
        { name: "PHP / Laravel", badge: "Core Framework", color: "text-red-400 bg-red-500/10 border-red-500/20" },
        { name: "Python", badge: "AI & RAG Stack", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
        { name: "REST API", badge: "Architecture", color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
      ],
    },
    {
      category: "Frontend & Mobile",
      description: "Pengembangan antarmuka responsif dan aplikasi multiplatform.",
      skills: [
        { name: "TypeScript", badge: "Type-Safe JS", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
        { name: "JavaScript", badge: "Web Engine", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
        { name: "Flutter / Dart", badge: "Cross-Platform", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
      ],
    },
    {
      category: "Databases & Tools",
      description: "Penyimpanan data relasional, document-store, dan version control.",
      skills: [
        { name: "MySQL", badge: "Relational DB", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
        { name: "MongoDB", badge: "NoSQL DB", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
        { name: "Git", badge: "Version Control", color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
      ],
    },
  ];

  // Data Projects dengan Status, Fitur Kunci, dan Tautan
  const projects = [
    {
      title: "HAJATO",
      category: "Web Application",
      status: "Event Platform",
      description:
        "Platform digital manajemen acara dan hajatan dengan sistem pencatatan buku tamu undangan, RSVP interaktif, dan rekapitulasi kehadiran tamu secara real-time.",
      highlights: [
        "Sinkronisasi kehadiran & RSVP tamu multi-event secara real-time.",
        "Optimasi query database MySQL untuk pencatatan buku tamu berkecepatan tinggi.",
      ],
      techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      githubUrl: "https://github.com/Ainurrofiq575",
      liveUrl: "https://github.com/Ainurrofiq575",
    },
    {
      title: "DesaOS",
      category: "Public Service",
      status: "Governance System",
      description:
        "Sistem operasi dan platform administrasi terpadu untuk tata kelola pemerintahan desa, digitalisasi arsip surat-menyurat, serta optimalisasi layanan mandiri warga.",
      highlights: [
        "Digitalisasi arsip persuratan dan administrasi mandiri warga desa.",
        "Arsitektur modular backend Laravel dengan pengamanan role-based access control.",
      ],
      techStack: ["Laravel", "REST API", "MySQL", "Bootstrap / Tailwind"],
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      githubUrl: "https://github.com/Ainurrofiq575",
      liveUrl: "https://github.com/Ainurrofiq575",
    },
    {
      title: "Layanan Administrasi Kependudukan dengan Chatbot RAG",
      category: "AI & Smart Gov",
      status: "Research & AI Project",
      description:
        "Portal administrasi kependudukan yang diintegrasikan dengan chatbot cerdas berbasis Retrieval-Augmented Generation (RAG) untuk menjawab konsultasi regulasi otomatis.",
      highlights: [
        "Integrasi LLM & Vector Database untuk konsultasi regulasi kependudukan akurat.",
        "Retrieval cerdas dari knowledge base berkas dan SOP instansi tanpa halusinasi.",
      ],
      techStack: ["Python", "RAG / LLM", "REST API", "React / Next.js"],
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      githubUrl: "https://github.com/Ainurrofiq575",
      liveUrl: "https://github.com/Ainurrofiq575",
    },
    {
      title: "Lariin",
      category: "Mobile Application",
      status: "Fitness & Tracking",
      description:
        "Aplikasi mobile pelacak aktivitas lari dan olahraga berbasis Flutter dengan pencatatan rute GPS, metrik jarak, kalkulasi kalori, dan visualisasi progres kebugaran.",
      highlights: [
        "Pelacakan rute lari interaktif memanfaatkan Location Service & GPS perangkat.",
        "Kalkulasi metrik jarak, pace, kalori, dan visualisasi riwayat olahraga pengguna.",
      ],
      techStack: ["Flutter", "Dart", "REST API", "Location Service"],
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      githubUrl: "https://github.com/Ainurrofiq575",
      liveUrl: "https://github.com/Ainurrofiq575",
    },
  ];

  // Data Timeline Akademik & Pengalaman
  const milestones = [
    {
      period: "2021 — Sekarang",
      role: "Mahasiswa D4 Teknik Informatika",
      organization: "Universitas Harkat Negeri (eks-Poltek Harber)",
      description:
        "Fokus mendalami Software Engineering, Arsitektur Backend (Laravel/Python), Desain Database Relasional & NoSQL, serta Pengembangan Aplikasi Web & Mobile.",
    },
    {
      period: "2024 — 2025",
      role: "Riset AI & Pengembangan Sistem Informasi",
      organization: "Proyek & Capstone Mandiri",
      description:
        "Merancang Chatbot RAG untuk pelayanan administrasi kependudukan cerdas dan membangun platform tata kelola pemerintahan desa digital (DesaOS).",
    },
  ];

  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* =========================================================================
          1. NAVBAR (Responsive Desktop & Mobile)
      ========================================================================= */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#090a0f]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4">
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-sans font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
          >
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-indigo-500/50 shadow-sm">
              <Image
                src="/Profile.jpg"
                alt="Ainur Rofiq"
                fill
                sizes="32px"
                className="object-cover object-top"
              />
            </div>
            <span className="text-white font-bold tracking-tight text-base">
              Ainur Rofiq
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-zinc-100 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-zinc-100 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">
              Contact
            </a>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-500 transition-all active:scale-95"
            >
              Get in Touch
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white md:hidden transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-zinc-800 bg-[#090a0f]/95 px-4 py-4 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 hover:bg-zinc-900 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 hover:bg-zinc-900 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 hover:bg-zinc-900 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 hover:bg-zinc-900 hover:text-white transition-colors"
              >
                Contact
              </a>
              <div className="pt-2 border-t border-zinc-800/80 mt-1">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-indigo-500 active:scale-98"
                >
                  Get in Touch
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* =========================================================================
            2. HERO SECTION
        ========================================================================= */}
        <section id="hero" className="relative overflow-hidden py-16 sm:py-20 md:py-28">
          {/* Background Glow Accents */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-80 sm:h-96 sm:w-96 -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[120px]" />
          <div className="pointer-events-none absolute top-48 right-10 -z-10 h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-sky-500/10 blur-[100px]" />

          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:items-center">
              {/* Left Bio Column */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[11px] sm:text-xs font-medium text-emerald-400 mb-5 sm:mb-6 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Available for Software Engineering Opportunities
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                    Ainur Rofiq
                  </span>
                </h1>

                <p className="mt-2.5 sm:mt-3 text-lg sm:text-xl md:text-2xl font-medium text-indigo-400/90">
                  Software Developer
                </p>

                <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
                  D4 Teknik Informatika student at{" "}
                  <span className="text-zinc-200 font-medium">Universitas Harkat Negeri</span>, passionate about{" "}
                  <span className="text-zinc-200 font-medium">Backend Architecture</span>,{" "}
                  <span className="text-zinc-200 font-medium">REST APIs</span>,{" "}
                  <span className="text-zinc-200 font-medium">Databases</span>, and{" "}
                  <span className="text-zinc-200 font-medium">Mobile Application Development</span>.
                </p>

                {/* CTA Buttons */}
                <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3.5 sm:gap-4 md:justify-start">
                  <a
                    href="#projects"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all active:scale-95"
                  >
                    <span>View My Projects</span>
                    <span>&darr;</span>
                  </a>
                  <a
                    href="#about"
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/70 px-6 py-3 text-sm font-semibold text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white hover:-translate-y-0.5 transition-all active:scale-95"
                  >
                    Learn More About Me
                  </a>
                </div>
              </div>

              {/* Right Profile Photo Column (Circular Avatar with Glowing Ring) */}
              <div className="relative flex shrink-0 items-center justify-center">
                {/* Subtle outer gradient glow */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 opacity-60 blur-xl transition duration-500 hover:opacity-90" />

                {/* Circular image container */}
                <div className="relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 overflow-hidden rounded-full border-2 border-indigo-400/60 bg-zinc-900 shadow-2xl">
                  <Image
                    src="/Profile.jpg"
                    alt="Foto Profil Ainur Rofiq"
                    fill
                    priority
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 256px"
                    className="object-cover object-top transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Quick Highlights Bar */}
            <div className="mt-12 sm:mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-zinc-800/80 pt-6 sm:pt-8">
              <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-3 sm:p-3.5 text-center sm:text-left">
                <div className="font-mono text-xl sm:text-2xl font-bold text-white">4+</div>
                <div className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5">
                  Featured Projects
                </div>
              </div>
              <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-3 sm:p-3.5 text-center sm:text-left">
                <div className="font-mono text-xl sm:text-2xl font-bold text-white">9+</div>
                <div className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5">
                  Core Technologies
                </div>
              </div>
              <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-3 sm:p-3.5 text-center sm:text-left">
                <div className="font-mono text-base sm:text-lg md:text-xl font-bold text-white truncate">
                  Univ. Harkat Negeri
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5 truncate">
                  D4 TI • Kota Tegal
                </div>
              </div>
              <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-3 sm:p-3.5 text-center sm:text-left">
                <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-400">Open</div>
                <div className="text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5">
                  Collaboration / Work
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. ABOUT SECTION & MILESTONES
        ========================================================================= */}
        <section id="about" className="border-t border-zinc-900 bg-zinc-950/40 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 sm:mb-12">
              <div className="inline-block font-mono text-xs uppercase tracking-widest text-indigo-400">
                01. Profile
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">About Me</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
              {/* Left Bio Column */}
              <div className="space-y-4 text-zinc-300 md:col-span-7 leading-relaxed text-sm sm:text-base">
                <p>
                  Saya adalah mahasiswa aktif tingkat akhir jenjang{" "}
                  <strong className="text-white font-semibold">D4 Teknik Informatika</strong> di{" "}
                  <strong className="text-indigo-300 font-semibold">
                    Universitas Harkat Negeri (eks-Poltek Harber), Kota Tegal
                  </strong>{" "}
                  yang berdedikasi pada pengembangan perangkat lunak terstandar dan berkinerja tinggi.
                </p>
                <p>
                  Fokus keahlian saya berakar pada{" "}
                  <span className="text-indigo-300 font-medium">Backend Architecture</span>, perancangan arsitektur{" "}
                  <span className="text-indigo-300 font-medium">RESTful API</span> yang modular, optimasi{" "}
                  <span className="text-indigo-300 font-medium">Database</span> (Relational MySQL & NoSQL MongoDB), serta pembuatan aplikasi Web & Mobile (Flutter).
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm">
                  Saya memiliki ketertarikan kuat dalam mengintegrasikan teknologi modern seperti AI Chatbot berbasis RAG ke dalam sistem pelayanan publik dan aplikasi skala nyata.
                </p>

                {/* Additional Quick Info Tags */}
                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex flex-col sm:flex-row flex-wrap gap-2 text-xs">
                  <span className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-zinc-300">
                    🎓 Kampus: Universitas Harkat Negeri (eks-Poltek Harber)
                  </span>
                  <a
                    href="https://maps.google.com/?q=Universitas+Harkat+Negeri+Jl.+Mataram+No.9+Pesurungan+Lor+Margadana+Kota+Tegal+Jawa+Tengah+52147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors inline-flex items-center gap-1 leading-relaxed"
                  >
                    📍 Jl. Mataram No.9, Pesurungan Lor, Margadana, Kota Tegal ↗
                  </a>
                  <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-emerald-400">
                    💼 Status: Open for Internship & Junior Software Engineer
                  </span>
                </div>
              </div>

              {/* Right Focus Areas Cards */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:col-span-5">
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 hover:border-indigo-500/40 hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-2 font-semibold text-white text-sm">
                    <span className="text-indigo-400 font-mono text-base">&bull;</span>
                    <span>Backend & APIs</span>
                  </div>
                  <div className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                    Membangun RESTful API yang handal, modular, terstruktur, dan siap integrasi.
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 hover:border-indigo-500/40 hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-2 font-semibold text-white text-sm">
                    <span className="text-indigo-400 font-mono text-base">&bull;</span>
                    <span>Web Development</span>
                  </div>
                  <div className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                    Pengembangan platform web dinamis, responsif, dan optimal untuk pengguna.
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 hover:border-indigo-500/40 hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-2 font-semibold text-white text-sm">
                    <span className="text-indigo-400 font-mono text-base">&bull;</span>
                    <span>Database Design</span>
                  </div>
                  <div className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                    Skema data relasional & NoSQL terstruktur dengan MySQL & MongoDB.
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 hover:border-indigo-500/40 hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-2 font-semibold text-white text-sm">
                    <span className="text-indigo-400 font-mono text-base">&bull;</span>
                    <span>Mobile App (Flutter)</span>
                  </div>
                  <div className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                    Aplikasi multiplatform dengan integrasi data, state management, & API.
                  </div>
                </div>
              </div>
            </div>

            {/* Academic & Project Milestones Timeline */}
            <div className="mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-zinc-800/80">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6">Education & Project Milestones</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {milestones.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4 sm:p-5 hover:border-zinc-700 transition-colors"
                  >
                    <div className="inline-block font-mono text-xs font-semibold text-indigo-400 mb-1.5">
                      {item.period}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white">{item.role}</div>
                    <div className="text-xs text-zinc-400 mt-0.5 font-medium">{item.organization}</div>
                    <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SKILLS SECTION (Grouped & Clean Visual Badges)
        ========================================================================= */}
        <section id="skills" className="border-t border-zinc-900 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 sm:mb-12">
              <div className="inline-block font-mono text-xs uppercase tracking-widest text-indigo-400">
                02. Capabilities
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                Keahlian teknis dan alat yang digunakan dalam merancang dan mengembangkan sistem.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
              {skillCategories.map((group, groupIdx) => (
                <div
                  key={groupIdx}
                  className="rounded-2xl border border-zinc-800/90 bg-zinc-900/40 p-5 sm:p-6 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-base text-white">{group.category}</h3>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      {group.description}
                    </p>

                    <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                      {group.skills.map((skill, skillIdx) => (
                        <div
                          key={skillIdx}
                          className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-2.5 sm:p-3 hover:border-zinc-700 transition-colors"
                        >
                          <span className="font-medium text-xs sm:text-sm text-zinc-200">{skill.name}</span>
                          <span
                            className={`rounded-md border px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-medium ${skill.color}`}
                          >
                            {skill.badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. PROJECTS SECTION (Enhanced with Highlights, GitHub & Details Links)
        ========================================================================= */}
        <section id="projects" className="border-t border-zinc-900 bg-zinc-950/40 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 sm:mb-12">
              <div className="inline-block font-mono text-xs uppercase tracking-widest text-indigo-400">
                03. Portfolio
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                Koleksi aplikasi, sistem informasi, dan proyek rekayasa perangkat lunak yang telah dibangun.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group flex flex-col justify-between rounded-2xl border border-zinc-800/90 bg-zinc-900/50 p-5 sm:p-6.5 hover:border-zinc-700 hover:bg-zinc-900/80 hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
                >
                  <div>
                    {/* Header Tags */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span
                          className={`inline-block rounded-md border px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium ${project.badgeColor}`}
                        >
                          {project.category}
                        </span>
                        <span className="rounded-md bg-zinc-800/60 px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-mono text-zinc-400">
                          {project.status}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-zinc-500">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technical Key Highlights */}
                    <div className="mt-4 space-y-1.5 rounded-xl border border-zinc-800/70 bg-zinc-950/40 p-3 sm:p-3.5">
                      <div className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
                        Key Architecture &amp; Features:
                      </div>
                      {project.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 text-xs text-zinc-300 leading-relaxed">
                          <span className="text-indigo-400 mt-0.5">&bull;</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Stack & Action Links */}
                  <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-zinc-800/80">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-zinc-800/70 border border-zinc-700/50 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400 pt-1">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-zinc-400 hover:text-white transition-colors py-1"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>GitHub Repo</span>
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-indigo-400 hover:text-indigo-300 transition-colors py-1"
                      >
                        <span>Preview & Detail</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. CONTACT SECTION (Interactive Direct Channels + Copy Email Feature)
        ========================================================================= */}
        <section id="contact" className="border-t border-zinc-900 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <div className="inline-block font-mono text-xs uppercase tracking-widest text-indigo-400 mb-2">
              04. Next Step
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Let&apos;s Connect</h2>
            <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-zinc-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Saya terbuka untuk diskusi teknis, kolaborasi proyek, peluang magang, maupun posisi
              Software Engineering. Silakan hubungi saya melalui kanal berikut:
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {/* Email Card (Clickable + Copy Quick Action) */}
              <div className="group relative rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5 hover:border-indigo-500/60 hover:bg-zinc-900/90 hover:-translate-y-1 transition-all text-left shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider group-hover:text-indigo-400 transition-colors">
                    Email
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                    className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-mono text-zinc-300 hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    {copied ? "✓ Copied" : "Copy"}
                  </button>
                </div>
                <div className="mt-2 font-semibold text-white text-xs sm:text-sm truncate group-hover:text-indigo-300 transition-colors">
                  ainrrofiq575@gmail.com
                </div>
                <a
                  href="mailto:ainrrofiq575@gmail.com?subject=Inquiry%20from%20Portfolio"
                  className="mt-3 text-xs font-medium text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all inline-flex items-center gap-1"
                >
                  Send Message &rarr;
                </a>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5 hover:border-indigo-500/60 hover:bg-zinc-900/90 hover:-translate-y-1 transition-all text-left shadow-sm active:scale-98"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider group-hover:text-indigo-400 transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-zinc-600 group-hover:text-indigo-400 transition-colors">↗</span>
                </div>
                <div className="mt-2 font-semibold text-white text-xs sm:text-sm group-hover:text-indigo-300 transition-colors">
                  Ainur Rofiq
                </div>
                <div className="mt-3 text-xs font-medium text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  Connect on LinkedIn &rarr;
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/Ainurrofiq575"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5 hover:border-indigo-500/60 hover:bg-zinc-900/90 hover:-translate-y-1 transition-all text-left shadow-sm active:scale-98"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider group-hover:text-indigo-400 transition-colors">
                    GitHub
                  </span>
                  <span className="text-zinc-600 group-hover:text-indigo-400 transition-colors">⚡</span>
                </div>
                <div className="mt-2 font-semibold text-white text-xs sm:text-sm truncate group-hover:text-indigo-300 transition-colors">
                  github.com/Ainurrofiq575
                </div>
                <div className="mt-3 text-xs font-medium text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  View Repositories &rarr;
                </div>
              </a>

              {/* Location Card */}
              <a
                href="https://maps.google.com/?q=Universitas+Harkat+Negeri+Jl.+Mataram+No.9+Pesurungan+Lor+Margadana+Kota+Tegal+Jawa+Tengah+52147"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-5 hover:border-indigo-500/60 hover:bg-zinc-900/90 hover:-translate-y-1 transition-all text-left shadow-sm active:scale-98"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider group-hover:text-indigo-400 transition-colors">
                    Location
                  </span>
                  <span className="text-zinc-600 group-hover:text-indigo-400 transition-colors">📍</span>
                </div>
                <div className="mt-2 font-semibold text-white text-xs sm:text-sm truncate group-hover:text-indigo-300 transition-colors">
                  Tegal, Central Java
                </div>
                <div className="mt-3 text-xs font-medium text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all inline-flex items-center gap-1">
                  View Google Maps &rarr;
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          7. FOOTER
      ========================================================================= */}
      <footer className="border-t border-zinc-800/80 bg-zinc-950 py-6 sm:py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 text-center sm:flex-row sm:text-left">
          <div>
            <div className="font-mono text-sm font-bold text-white">Ainur Rofiq</div>
            <div className="text-xs text-zinc-500 mt-0.5">
              Software Developer • D4 Teknik Informatika, Universitas Harkat Negeri
            </div>
          </div>

          <div className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Built with Next.js, TypeScript &amp; Tailwind CSS.
          </div>

          <div>
            <a
              href="#hero"
              className="font-mono text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Back to top &uarr;
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

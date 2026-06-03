import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Briefcase, Award, Sparkles, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:py-36 bg-[#0A0A0A] border-b border-zinc-900/80">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-950/15 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-zinc-800/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-75" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-emerald-400 text-sm font-medium"
            >
              <Sparkles id="sparkles-icon" className="w-4 h-4 text-emerald-400 animate-spin-slow" />
              <span>Available for Technical Roles &amp; Projects</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2"
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">{PERSONAL_INFO.fullName}</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl font-semibold text-zinc-300 font-sans"
              >
                {PERSONAL_INFO.title}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-zinc-400 leading-relaxed max-w-xl"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#experience"
                id="view-experience-btn"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-black font-semibold rounded-xl shadow-lg shadow-emerald-950/25 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-450"
              >
                <Briefcase id="briefcase-icon" className="w-5 h-5" />
                <span>View My Journey</span>
              </a>

              <button
                onClick={copyEmail}
                id="copy-email-btn"
                aria-label="Copy Praise's email address"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-medium rounded-xl border border-zinc-800 shadow-sm transition-all duration-200 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {copied ? (
                  <>
                    <Check id="check-icon" className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy id="copy-icon" className="w-5 h-5 text-zinc-500" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-y-3 gap-x-6 text-sm text-zinc-400 border-t border-zinc-900 pt-6"
            >
              <div className="flex items-center gap-2">
                <MapPin id="map-pin-icon" className="w-4 h-4 text-emerald-400" />
                <span>Botswana / Zimbabwe</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail id="mail-icon" className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone id="phone-icon" className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', damping: 15 }}
              className="relative group w-full max-w-[340px]"
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-md opacity-25 group-hover:opacity-45 transition duration-500" />
              
              <div className="relative glass rounded-3xl p-4 shadow-2xl overflow-hidden">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-950 to-zinc-900 relative mb-5 border border-zinc-800/80 flex flex-col items-center justify-center p-6">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
                  
                  <div className="relative w-28 h-28 rounded-full bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center shadow-inner group/avatar">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-md opacity-20 group-hover/avatar:opacity-40 transition" />
                    <span className="text-4xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 font-sans relative z-10 select-none">
                      PH
                    </span>
                  </div>

                  <div className="mt-6 text-center z-10">
                    <p className="text-xs font-mono text-emerald-400 font-bold tracking-widest uppercase mb-1">SYSTEMS ENG</p>
                    <p className="text-[10px] text-zinc-500 font-mono tracking-normal leading-relaxed">DEVELOPER PORTFOLIO</p>
                  </div>
                  
                  <div className="absolute top-3 right-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 py-1 px-2.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Award id="award-icon" className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest font-mono">BIUST CS</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-900/60 pb-3">
                    <div>
                      <h4 className="font-bold text-white leading-tight pr-2 text-base">{PERSONAL_INFO.fullName}</h4>
                      <p className="text-xs text-emerald-400 font-medium font-sans mt-0.5">Software Engineer &amp; Student</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={PERSONAL_INFO.github}
                        id="github-link"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 rounded-xl transition-all border border-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        title="GitHub Profile"
                        aria-label="Praise's GitHub Profile"
                      >
                        <Github id="github-icon" className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        id="mailto-link"
                        className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 rounded-xl transition-all border border-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        title="Contact Email"
                        aria-label="Send Email to Praise"
                      >
                        <Mail id="email-icon" className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-zinc-950/40 py-2.5 px-3 rounded-xl border border-zinc-900 space-y-1.5 text-xs text-zinc-500 font-mono">
                    <div className="flex justify-between">
                      <span>ROLE:</span>
                      <span className="font-bold text-zinc-300">BIUST STUDENT &amp; INTERN</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LOCATION:</span>
                      <span className="text-zinc-300 font-semibold">BOTSWANA / ZIMBABWE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>STATUS:</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-ping" />
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
